import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bliss Giftings | Thoughtfully Celebrated. Beautifully Remembered.",
  description:
    "Thoughtfully curated gifting, beautiful celebrations, meaningful keepsakes and handcrafted creations by Bliss Giftings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
