import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const prasangs = [
  {
    name: "Baat Pakki",
    category: "Wedding & Pre-Wedding",
    image:
      "https://www.google.com/search?client=ms-android-nothing-terr1-reo3&hs=C52V&sca_esv=080dae4805299e94&sxsrf=APpeQnv_OmPEjzQjnsf1XaTkbs6rLIGLXw:1790592838486&udm=2&fbs=ABfTbFXXq5_lq1-qc-RNbCT-iVCvZUY4OllCx8eHi2DBbGa2PoUPiBop7GRck9_ggqJeBKn6MPa4i3PVHgXv4WYtWNsfy3WXyyzlh9YFkB6yl-mFA6RdF86VFRSu1TdReUTnMXEcx7xyCs3vrClsGNwZAtjY8pOka6OewQ0F88P1LvFuoBn0EWiNAGxLKVqOSTWbuZwNyJ3M-ebcTyQGYGlOi_Bt-NXVldICDnbK6zHFzzO-c7ihdeg&q=baat+pakki",
  },
  {
    name: "Engagement",
    category: "Wedding & Pre-Wedding",
    image:
      "https://www.google.com/search?client=ms-android-nothing-terr1-reo3&hs=ZkNB&sca_esv=080dae4805299e94&sxsrf=APpeQnuM791rpT_aQEp9Ny9BSj45P7ClZw:1790592879809&udm=2&fbs=ABfTbFXmzBGw9LECshVETHbdczUekrr4P3jxmDQ00QvQP6rDCfvRDF3m1JTFCpkx8Z4iq9zhL2WVxpvyM7bUx2m9DqWBh23JCnQShnxJs64FiD7l-rfNr49SYKeWV3qCiaEd61PA0D0jl7m92vrtd9I1uwsehWnNgE7n0Df83cnWurx88bzYwHDzLOc9ISVlWDyDp7P7GYChZSfelcJxM6aGpcm5xlDC1nfkH45ZppCtfP82Pwyh52Y&q=engagement",
  },
  {
    name: "Kankotri Lekhan",
    category: "Wedding & Pre-Wedding",
    image:
      "https://www.google.com/search?client=ms-android-nothing-terr1-reo3&hs=sPiq&sca_esv=080dae4805299e94&sxsrf=APpeQntZdkLDN0kYMYk3H301rG-uOpJ-LA:1790592907583&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832VstEKsVDqPorK0Gahnm2nq-aQnTz_mBV-EZYISbLc-StUIq_PhL7hb0Qt0YiIGOHkJjnTZ-cOFt4MBdBh9xxUSVRKmiEusZuD8DlVlOopefENvkiM3UgC_ep-24yehGm1ryqNEd5H2ziPusS84gJQMy7Mt2qU02wrAARl5mmE-5i7hhPffmt2bjoXn9viPnBdbTsEw&q=kankotri+lekhan",
  },
  {
    name: "Mehendi",
    category: "Wedding & Pre-Wedding",
    image:
      "https://www.google.com/search?q=mehendi+decoration&client=ms-android-nothing-terr1-reo3&hs=akNB&sca_esv=080dae4805299e94&udm=2&biw=411&bih=783",
  },
  {
    name: "Haldi",
    category: "Wedding & Pre-Wedding",
    image:
      "https://www.google.com/search?sa=X&sca_esv=080dae4805299e94&udm=2&q=haldi+decoration+balloons&biw=411&bih=783",
  },

  // TEMPORARY PLACEHOLDERS
  {
    name: "Sangeet",
    category: "Wedding & Pre-Wedding",
    image: "",
  },
  {
    name: "Mandva",
    category: "Wedding & Pre-Wedding",
    image: "",
  },
  {
    name: "Ganesh Puja",
    category: "Wedding & Pre-Wedding",
    image: "",
  },
  {
    name: "Mameru",
    category: "Wedding & Pre-Wedding",
    image: "",
  },
  {
    name: "Shadi",
    category: "Wedding & Pre-Wedding",
    image: "",
  },
  {
    name: "Wedding Reception",
    category: "Wedding & Pre-Wedding",
    image: "",
  },
  {
    name: "Bachelorette",
    category: "Wedding & Pre-Wedding",
    image: "",
  },
  {
    name: "Janoi / Upanayan Sanskar",
    category: "Traditional & Family",
    image: "",
  },
  {
    name: "Annaprashan",
    category: "Traditional & Family",
    image: "",
  },
  {
    name: "Mundan Ceremony",
    category: "Traditional & Family",
    image: "",
  },
  {
    name: "Housewarming",
    category: "Traditional & Family",
    image: "",
  },
  {
    name: "Puja & Religious Celebrations",
    category: "Traditional & Family",
    image: "",
  },
  {
    name: "Baby Shower",
    category: "Baby & Milestones",
    image: "",
  },
  {
    name: "Naming Ceremony",
    category: "Baby & Milestones",
    image: "",
  },
  {
    name: "Birthday",
    category: "Baby & Milestones",
    image: "",
  },
  {
    name: "Anniversary",
    category: "Baby & Milestones",
    image: "",
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#102c27] via-[#18352f]/90 to-[#18352f]/70" />
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

      {/* PRASANGS */}
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
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd6ca]">
                        {prasang.image ? (
                          <img
                            src={prasang.image}
                            alt={prasang.name}
                            className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#e9e3d9]">
                            <span className="px-6 text-center font-serif text-xl text-[#18352f]/50">
                              Image coming soon
                            </span>
                          </div>
                        )}

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
