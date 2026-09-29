import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    id: "tilak-thalis",
    number: "01",
    title: "Tilak Thalis",
    description:
      "Beautifully crafted thalis for tilak ceremonies, blessings and traditional family presentations.",
  },
  {
    id: "gol-dhana",
    number: "02",
    title: "Gol Dhana",
    description:
      "Thoughtfully presented Gol Dhana arrangements celebrating the coming together of two families.",
  },
  {
    id: "shagun",
    number: "03",
    title: "Shagun Presentations",
    description:
      "Elegant cloth-show packing, shagun packing and traditional gift presentations.",
  },
  {
    id: "sakhar-puda",
    number: "04",
    title: "Sakhar Puda",
    description:
      "Beautiful presentations created around the traditional Sakhar Puda ceremony.",
  },
  {
    id: "dry-fruits",
    number: "05",
    title: "Dry Fruit Packaging",
    description:
      "Premium dry-fruit boxes, trays and gifting presentations for family exchanges.",
  },
  {
    id: "return-favours",
    number: "06",
    title: "Return Favours",
    description:
      "Thoughtfully curated favours to thank your guests and make the celebration memorable.",
  },
];

const products = [
  {
    category: "tilak-thalis",
    name: "Tilak Thali",
    description:
      "A thoughtfully styled traditional thali created for the tilak ceremony and family blessings.",
    price: "Enquire",
  },
  {
    category: "tilak-thalis",
    name: "Premium Tilak Thali",
    description:
      "An elevated tilak presentation designed with beautiful detailing for a special family occasion.",
    price: "Enquire",
  },
  {
    category: "tilak-thalis",
    name: "Custom Tilak Thali",
    description:
      "A personalised thali created around your colours, traditions and celebration style.",
    price: "Enquire",
  },

  {
    category: "gol-dhana",
    name: "Gol Dhana Presentation",
    description:
      "A beautifully arranged presentation inspired by the traditional Gujarati Gol Dhana ceremony.",
    price: "Enquire",
  },
  {
    category: "gol-dhana",
    name: "Premium Gol Dhana",
    description:
      "An elegant presentation with thoughtful styling for a more elevated family celebration.",
    price: "Enquire",
  },

  {
    category: "shagun",
    name: "Shagun Packing",
    description:
      "Beautifully finished shagun packing created for traditional family gifting and exchanges.",
    price: "Enquire",
  },
  {
    category: "shagun",
    name: "Cloth Show Packing",
    description:
      "Elegant cloth-show presentation designed to turn traditional gifting into a beautiful display.",
    price: "Enquire",
  },
  {
    category: "shagun",
    name: "Custom Shagun Presentation",
    description:
      "A personalised shagun presentation created to complement your family celebration.",
    price: "Enquire",
  },

  {
    category: "sakhar-puda",
    name: "Sakhar Puda Presentation",
    description:
      "A thoughtfully created presentation for the traditional Sakhar Puda ceremony.",
    price: "Enquire",
  },
  {
    category: "sakhar-puda",
    name: "Premium Sakhar Puda",
    description:
      "An elevated presentation combining traditional elements with refined gifting details.",
    price: "Enquire",
  },

  {
    category: "dry-fruits",
    name: "Dry Fruit Box",
    description:
      "Premium dry fruits beautifully packed for gifting between families and loved ones.",
    price: "Enquire",
  },
  {
    category: "dry-fruits",
    name: "Dry Fruit Tray",
    description:
      "A statement dry-fruit presentation designed for elegant family gifting.",
    price: "Enquire",
  },
  {
    category: "dry-fruits",
    name: "Custom Dry Fruit Packaging",
    description:
      "Personalised dry-fruit packaging created around your preferred style and celebration.",
    price: "Enquire",
  },

  {
    category: "return-favours",
    name: "Candle Favours",
    description:
      "Handcrafted candles beautifully presented as thoughtful keepsakes for your guests.",
    price: "Enquire",
  },
  {
    category: "return-favours",
    name: "Personalised Favours",
    description:
      "Small personalised gifts created to make every guest feel remembered.",
    price: "Enquire",
  },
  {
    category: "return-favours",
    name: "Custom Return Favours",
    description:
      "Curated favour options designed around your celebration, theme and budget.",
    price: "Enquire",
  },
];

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const whatsappMessage = encodeURIComponent(
    `Hi Bliss Giftings, I'm interested in ${product.name} for Baat Pakki. Please share the details.`
  );

  const whatsappLink = `https://wa.me/919998920644?text=${whatsappMessage}`;

  return (
    <article className="group flex h-full flex-col">
      {/* IMAGE PLACEHOLDER */}
      <div className="relative aspect-square overflow-hidden bg-[#e9e3d9]">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#eee8de] to-[#ddd4c5] transition duration-700 group-hover:scale-[1.02]">
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

      {/* DETAILS */}
      <div className="flex flex-1 flex-col bg-[#fbf8f2] px-5 pb-6 pt-6">
        <h3 className="font-serif text-2xl text-[#18352f]">
          {product.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#66736e]">
          {product.description}
        </p>

        <div className="mt-5">
          <span className="text-sm text-[#18352f]">
            {product.price}
          </span>
        </div>

        <div className="mt-auto pt-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#18352f] transition-all duration-300 hover:gap-5 hover:text-[#b9995b]"
          >
            Learn More
            <span className="text-base">→</span>
          </a>
        </div>
      </div>
    </article>
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

      {/* QUICK CATEGORY NAVIGATION */}
      <section className="border-y border-[#ddd5c8] bg-[#fbf8f2] px-6 py-8 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-center text-[10px] uppercase tracking-[0.3em] text-[#b9995b]">
            Explore the collection
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="border border-[#d8d0c3] px-5 py-3 text-xs uppercase tracking-[0.16em] text-[#18352f] transition duration-300 hover:border-[#18352f] hover:bg-[#18352f] hover:text-[#fbf8f2]"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT COLLECTIONS */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          {categories.map((category) => {
            const categoryProducts = products.filter(
              (product) => product.category === category.id
            );

            return (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-24 mb-28 last:mb-0"
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

                {/* PRODUCTS */}
                <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product, index) => (
                    <ProductCard
                      key={product.name}
                      product={product}
                      index={index}
                    />
                  ))}
                </div>
              </section>
            );
          })}
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
