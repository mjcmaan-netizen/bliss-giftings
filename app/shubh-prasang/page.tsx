import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prasangs = [
  // WEDDING & PRE-WEDDING
  {
    name: "Baat Pakki",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  },
  {
    name: "Engagement",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.pexels.com/photos/31733607/pexels-photo-31733607.jpeg",
  },
  {
    name: "Kankotri Lekhan",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  },
  {
    name: "Mehendi",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.pexels.com/photos/32029488/pexels-photo-32029488.jpeg",
  },
  {
    name: "Haldi",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.pexels.com/photos/33078524/pexels-photo-33078524.jpeg",
  },
  {
    name: "Sangeet",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    name: "Mandva",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b",
  },
  {
    name: "Ganesh Puja",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1604881991720-f91add269bed",
  },
  {
    name: "Mameru",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
  },
  {
    name: "Shadi",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  },
  {
    name: "Wedding Reception",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
  },
  {
    name: "Bachelorette",
    category: "Wedding & Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485",
  },

  // TRADITIONAL & FAMILY
  {
    name: "Janoi / Upanayan Sanskar",
    category: "Traditional & Family",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6",
  },
  {
    name: "Annaprashan",
    category: "Traditional & Family",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4",
  },
  {
    name: "Mundan Ceremony",
    category: "Traditional & Family",
    image:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba",
  },
  {
    name: "Housewarming",
    category: "Traditional & Family",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Puja & Religious Celebrations",
    category: "Traditional & Family",
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b9d2d3d8b7",
  },

  // BABY & MILESTONES
  {
    name: "Baby Shower",
    category: "Baby & Milestones",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
  },
  {
    name: "Naming Ceremony",
    category: "Baby & Milestones",
    image:
      "https://images.unsplash.com/photo-1544126566-47401c6f6b6a",
  },
  {
    name: "Birthday",
    category: "Baby & Milestones",
    image:
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84",
  },
  {
    name: "Anniversary",
    category: "Baby & Milestones",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
];

const categories = [
  "Wedding & Pre-Wedding",
  "Traditional & Family",
  "Baby & Milestones",
];

export default function ShubhPrasangPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#30433d]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden bg-[#18352f]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552"
            alt="Indian wedding celebration"
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
              <span className="text-[#e5cd98]">
                has a story.
              </span>
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
              <div key={category} className="mb-20 last:mb-0">
                <div className="mb-8">
                  <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[#b9995b]">
                    Explore
                  </p>

                  <h2 className="font-serif text-3xl text-[#18352f] md:text-4xl">
                    {category}
                  </h2>
                </div>

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

                        <div className="absolute inset-0 bg-gradient-to-t from-[#102c27]/90 via-transparent to-transparent" />

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

      {/* CTA */}
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
