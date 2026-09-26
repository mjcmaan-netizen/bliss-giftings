"use client";

import Link from "next/link";
import { useState } from "react";

const collections = [
  {
    number: "01",
    title: "Gifting",
    eyebrow: "Thoughtfully Curated",
    description:
      "From corporate gifting and festive hampers to return favours and personalised creations, discover gifts made to leave a lasting impression.",
    href: "/gifting",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "02",
    title: "Shubh Prasang",
    eyebrow: "Beautifully Celebrated",
    description:
      "Thoughtful details for the moments that matter — from intimate ceremonies to weddings and celebrations filled with meaning.",
    href: "/shubh-prasang",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "03",
    title: "Candles",
    eyebrow: "Handcrafted With Love",
    description:
      "Handcrafted candles created to bring warmth, beauty and a little more bliss to gifting, celebrations and everyday moments.",
    href: "/candles",
    image:
      "https://images.unsplash.com/photo-1602874801006-e26b9c2e4e1c?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function Collections() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#f7f3ec] px-6 py-24 md:px-10 md:py-32 lg:px-14"
    >
      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#b9995b]" />

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#a8874b]">
              Discover Bliss
            </p>

            <span className="h-px w-10 bg-[#b9995b]" />
          </div>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#18352f] md:text-6xl">
            A world of thoughtful
            <br />
            <span className="italic text-[#a8874b]">creations.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#596b65] md:text-base">
            Explore the different expressions of Bliss Giftings — each
            thoughtfully created to make gifting, celebrations and beautiful
            moments feel even more special.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {collections.map((collection, index) => {
            const isActive = activeCard === index;

            return (
              <Link
                key={collection.number}
                href={collection.href}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#ded6c9]">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${
                      isActive ? "scale-110" : "scale-100"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102c27]/90 via-[#102c27]/25 to-transparent" />

                  <div className="absolute left-6 top-6">
                    <span className="text-[10px] tracking-[0.3em] text-[#e5cd98]">
                      {collection.number}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#e5cd98]">
                      {collection.eyebrow}
                    </p>

                    <h3 className="mt-3 font-serif text-4xl text-[#fffaf2] md:text-[42px]">
                      {collection.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
                      {collection.description}
                    </p>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="text-[9px] uppercase tracking-[0.28em] text-[#fffaf2]">
                        Explore
                      </span>

                      <span className="h-px w-8 bg-[#e5cd98] transition-all duration-500 group-hover:w-14" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-[#18352f]/10 pt-8 md:flex-row">
          <p className="max-w-xl text-center font-serif text-lg italic text-[#53645f] md:text-left">
            Every creation begins with a moment worth celebrating.
          </p>

          <Link
            href="/connect"
            className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.25em] text-[#18352f] transition-colors duration-300 hover:text-[#a8874b]"
          >
            Have something in mind? →
          </Link>
        </div>
      </div>
    </section>
  );
}
