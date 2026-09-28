import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Tilak Thali",
    description:
      "Thoughtfully designed tilak thalis created for the traditional welcome and blessings that mark the beginning of a beautiful alliance.",
    image: "/products/prasangs/baat-pakki-tilak-thali.jpg",
  },
  {
    title: "Gol Dhana",
    description:
      "Beautifully presented Gol Dhana arrangements inspired by the traditional Gujarati ceremony, thoughtfully styled for the families coming together.",
    image: "/products/prasangs/baat-pakki-gol-dhana.jpg",
  },
  {
    title: "Shagun Presentations",
    description:
      "Elegant shagun presentations including cloth-show packing, traditional gift packing and beautifully finished presentations for family exchanges.",
    image: "/products/prasangs/baat-pakki-shagun.jpg",
  },
  {
    title: "Sakhar Puda",
    description:
      "Traditional Sakhar Puda presentations thoughtfully created to celebrate the formal beginning of the relationship between two families.",
    image: "/products/prasangs/baat-pakki-sakhar-puda.jpg",
  },
  {
    title: "Dry Fruit Packaging",
    description:
      "Premium dry-fruit packaging designed for family gifting, beautifully presented for the occasion and customised to suit your celebration.",
    image: "/products/prasangs/baat-pakki-dry-fruits.jpg",
  },
  {
    title: "Return Favours",
    description:
      "Thoughtfully curated return favours to thank your guests and make the celebration memorable long after the occasion.",
    image: "/products/prasangs/baat-pakki-return-favours.jpg",
  },
];

export default function BaatPakkiPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#30433d]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden bg-[#18352f]">
        <div className="absolute inset-0">
          {/* IMAGE PLACEHOLDER */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#18352f] via-[#21453d] to-[#102c27]" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#102c27]/95 via-[#18352f]/70 to-[#18352f]/30" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-6 pb-20 md:px-12 md:pb-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#e5cd98]">
              Shubh Prasang
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] text-[#fbf8f2] md:text-7xl lg:text-8xl">
              Baat Pakki
              <br />
              <span className="text-[#e5cd98]">
                The beginning of an alliance.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#f0ece4] md:text-lg">
              A beautiful coming together of two families, traditions and
              promises. Discover thoughtfully created details for celebrating
              the moment when the relationship becomes official.
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
            Traditional details,
            <br className="hidden md:block" />
            beautifully presented.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#66736e]">
            From traditional thalis and Gol Dhana presentations to shagun
            packing, Sakhar Puda, dry-fruit gifting and return favours, every
            detail is thoughtfully created to make the occasion feel special.
          </p>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-x-7 gap-y-16 md:grid-cols-2">
            {sections.map((section, index) => (
              <article key={section.title} className="group">
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e3d9]">
                  {/* IMAGE PLACEHOLDER */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#eee8de] to-[#ddd4c5]">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-[0.25em] text-[#b9995b]">
                        Baat Pakki
                      </p>

                      <p className="mt-2 font-serif text-2xl text-[#18352f]">
                        {section.title}
                      </p>

                      <p className="mt-2 text-xs text-[#66736e]">
                        Image coming soon
                      </p>
                    </div>
                  </div>

                  {/* IMAGE CODE */}
                  <div className="absolute left-4 top-4">
                    <span className="bg-[#fbf8f2]/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#18352f] backdrop-blur-sm">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pt-6">
                  <h3 className="font-serif text-3xl text-[#18352f]">
                    {section.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#66736e]">
                    {section.description}
                  </p>

                  <Link
                    href="/connect"
                    className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#18352f] transition-all duration-300 hover:gap-5 hover:text-[#b9995b]"
                  >
                    Enquire
                    <span className="text-base">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
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
                From the smallest detail to the complete presentation, we
                create pieces that feel personal to your families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECT CTA */}
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
