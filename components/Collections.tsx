"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const collections = [
  {
    number: "01",
    title: "Gifting",
    subtitle: "Thoughtfully curated.",
    description:
      "Corporate gifting · Festive gifting · Return favours · Hampers · Personalised gifting",
    href: "/gifting",
    images: [
      "/gifting-hamper-01.jpg",
      "/gifting-hamper-02.jpg",
    ],
    size: "large",
  },
  {
    number: "02",
    title: "Shubh Prasang",
    subtitle: "Beautifully celebrated.",
    description:
      "Thoughtful details for weddings, ceremonies and the beautiful occasions that bring people together.",
    href: "/shubh-prasang",
    images: [
      "/shubh-prasang-mehendi-01.jpg",
      "/shubh-prasang-02.jpg",
    ],
    size: "small",
  },
  {
    number: "03",
    title: "Candles",
    subtitle: "Handcrafted with love.",
    description:
      "Handcrafted creations made to bring warmth, beauty and a little more bliss to gifting and celebrations.",
    href: "/candles",
    images: [
      "/candle-floral-bouquet-01.jpg",
      "/candle-02 (1).jpg",
    ],
    size: "small",
  },
];

function CollectionImage({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default function Collections() {
  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#f7f3ec] px-5 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36"
    >
      <div className="mx-auto max-w-[1450px]">
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

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-[1.18fr_0.82fr]">
          {/* Gifting */}
          <Link
            href={collections[0].href}
            className="group relative block min-h-[520px] overflow-hidden md:min-h-[680px]"
          >
            <CollectionImage
              images={collections[0].images}
              alt="Bliss Giftings hampers"
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
                {collections[0].description}
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

          {/* Shubh Prasang + Candles */}
          <div className="grid gap-5">
            {collections.slice(1).map((collection) => (
              <Link
                key={collection.number}
                href={collection.href}
                className="group relative block min-h-[330px] overflow-hidden md:min-h-0"
              >
                <CollectionImage
                  images={collection.images}
                  alt={collection.title}
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
