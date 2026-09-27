"use client";

import Link from "next/link";

const collections = [
  {
    number: "01",
    title: "Gifting",
    subtitle: "Thoughtfully curated.",
    description:
      "Corporate gifting, festive gifting, return favours, hampers and personalised creations — brought together for every kind of giving.",
    href: "/gifting",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1800&q=90",
    size: "large",
  },
  {
    number: "02",
    title: "Shubh Prasang",
    subtitle: "Beautifully celebrated.",
    description:
      "Thoughtful details for weddings, ceremonies and the beautiful occasions that bring people together.",
    href: "/shubh-prasang",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=90",
    size: "small",
  },
  {
    number: "03",
    title: "Candles",
    subtitle: "Handcrafted with love.",
    description:
      "Handcrafted creations made to bring warmth, beauty and a little more bliss to gifting and celebrations.",
    href: "/candles",
    image:
      "https://images.unsplash.com/photo-1602874801006-e26b9c2e4e1c?auto=format&fit=crop&w=1400&q=90",
    size: "small",
  },
];

export default function Collections() {
  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#f7f3ec] px-5 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36"
    >
      <div className="mx-auto max-w-[1450px]">
        {/* Section introduction */}
        <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#b9995b]" />

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#a8874b]">
                Explore Bliss
              </p>
            </div>

            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.02] text-[#18352f] sm:text-5xl md:text-6xl lg:text-7xl">
              Three expressions.
              <br />
              <span className="italic text-[#a8874b]">
                One thoughtful approach.
              </span>
            </h2>
          </div>

          <div className="max-w-lg md:ml-auto">
            <p className="text-sm leading-7 text-[#596b65] md:text-base md:leading-8">
              From thoughtful gifting to beautifully celebrated occasions and
              handcrafted candles, every part of Bliss is created around the
              moments worth remembering.
            </p>
          </div>
        </div>

        {/* Editorial collection layout */}
        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-[1.18fr_0.82fr]">
          {/* Gifting */}
          <Link
            href={collections[0].href}
            className="group relative block min-h-[520px] overflow-hidden md:min-h-[680px]"
          >
            <img
              src={collections[0].image}
              alt="Gifting"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071b17]/90 via-[#102c27]/25 to-transparent" />

            <div className="absolute left-6 top-6 md:left-8 md:top-8">
              <span className="text-[10px] tracking-[0.3em] text-[#e5cd98]">
                01
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#e5cd98]">
                Thoughtfully curated.
              </p>

              <h3 className="mt-3 font-serif text-5xl text-[#fffaf2] md:text-6xl lg:text-7xl">
                Gifting
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                Corporate gifting · Festive gifting · Return favours · Hampers
                · Personalised gifting
              </p>

              <div className="mt-7 flex items-center gap-4">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#fffaf2]">
                  Explore Gifting
                </span>

                <span className="h-px w-9 bg-[#e5cd98] transition-all duration-500 group-hover:w-16" />

                <span className="text-[#e5cd98] transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>

          {/* Right column */}
          <div className="grid gap-5">
            {collections.slice(1).map((collection) => (
              <Link
                key={collection.number}
                href={collection.href}
                className="group relative block min-h-[330px] overflow-hidden md:min-h-0"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b17]/90 via-[#102c27]/25 to-transparent" />

                <div className="absolute left-6 top-6 md:left-7 md:top-7">
                  <span className="text-[10px] tracking-[0.3em] text-[#e5cd98]">
                    {collection.number}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#e5cd98]">
                    {collection.subtitle}
                  </p>

                  <h3 className="mt-2 font-serif text-4xl text-[#fffaf2] md:text-5xl">
                    {collection.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                    {collection.description}
                  </p>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="text-[9px] uppercase tracking-[0.28em] text-[#fffaf2]">
                      Explore
                    </span>

                    <span className="h-px w-7 bg-[#e5cd98] transition-all duration-500 group-hover:w-12" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-14 flex flex-col gap-5 border-t border-[#18352f]/10 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-lg italic text-[#53645f] md:text-xl">
            Every creation begins with a moment worth celebrating.
          </p>

          <Link
            href="/connect"
            className="w-fit text-[9px] font-semibold uppercase tracking-[0.25em] text-[#18352f] transition-colors duration-300 hover:text-[#a8874b]"
          >
            Have something in mind? →
          </Link>
        </div>
      </div>
    </section>
  );
}
