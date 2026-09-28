import Image from "next/image";
import { getCandles, getCandleImagePath, getWhatsAppOrderLink } from "@/lib/candles";

export default async function CandlesPage() {
  const candles = await getCandles();

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#30433d]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#18352f] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#e5cd98]">
            Bliss Giftings
          </p>

          <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-[#fbf8f2] md:text-7xl">
            Candles made to
            <br />
            <span className="text-[#e5cd98]">make moments beautiful.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#e8e4dc] md:text-lg">
            Handcrafted candles thoughtfully created for gifting, celebrations,
            return favours and the moments you want to remember.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b9995b]">
              The Collection
            </p>

            <h2 className="font-serif text-4xl text-[#18352f] md:text-5xl">
              Handcrafted with intention.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#66736e]">
              Explore our handcrafted candle collection, created to be gifted,
              cherished and remembered.
            </p>
          </div>

          {candles.length === 0 ? (
            <div className="rounded-2xl border border-[#ddd5c8] bg-[#fbf8f2] p-10 text-center">
              <p className="font-serif text-2xl text-[#18352f]">
                Our candle collection is being updated.
              </p>
              <p className="mt-3 text-sm text-[#66736e]">
                Please check back shortly.
              </p>
            </div>
          ) : (
            <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

              {candles.map((candle) => {
                const originalPrice = Math.round(candle.rate * 1.15);
                const whatsappLink = getWhatsAppOrderLink(candle);

                return (
                  <article
                    key={candle.imageCode}
                    className="group flex h-full flex-col"
                  >
                    {/* IMAGE */}
                    <div className="relative aspect-square overflow-hidden bg-[#eee8de]">
                      <Image
                        src={getCandleImagePath(candle.imageFilename)}
                        alt={candle.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      {/* Image code */}
                      <div className="absolute left-4 top-4">
                        <span className="bg-[#fbf8f2]/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#18352f] backdrop-blur-sm">
                          {candle.imageCode}
                        </span>
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="flex flex-1 flex-col bg-[#fbf8f2] px-5 pb-6 pt-6">

                      <h3 className="font-serif text-2xl text-[#18352f]">
                        {candle.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-[#66736e]">
                        {candle.description}
                      </p>

                      {/* PRICE */}
                      <div className="mt-5 flex items-baseline gap-3">
                        <span className="text-sm text-[#9a9a91] line-through">
                          ₹{originalPrice.toLocaleString("en-IN")}
                        </span>

                        <span className="text-xl font-medium text-[#18352f]">
                          ₹{candle.rate.toLocaleString("en-IN")}
                        </span>
                      </div>

                      {/* LEARN MORE */}
                      <div className="mt-auto pt-6">
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#18352f] transition-all duration-300 hover:gap-5 hover:text-[#b9995b]"
                        >
                          Learn More
                          <span className="text-base">→</span>
                        </a>
                      </div>

                    </div>
                  </article>
                );
              })}

            </div>
          )}
        </div>
      </section>

      {/* SHIPPING / CUSTOMISATION */}
      <section className="border-t border-[#ddd5c8] bg-[#fbf8f2] px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#b9995b]">
              Shipping
            </p>
            <h3 className="font-serif text-2xl text-[#18352f]">
              Worldwide delivery
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#66736e]">
              Worldwide shipping available. Shipping charges extra.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#b9995b]">
              Customisation
            </p>
            <h3 className="font-serif text-2xl text-[#18352f]">
              Made your way
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#66736e]">
              Colour and fragrance can be customised at additional charges.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
