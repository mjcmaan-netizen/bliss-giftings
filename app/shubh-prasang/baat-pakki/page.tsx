"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "919998920644";

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "tilak-thalis",
    title: "Tilak Thalis",
    subtitle:
      "Elegant tilak presentations designed for the first formal exchange of blessings and shagun.",
    products: [
      {
        name: "Tilak Thali 01",
        description:
          "A beautifully arranged tilak presentation with refined festive detailing.",
        price: "₹1,499",
        image: "/products/prasangs/baat-pakki-tilak-thali-01.jpg",
      },
      {
        name: "Tilak Thali 02",
        description:
          "A traditional presentation elevated with premium decorative details.",
        price: "₹1,799",
        image: "/products/prasangs/baat-pakki-tilak-thali-02.jpg",
      },
      {
        name: "Tilak Thali 03",
        description:
          "A statement shagun thali created for an elegant family celebration.",
        price: "₹1,999",
        image: "/products/prasangs/baat-pakki-tilak-thali-03.jpg",
      },
    ],
  },

  {
    id: "gol-dhana",
    title: "Gol Dhana",
    subtitle:
      "Beautifully presented gol dhana arrangements for this cherished Gujarati tradition.",
    products: [
      {
        name: "Gol Dhana Presentation 01",
        description:
          "A graceful gol dhana presentation designed for a memorable shagun moment.",
        price: "₹999",
        image: "/products/prasangs/baat-pakki-gol-dhana-01.jpg",
      },
      {
        name: "Gol Dhana Presentation 02",
        description:
          "Traditional gol dhana presented with a premium festive finish.",
        price: "₹1,299",
        image: "/products/prasangs/baat-pakki-gol-dhana-02.jpg",
      },
      {
        name: "Gol Dhana Presentation 03",
        description:
          "An elegant arrangement for families looking for something distinctive.",
        price: "₹1,499",
        image: "/products/prasangs/baat-pakki-gol-dhana-03.jpg",
      },
    ],
  },

  {
    id: "shagun-presentations",
    title: "Shagun Presentations",
    subtitle:
      "Thoughtfully designed presentations for envelopes, gifts and traditional shagun exchanges.",
    products: [
      {
        name: "Shagun Presentation 01",
        description:
          "A refined presentation designed to make the traditional shagun feel special.",
        price: "₹999",
        image: "/products/prasangs/baat-pakki-shagun-01.jpg",
      },
      {
        name: "Shagun Presentation 02",
        description:
          "Elegant festive detailing paired with a sophisticated presentation style.",
        price: "₹1,299",
        image: "/products/prasangs/baat-pakki-shagun-02.jpg",
      },
      {
        name: "Shagun Presentation 03",
        description:
          "A premium shagun arrangement for intimate and grand celebrations.",
        price: "₹1,599",
        image: "/products/prasangs/baat-pakki-shagun-03.jpg",
      },
    ],
  },

  {
    id: "sakhar-puda",
    title: "Sakhar Puda",
    subtitle:
      "Beautiful gifting presentations for the traditional exchange of sweetness and blessings.",
    products: [
      {
        name: "Sakhar Puda Presentation 01",
        description:
          "A beautifully styled sakhar puda presentation with festive detailing.",
        price: "₹999",
        image: "/products/prasangs/baat-pakki-sakhar-puda-01.jpg",
      },
      {
        name: "Sakhar Puda Presentation 02",
        description:
          "A refined traditional presentation created for the special occasion.",
        price: "₹1,299",
        image: "/products/prasangs/baat-pakki-sakhar-puda-02.jpg",
      },
      {
        name: "Sakhar Puda Presentation 03",
        description:
          "An elevated presentation for families looking for a premium finish.",
        price: "₹1,499",
        image: "/products/prasangs/baat-pakki-sakhar-puda-03.jpg",
      },
    ],
  },

  {
    id: "ring-platters",
    title: "Ring Platters",
    subtitle:
      "Elegant ring presentations designed for the engagement moment and photographs to remember.",
    products: [
      {
        name: "Ring Platter 01",
        description:
          "A sophisticated ring presentation designed around the engagement ceremony.",
        price: "₹1,499",
        image: "/products/prasangs/baat-pakki-ring-platter-01.jpg",
      },
      {
        name: "Ring Platter 02",
        description:
          "A statement ring platter with elegant festive detailing.",
        price: "₹1,799",
        image: "/products/prasangs/baat-pakki-ring-platter-02.jpg",
      },
      {
        name: "Ring Platter 03",
        description:
          "A premium ring presentation created for a memorable exchange.",
        price: "₹1,999",
        image: "/products/prasangs/baat-pakki-ring-platter-03.jpg",
      },
    ],
  },

  {
    id: "dry-fruit-packaging",
    title: "Dry Fruit Packaging",
    subtitle:
      "Premium dry fruit presentations for gifting families, guests and loved ones.",
    products: [
      {
        name: "Dry Fruit Packaging 01",
        description:
          "Beautifully packaged dry fruits designed for an elegant gifting experience.",
        price: "₹799",
        image: "/products/prasangs/baat-pakki-dry-fruit-01.jpg",
      },
      {
        name: "Dry Fruit Packaging 02",
        description:
          "A premium presentation combining traditional gifting with modern styling.",
        price: "₹999",
        image: "/products/prasangs/baat-pakki-dry-fruit-02.jpg",
      },
      {
        name: "Dry Fruit Packaging 03",
        description:
          "An elevated dry fruit gift created for special family celebrations.",
        price: "₹1,299",
        image: "/products/prasangs/baat-pakki-dry-fruit-03.jpg",
      },
    ],
  },

  {
    id: "return-favours",
    title: "Return Favours",
    subtitle:
      "Thoughtful little gifts that allow guests to take a piece of your celebration home.",
    products: [
      {
        name: "Return Favour 01",
        description:
          "A beautifully presented favour designed for intimate celebrations.",
        price: "₹149",
        image: "/products/prasangs/baat-pakki-favour-01.jpg",
      },
      {
        name: "Return Favour 02",
        description:
          "A memorable guest favour with elegant festive presentation.",
        price: "₹199",
        image: "/products/prasangs/baat-pakki-favour-02.jpg",
      },
      {
        name: "Return Favour 03",
        description:
          "A premium favour option designed to complement your celebration.",
        price: "₹249",
        image: "/products/prasangs/baat-pakki-favour-03.jpg",
      },
    ],
  },

  {
    id: "shrifal",
    title: "Shrifal / Shreefal",
    subtitle:
      "Traditional coconut presentations created as an auspicious symbol of blessings and beginnings.",
    products: [
      {
        name: "Shrifal Presentation 01",
        description:
          "An elegant traditional shrifal presentation with festive detailing.",
        price: "₹499",
        image: "/products/prasangs/baat-pakki-shrifal-01.jpg",
      },
      {
        name: "Shrifal Presentation 02",
        description:
          "A beautifully styled auspicious presentation for the occasion.",
        price: "₹699",
        image: "/products/prasangs/baat-pakki-shrifal-02.jpg",
      },
      {
        name: "Shrifal Presentation 03",
        description:
          "A premium shrifal arrangement designed for a sophisticated celebration.",
        price: "₹899",
        image: "/products/prasangs/baat-pakki-shrifal-03.jpg",
      },
    ],
  },
];

function whatsappLink(productName: string) {
  const message = encodeURIComponent(
    `Hi Bliss Giftings, I'm interested in "${productName}" from your Baat Pakki / Engagement collection. Please share more details.`
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function ProductCarousel({
  category,
}: {
  category: Category;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-product-card]")
    );

    if (!cards[index]) return;

    cards[index].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });

    setActiveIndex(index);
  };

  const next = () => {
    const nextIndex =
      activeIndex === category.products.length - 1 ? 0 : activeIndex + 1;

    scrollToIndex(nextIndex);
  };

  const previous = () => {
    const previousIndex =
      activeIndex === 0 ? category.products.length - 1 : activeIndex - 1;

    scrollToIndex(previousIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex =
        activeIndex === category.products.length - 1 ? 0 : activeIndex + 1;

      scrollToIndex(nextIndex);
    }, 4500);

    return () => clearInterval(interval);
  }, [activeIndex, category.products.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>("[data-product-card]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          const index = cards.indexOf(visible[0].target as HTMLElement);

          if (index >= 0) {
            setActiveIndex(index);
          }
        }
      },
      {
        root: track,
        threshold: 0.6,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [category.products.length]);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {category.products.map((product) => (
          <article
            key={product.name}
            data-product-card
            className="group min-w-[82%] snap-start overflow-hidden bg-white sm:min-w-[48%] lg:min-w-[31%]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#eee7dc]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 48vw, 31vw"
              />
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="font-serif text-2xl text-[#18352f]">
                {product.name}
              </h3>

              <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#30433d]/70">
                {product.description}
              </p>

              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#b9995b]">
                    Starting from
                  </p>

                  <p className="mt-1 font-serif text-xl text-[#18352f]">
                    {product.price}
                  </p>
                </div>

                <a
                  href={whatsappLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.15em] text-[#18352f] transition hover:text-[#b9995b]"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ARROWS */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-2">
          {category.products.map((product, index) => (
            <button
              key={product.name}
              onClick={() => scrollToIndex(index)}
              aria-label={`Show ${product.name}`}
              className={`h-1 transition-all ${
                index === activeIndex
                  ? "w-8 bg-[#b9995b]"
                  : "w-3 bg-[#b9995b]/25"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={previous}
            aria-label="Previous products"
            className="flex h-10 w-10 items-center justify-center border border-[#18352f]/20 text-[#18352f] transition hover:border-[#b9995b] hover:text-[#b9995b]"
          >
            ←
          </button>

          <button
            onClick={next}
            aria-label="Next products"
            className="flex h-10 w-10 items-center justify-center border border-[#18352f]/20 text-[#18352f] transition hover:border-[#b9995b] hover:text-[#b9995b]"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BaatPakkiPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#30433d]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src="/products/prasangs/engagement.jpg"
          alt="Baat Pakki and Engagement gifting by Bliss Giftings"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex min-h-[72vh] items-end px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e5cd98]">
              Shubh Prasang
            </p>

            <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Baat Pakki
              <br />
              <span className="text-[#e5cd98]">/ Engagement</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Thoughtfully designed gifting, shagun presentations and
              celebration details for the beautiful beginning of a new
              chapter.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16 sm:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b9995b]">
            The Collection
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#18352f] sm:text-5xl">
            Everything for the first beautiful celebration.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#30433d]/75 sm:text-base">
            Explore thoughtfully created presentations, traditional gifting
            and keepsakes for Baat Pakki and engagement celebrations.
            Everything can be customised to suit your colours, theme and
            celebration.
          </p>
        </div>
      </section>

      {/* CATEGORY NAV */}
      <div className="sticky top-0 z-30 border-y border-[#b9995b]/20 bg-[#f7f3ec]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-4 scrollbar-hide">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-[#18352f] transition hover:text-[#b9995b]"
            >
              {category.title}
            </a>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-20 border-b border-[#b9995b]/15 py-16 lg:py-20"
          >
            <div className="mb-8 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[#b9995b]">
                Baat Pakki / Engagement
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#18352f] sm:text-5xl">
                {category.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#30433d]/70">
                {category.subtitle}
              </p>
            </div>

            <ProductCarousel category={category} />
          </section>
        ))}
      </div>

      {/* CUSTOMISATION */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl border border-[#b9995b]/30 bg-[#fbf8f2] px-7 py-12 text-center sm:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b9995b]">
            Made for your celebration
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#18352f] sm:text-5xl">
            Your colours. Your style. Your story.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#30433d]/70">
            Many of our presentations can be customised in colour, material,
            packaging, fragrance and detailing. Share your inspiration with us
            and we&apos;ll create around your celebration.
          </p>

          <a
            href="https://wa.me/919998920644?text=Hi%20Bliss%20Giftings%2C%20I%20would%20like%20to%20discuss%20customisation%20for%20a%20Baat%20Pakki%20%2F%20Engagement%20celebration."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-[#18352f] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#e5cd98] transition hover:bg-[#102c27]"
          >
            Discuss Your Celebration
            <span>→</span>
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#18352f] px-6 py-20 text-center text-white sm:px-10 lg:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#e5cd98]">
          Bliss Giftings
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl sm:text-5xl">
          Let&apos;s make the beginning unforgettable.
        </h2>

        <a
          href="https://wa.me/919998920644?text=Hi%20Bliss%20Giftings%2C%20I%27m%20planning%20a%20Baat%20Pakki%20%2F%20Engagement%20celebration%20and%20would%20like%20to%20discuss%20gifting."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 border border-[#e5cd98] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#e5cd98] transition hover:bg-[#e5cd98] hover:text-[#18352f]"
        >
          Enquire on WhatsApp
          <span>→</span>
        </a>
      </section>

      <Footer />
    </main>
  );
      }
