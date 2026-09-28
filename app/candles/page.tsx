import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getCandles, getCandleImagePath } from "@/lib/candles";

export const revalidate = 60;

export default async function CandlesPage() {
  const candles = await getCandles();

  return (
    <main className="min-h-screen bg-[#f7f3ec]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#102c27] px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44 lg:px-14">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#e5cd98]/10" />
        <div className="pointer-events-none absolute -bottom-52 -left-40 h-[600px] w-[600px] rounded-full border border-[#e5cd98]/10" />

        <div className="relative mx-auto max-w-[1300px]">
          <p className="text-[9px] uppercase tracking-[0.42em] text-[#e5cd98]">
            The Candle Collection
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] text-[#fffaf2] md:text-7xl lg:text-8xl">
            Candles made to
            <br />
            <span className="italic text-[#e5cd98]">
              make moments glow.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/65 md:text-base md:leading-8">
            Handcrafted candles designed for gifting, celebrations,
            keepsakes and beautiful everyday moments.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.38em] text-[#a8874b]">
                Explore the collection
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#18352f] md:text-5xl">
                Made for gifting.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-xs leading-6 text-[#596b65] md:block">
              Every piece is available for worldwide shipping.
            </p>
          </div>

          {candles.length === 0 ? (
            <div className="border border-[#18352f]/10 bg-white/40 px-6 py-20 text-center">
              <p className="font-serif text-2xl text-[#18352f]">
                Our candle collection is being prepared.
              </p>

              <p className="mt-3 text-sm text-[#596b65]">
                Please check back shortly.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {candles.map((candle) => {
                const displayPrice = Math.round(candle.rate * 1.15);

                return (
                  <Link
                    key={candle.imageCode}
                    href={`/candles/${candle.imageCode.toLowerCase()}`}
                    className="group block"
                  >
                    <article>
                      {/* IMAGE */}
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#eee8dc]">
                        <Image
                          src={getCandleImagePath(candle.imageFilename)}
                          alt={candle.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                        <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          <span className="inline-flex bg-[#f7f3ec] px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#18352f]">
                            View Candle →
                          </span>
                        </div>
                      </div>

                      {/* DETAILS */}
                      <div className="pt-5">
                        <p className="text-[8px] uppercase tracking-[0.3em] text-[#a8874b]">
                          {candle.imageCode}
                        </p>

                        <h3 className="mt-2 font-serif text-2xl text-[#18352f]">
                          {candle.name}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-xs leading-6 text-[#596b65]">
                          {candle.description}
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                          <span className="text-xs text-[#8b8b82] line-through">
                            ₹{displayPrice.toLocaleString("en-IN")}
                          </span>

                          <span className="font-serif text-lg text-[#18352f]">
                            ₹{candle.rate.toLocaleString("en-IN")}
                          </span>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-[#18352f]/10 pt-4">
                          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#18352f]">
                            ORDER NOW
                          </span>

                          <span className="text-sm text-[#b9995b] transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* SHIPPING / CARE */}
      <section className="border-t border-[#18352f]/10 bg-[#fbf8f2] px-6 py-16 md:px-10 md:py-20 lg:px-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#18352f]/10">
          <div className="px-0 md:px-10 md:first:pl-0">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
              Shipping
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[#18352f]">
              Worldwide delivery
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#596b65]">
              Worldwide shipping available. Shipping charges extra.
            </p>
          </div>

          <div className="px-0 md:px-10">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
              Customisation
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[#18352f]">
              Make it yours
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#596b65]">
              Colour and fragrance can be customised at additional charges.
            </p>
          </div>

          <div className="px-0 md:px-10 md:last:pr-0">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
              Ordering
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[#18352f]">
              Simple & personal
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#596b65]">
              Select your candle and connect with us directly on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
