import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prasangs = [
  // WEDDING & PRE-WEDDING
  {
    name: "Baat Pakki",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/baat-pakki.jpg",
  },
  {
    name: "Engagement",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/engagement.jpg",
  },
  {
    name: "Kankotri Lekhan",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/kankotri-lekhan.jpg",
  },
  {
    name: "Mehendi",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/mehendi.jpg",
  },
  {
    name: "Haldi",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/haldi.jpg",
  },
  {
    name: "Sangeet",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/sangeet.jpg",
  },
  {
    name: "Ganesh Puja",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/ganesh-puja.jpg",
  },
  {
    name: "Mata Ki Chowki",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/mata-ki-chowki.jpg",
  },
  {
    name: "Mameru",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/mameru.jpg",
  },
  {
    name: "Shadi",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/shadi.jpg",
  },
  {
    name: "Wedding Reception",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/wedding-reception.jpg",
  },
  {
    name: "Bachelorette",
    category: "Wedding & Pre-Wedding",
    image: "/prasangs/bachelorette.jpg",
  },

  // TRADITIONAL & FAMILY CELEBRATIONS
  {
    name: "Janoi / Upanayan Sanskar",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/janoi.jpg",
  },
  {
    name: "Annaprashan",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/annaprashan.jpg",
  },
  {
    name: "Mundan Ceremony",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/mundan.jpg",
  },
  {
    name: "Housewarming",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/housewarming.jpg",
  },
  {
    name: "Puja & Religious Celebrations",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/puja.jpg",
  },
  {
    name: "Jiyanu",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/jiyanu.jpg",
  },
  {
    name: "Baby Shower",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/baby-shower.jpg",
  },
  {
    name: "Naming Ceremony",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/naming-ceremony.jpg",
  },
  {
    name: "Birthday",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/birthday.jpg",
  },
  {
    name: "Anniversary",
    category: "Traditional & Family Celebrations",
    image: "/prasangs/anniversary.jpg",
  },
];

const categories = [
  "Wedding & Pre-Wedding",
  "Traditional & Family Celebrations",
];

export default function ShubhPrasangPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#30433d]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden bg-[#18352f]">
        <div className="absolute inset-0">
          <Image
            src="/prasangs/shubh-prasang-hero.jpg"
            alt="Shubh Prasang celebrations"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#102c27]/90 via-[#18352f]/60 to-[#18352f]/30" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-6 pb-20 md:px-12 md:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#e5cd98]">
              Shubh Prasang
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] text-[#fbf8f2] md:text-7xl lg:text-8xl">
              Every celebration
              <br />
              <span className="text-[#e5cd98]">has a story.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#f0ece4] md:text-lg">
              From the first family gathering to the wedding day and every
              beautiful milestone in between, we create thoughtful details
              that make every Shubh Prasang feel truly yours.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b9995b]">
            Celebrate Your Way
          </p>

          <h2 className="font-serif text-4xl leading-tight text-[#18352f] md:text-5xl">
            Thoughtfully created for
            <br className="hidden md:block" />
            life&apos;s most meaningful moments.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#66736e]">
            Explore our celebrations and discover gifting, presentations,
            keepsakes, candles, experiences and beautifully considered details
            created for each occasion.
          </p>
        </div>
      </section>

      {/* PRASANG CATEGORIES */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl">
          {categories.map((category) => {
            const categoryPrasangs = prasangs.filter(
              (prasang) => prasang.category === category
            );

            return (
              <div key={category} className="mb-24 last:mb-0">
                {/* CATEGORY HEADING */}
                <div className="mb-10">
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#b9995b]">
                    Explore
                  </p>

                  <h2 className="font-serif text-3xl text-[#18352f] md:text-4xl">
                    {category}
                  </h2>
                </div>

                {/* CARDS */}
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {categoryPrasangs.map((prasang) => (
                    <Link
                      key={prasang.name}
                      href="#"
                      className="group block"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#e9e3d9]">
                        <Image
                          src={prasang.image}
                          alt={prasang.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          className="object-cover transition duration-700 ease-out group-hover:scale-105"
                        />

                        {/* IMAGE OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#102c27]/90 via-transparent to-transparent" />

                        {/* CARD CONTENT */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="font-serif text-2xl text-[#fbf8f2]">
                            {prasang.name}
                          </h3>

                          <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#e5cd98]">
                            Explore

                            <span className="transition-transform duration-300 group-hover:translate-x-2">
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="bg-[#18352f] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-3xl leading-relaxed text-[#fbf8f2] md:text-5xl">
            From a thoughtfully presented thali to a beautifully curated
            celebration,{" "}
            <span className="text-[#e5cd98]">
              we take care of the details that make the moment yours.
            </span>
          </p>
        </div>
      </section>

      {/* CONNECT CTA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b9995b]">
            Planning a celebration?
          </p>

          <h2 className="font-serif text-4xl text-[#18352f] md:text-5xl">
            Let&apos;s create something beautiful.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#66736e]">
            Tell us about your occasion and let&apos;s bring your ideas,
            traditions and celebrations together.
          </p>

          <Link
            href="/connect"
            className="mt-8 inline-flex items-center gap-3 border border-[#18352f] px-7 py-4 text-xs uppercase tracking-[0.22em] text-[#18352f] transition duration-300 hover:bg-[#18352f] hover:text-[#fbf8f2]"
          >
            Connect With Us
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
