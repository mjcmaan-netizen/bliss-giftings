export type Candle = {
  imageCode: string;
  name: string;
  rate: number;
  description: string;
  imageFilename: string;
};

const GOOGLE_SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vTe43jvJtAN4jdciJkNmVWt7mUOHLhvv-waksVaYqBUajfmdkOhrJIKuBw0n7wcoNTLy6svRxw2HIhx/pub?output=csv";

function parseCSV(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let insideQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    const next = csv[i + 1];

    if (char === '"' && insideQuotes && next === '"') {
      value += '"';
      i++;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === "," && !insideQuotes) {
      row.push(value.trim());
      value = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && next === "\n") {
        i++;
      }

      row.push(value.trim());
      value = "";

      if (row.some((cell) => cell !== "")) {
        rows.push(row);
      }

      row = [];
      continue;
    }

    value += char;
  }

  if (value !== "" || row.length > 0) {
    row.push(value.trim());

    if (row.some((cell) => cell !== "")) {
      rows.push(row);
    }
  }

  return rows;
}

export async function getCandles(): Promise<Candle[]> {
  const response = await fetch(GOOGLE_SHEET_CSV, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Unable to load the Bliss Giftings candle catalogue. Status: ${response.status}`
    );
  }

  const csv = await response.text();
  const rows = parseCSV(csv);

  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].map((header) =>
    header.trim().toLowerCase()
  );

  const imageCodeIndex = headers.indexOf("image code");
  const nameIndex = headers.indexOf("candle name");
  const rateIndex = headers.indexOf("rate (₹)");
  const descriptionIndex = headers.indexOf("description");
  const imageFilenameIndex = headers.indexOf("image filename");

  if (
    imageCodeIndex === -1 ||
    nameIndex === -1 ||
    rateIndex === -1 ||
    descriptionIndex === -1 ||
    imageFilenameIndex === -1
  ) {
    throw new Error(
      "The Google Sheet columns do not match the Bliss Giftings candle catalogue format."
    );
  }

  return rows
    .slice(1)
    .map((row) => {
      const rateText = row[rateIndex]
        ?.replace(/[₹,\s]/g, "")
        .trim();

      return {
        imageCode: row[imageCodeIndex]?.trim() || "",
        name: row[nameIndex]?.trim() || "",
        rate: Number(rateText) || 0,
        description: row[descriptionIndex]?.trim() || "",
        imageFilename: row[imageFilenameIndex]?.trim() || "",
      };
    })
    .filter(
      (candle) =>
        candle.imageCode &&
        candle.name &&
        candle.imageFilename
    );
}

export async function getCandleByCode(
  imageCode: string
): Promise<Candle | undefined> {
  const candles = await getCandles();

  return candles.find(
    (candle) =>
      candle.imageCode.toLowerCase() === imageCode.toLowerCase()
  );
}

export function getCandleImagePath(filename: string): string {
  return `/products/candles/${filename}`;
}

export function getWhatsAppOrderLink(candle: Candle): string {
  const message = encodeURIComponent(
    `Hi Bliss Giftings, I'm interested in ${candle.imageCode} — ${candle.name}. Please share the details.`
  );

  return `https://wa.me/919998920644?text=${message}`;
}
