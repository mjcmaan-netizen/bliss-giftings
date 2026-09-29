"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
};

type Category = {
  id: string;
  number: string;
  title: string;
  description: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "tilak-thalis",
    number: "01",
    title: "Tilak Thalis",
    description:
      "Thoughtfully designed thalis for tilak ceremonies, blessings and traditional family presentations.",
    products: [
      {
        name: "Tilak Thali 01",
        description:
          "A beautifully detailed traditional thali created for an elegant family presentation.",
        price: 1499,
        image: "/products/prasangs/baat-pakki-tilak-thali-01.jpg",
      },
      {
        name: "Tilak Thali 02",
        description:
          "A graceful tilak presentation combining traditional elements with refined detailing.",
        price: 1799,
        image: "/products/prasangs/baat-pakki-tilak-thali-02.jpg",
      },
      {
        name: "Tilak Thali 03",
        description:
          "A thoughtfully styled thali designed for a beautiful and memorable family ceremony.",
        price: 1999,
        image: "/products/prasangs/baat-pakki-tilak-thali-03.jpg",
      },
    ],
  },

  {
    id: "gol-dhana",
    number: "02",
    title: "Gol Dhana",
    description:
      "Beautifully presented Gol Dhana arrangements celebrating the coming together of two families.",
    products: [
      {
        name: "Gol Dhana Presentation 01",
        description:
          "A traditional Gol Dhana presentation beautifully arranged for the special family occasion.",
        price: 1499,
        image: "/products/prasangs/baat-pakki-gol-dhana-01.jpg",
      },
      {
        name: "Gol Dhana Presentation 02",
        description:
          "An elegant presentation combining traditional elements with beautiful decorative details.",
        price: 1799,
        image: "/products/prasangs/baat-pakki-gol-dhana-02.jpg",
      },
      {
        name: "Gol Dhana Presentation 03",
        description:
          "A refined family presentation thoughtfully created for the beginning of the alliance.",
        price: 2199,
        image: "/products/prasangs/baat-pakki-gol-dhana-03.jpg",
      },
    ],
  },

  {
    id: "shagun",
    number: "03",
    title: "Shagun Presentations",
    description:
      "Elegant cloth-show packing, shagun packing and traditional gift presentations.",
    products: [
      {
        name: "Shagun Presentation 01",
        description:
          "A beautifully finished shagun presentation created for traditional family gifting.",
        price: 999,
        image: "/products/prasangs/baat-pakki-shagun-01.jpg",
      },
      {
        name: "Shagun Presentation 02",
        description:
          "An elegant cloth-show presentation designed to make traditional gifting memorable.",
        price: 1299,
        image: "/products/prasangs/baat-pakki-shagun-02.jpg",
      },
      {
        name: "Shagun Presentation 03",
        description:
          "A thoughtfully styled presentation combining beautiful fabric and decorative detailing.",
        price: 1599,
        image: "/products/prasangs/baat-pakki-shagun-03.jpg",
      },
    ],
  },

  {
    id: "sakhar-puda",
    number: "04",
    title: "Sakhar Puda",
    description:
      "Beautiful presentations created around the traditional Sakhar Puda ceremony.",
    products: [
      {
        name: "Sakhar Puda Presentation 01",
        description:
          "A traditional Sakhar Puda presentation thoughtfully created for the family ceremony.",
        price: 1299,
        image: "/products/prasangs/baat-pakki-sakhar-puda-01.jpg",
      },
      {
        name: "Sakhar Puda Presentation 02",
        description:
          "A graceful presentation combining traditional elements with elegant finishing.",
        price: 1599,
        image: "/products/prasangs/baat-pakki-sakhar-puda-02.jpg",
      },
      {
        name: "Sakhar Puda Presentation 03",
        description:
          "A refined Sakhar Puda arrangement designed for a beautiful family exchange.",
        price: 1999,
        image: "/products/prasangs/baat-pakki-sakhar-puda-03.jpg",
      },
    ],
  },

  {
    id: "dry-fruits",
    number: "05",
    title: "Dry Fruit Packaging",
    description:
      "Premium dry-fruit boxes, trays and gifting presentations for family exchanges.",
    products: [
      {
        name: "Dry Fruit Box 01",
        description:
          "Premium dry fruits beautifully presented for gifting between families and loved ones.",
        price: 999,
        image: "/products/prasangs/baat-pakki-dry-fruit-01.jpg",
      },
      {
        name: "Dry Fruit Box 02",
        description:
          "An elegant dry-fruit presentation created for thoughtful family gifting.",
        price: 1499,
        image: "/products/prasangs/baat-pakki-dry-fruit-02.jpg",
      },
      {
        name: "Dry Fruit Tray 01",
        description:
          "A statement dry-fruit presentation designed for a beautiful traditional exchange.",
        price: 1999,
        image: "/products/prasangs/baat-pakki-dry-fruit-03.jpg",
      },
    ],
  },

  {
    id: "return-favours",
    number: "06",
    title: "Return Favours",
    description:
      "Thoughtfully curated favours to thank your guests and make the celebration memorable.",
    products: [
      {
        name: "Candle Favour 01",
        description:
          "A handcrafted candle favour created as a thoughtful keepsake for your guests.",
        price: 199,
        image: "/products/prasangs/baat-pakki-favour-01.jpg",
      },
      {
        name: "Candle Favour 02",
        description:
          "A charming handcrafted favour beautifully presented for a memorable celebration.",
        price: 249,
        image: "/products/prasangs/baat-pakki-favour-02.jpg",
      },
      {
        name: "Personalised Favour 01",
        description:
          "A personalised guest favour designed around your celebration and family.",
        price: 299,
        image: "/products/prasangs/baat-pakki-favour-03.jpg",
      },
    ],
  },
];

function ProductCarousel({
  category,
}: {
  category: Category;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToProduct = (index: number) => {
    if (!trackRef.current) return;

    const nextIndex =
      (index + category.products.length) %
      category.products.length;

    const cards =
      trackRef.current.querySelectorAll<HTMLElement>(
        "[data-product-card]"
      );

    const card = cards[nextIndex];

    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }

    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    if (category.products.length <= 1) return;

    const interval = setInterval(() => {
      const nextIndex =
        (activeIndex + 1) % category.products.length;

      scrollToProduct(nextIndex);
    }, 4500);

    return () => clearInterval(interval);
  }, [activeIndex, category.products.length]);

  return (
    <div className="relative">
      {/* DESKTOP ARROWS */}
      {category.products.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToProduct(activeIndex - 1)}
            aria-label={`Previous ${category.title}`}
            className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 -translate-x-5 items-center justify-center rounded-full border border-[#d8d0c3] bg-[#fbf8f2]/95 text-xl text-[#18352f] shadow-sm transition duration-300 hover:bg-[#18352f] hover:text-[#fbf8f2] md:flex"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scrollToProduct(activeIndex + 1)}
            aria-label={`Next ${category.title}`}
            className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 translate-x-5 items-center justify-center rounded-full border border-[#d8d0c3] bg-[#fbf8f2]/95 text-xl text-[#18352f] shadow-sm transition duration-300 hover:bg-[#18352f] hover:text-[#fbf8f2] md:flex"
          >
            →
          </button>
        </>
      )}

      {/* CAROUSEL */}
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {category.products.map((product, index) => {
          const whatsappMessage = encodeURIComponent(
            `Hi Bliss Giftings, I'm interested in ${product.name} for Baat Pakki. Please share the details.`
          );

          const whatsappLink = `https://wa.me/919998920644?text=${whatsappMessage}`;

          return (
            <article
              key={product.name}
              data-product-card
              className="group w-[82vw] shrink-0 snap-start sm:w-[48%] lg:w-[31.5%]"
            >
              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden bg-[#e9e3d9]">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#eee8de] to-[#ddd4c5]">
                  <div className="px-6 text-center">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#b9995b]">
                      Image Coming Soon
                    </p>

                    <p className="mt-3 font-serif text-2xl text-[#18352f]">
                      {product.name}
                    </p>
                  </div>
                </div>

                <div className="absolute left-4 top-4">
                  <span className="bg-[#fbf8f2]/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#18352f] backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="bg-[#fbf8f2] px-5 pb-6 pt-6">
                <h3 className="font-serif text-2xl text-[#18352f]">
                  {product.name}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#66736e]">
                  {product.description}
                </p>

                <div className="mt-5">
                  <span className="text-base font-medium text-[#18352f]">
                    From ₹
                    {product.price.toLocaleString("en-IN")}
                  </span>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#18352f] transition-all duration-300 hover:gap-5 hover:text-[#b9995b]"
                >
                  Learn More
                  <span className="text-base">→</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>

      {/* MOBILE DOTS */}
      {category.products.length > 1 && (
        <div className="mt-5 flex justify-center gap-2 md:hidden">
          {category.products.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToProduct(index)}
              aria-label={`View product ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-[#18352f]"
                  : "w-1.5 bg-[#c9c0b2]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function BaatPakkiPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#30433d]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#18352f]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102c27] via-[#18352f] to-[#24483f]" />

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-6 pb-20 md:px-12 md:pb-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#e5cd98]">
              Shubh Prasang · Baat Pakki
            </p>

            <h1 className="font-serif text-5xl leading-[1.02] text-[#fbf8f2] md:text-7xl lg:text-8xl">
              The beginning
              <br />
              <span className="text-[#e5cd98]">
                of an alliance.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#e8e4dc] md:text-lg">
              A beautiful coming together of two families, traditions and
              promises. Discover thoughtfully created details for celebrating
              the moment when a relationship becomes official.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b9995b]">
            The Baat Pakki Collection
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#18352f] md:text-5xl">
            Everything you need
            <br className="hidden md:block" />
            to make Baat Pakki beautiful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#66736e]">
            From traditional tilak thalis and Gol Dhana presentations to
            shagun packing, Sakhar Puda, dry-fruit gifting and return favours,
            explore thoughtfully created details for this special family
            occasion.
          </p>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="sticky top-0 z-30 border-y border-[#ddd5c8] bg-[#fbf8f2]/95 px-6 py-5 backdrop-blur-md md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="shrink-0 border border-[#d8d0c3] px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-[#18352f] transition duration-300 hover:border-[#18352f] hover:bg-[#18352f] hover:text-[#fbf8f2]"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          {categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28 mb-28 last:mb-0"
            >
              {/* CATEGORY HEADER */}
              <div className="mb-10 max-w-3xl">
                <div className="flex items-center gap-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#b9995b]">
                    {category.number}
                  </span>

                  <div className="h-px flex-1 bg-[#ddd5c8]" />
                </div>

                <h2 className="mt-5 font-serif text-4xl text-[#18352f] md:text-5xl">
                  {category.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-[#66736e]">
                  {category.description}
                </p>
              </div>

              {/* ROTATING PRODUCTS */}
              <ProductCarousel category={category} />
            </section>
          ))}
        </div>
      </section>

      {/* CUSTOMISATION */}
      <section className="bg-[#18352f] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#e5cd98]">
                Made for your family
              </p>

              <h2 className="font-serif text-4xl leading-tight text-[#fbf8f2] md:text-5xl">
                Your tradition.
                <br />
                Your colours.
                <br />
                Your way.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[#e8e4dc]">
                Every family celebrates differently. Our Baat Pakki
                presentations can be customised to complement your traditions,
                colour palette, gifting style and the overall feel of your
                celebration.
              </p>

              <p className="mt-5 text-base leading-8 text-[#e8e4dc]">
                Tell us what you have in mind and we can create a presentation
                that feels personal to your families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b9995b]">
            Planning your Baat Pakki?
          </p>

          <h2 className="font-serif text-4xl text-[#18352f] md:text-5xl">
            Let&apos;s create something meaningful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#66736e]">
            Tell us about your traditions, your families and what you have in
            mind. We&apos;ll help you bring the details together beautifully.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/919998920644?text=Hi%20Bliss%20Giftings%2C%20I%27m%20planning%20a%20Baat%20Pakki%20celebration%20and%20would%20like%20to%20discuss%20the%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#18352f] px-7 py-4 text-xs uppercase tracking-[0.22em] text-[#fbf8f2] transition duration-300 hover:bg-[#b9995b]"
            >
              WhatsApp Us
              <span>→</span>
            </a>

            <Link
              href="/connect"
              className="inline-flex items-center gap-3 border border-[#18352f] px-7 py-4 text-xs uppercase tracking-[0.22em] text-[#18352f] transition duration-300 hover:bg-[#18352f] hover:text-[#fbf8f2]"
            >
              Connect With Us
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
