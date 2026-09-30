"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const weddingPrasangs = [
  {
    name: "Baat Pakki / Engagement",
    image: "/products/prasangs/baat-pakki.jpg",
    href: "/shubh-prasang/baat-pakki",
  },
  {
    name: "Kankotri Lekhan",
    image: "/products/prasangs/kankotri-lekhan.jpg",
    href: "#",
  },
  {
    name: "Mehendi",
    image: "/products/prasangs/mehendi.jpg",
    href: "#",
  },
  {
    name: "Haldi",
    image: "/products/prasangs/haldi.jpg",
    href: "#",
  },
  {
    name: "Sangeet",
    image: "/products/prasangs/sangeet.jpg",
    href: "#",
  },
  {
    name: "Ganesh Puja",
    image: "/products/prasangs/ganesh-puja.jpg",
    href: "#",
  },
  {
    name: "Mata Ki Chowki",
    image: "/products/prasangs/mata-ki-chowki.jpg",
    href: "#",
  },
  {
    name: "Mameru",
    image: "/products/prasangs/mameru.jpg",
    href: "#",
  },
  {
    name: "Shadi",
    image: "/products/prasangs/shadi.jpg",
    href: "#",
  },
  {
    name: "Wedding Reception",
    image: "/products/prasangs/wedding-reception.jpg",
    href: "#",
  },
  {
    name: "Bachelorette",
    image: "/products/prasangs/bachelorette.jpg",
    href: "#",
  },
];

const familyPrasangs = [
  {
    name: "Janoi / Upanayan Sanskar",
    image: "/products/prasangs/janoi.jpg",
    href: "#",
  },
  {
    name: "Annaprashan",
    image: "/products/prasangs/annaprashan.jpg",
    href: "#",
  },
  {
    name: "Mundan Ceremony",
    image: "/products/prasangs/mundan.jpg",
    href: "#",
  },
  {
    name: "Housewarming",
    image: "/products/prasangs/housewarming.jpg",
    href: "#",
  },
  {
    name: "Puja & Religious Celebrations",
    image: "/products/prasangs/puja.jpg",
    href: "#",
  },
  {
    name: "Jiyanu",
    image: "/products/prasangs/jiyanu.jpg",
    href: "#",
  },
  {
    name: "Baby Shower",
    image: "/products/prasangs/baby-shower.jpg",
    href: "#",
  },
  {
    name: "Naming Ceremony",
    image: "/products/prasangs/naming-ceremony.jpg",
    href: "#",
  },
  {
    name: "Birthday",
    image: "/products/prasangs/birthday.jpg",
    href: "#",
  },
  {
    name: "Anniversary",
    image: "/products/prasangs/anniversary.jpg",
    href: "#",
  },
];

function PrasangCard({
  name,
  image,
  href,
}: {
  name: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[2px] bg-white"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-serif text-xl text-white sm:text-2xl">
            {name}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#e5cd98]">
            Explore
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function PrasangSection({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: {
    name: string;
    image: string;
    href: string;
  }[];
}) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b9995b]">
            Bliss Giftings
          </p>

          <h2 className="font-serif text-4xl text-[#18352f] sm:text-5xl">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#30433d]/75 sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {items.map((item) => (
            <PrasangCard
              key={item.name}
              name={item.name}
              image={item.image}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ShubhPrasangPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#30433d]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/products/prasangs/shubh-prasang-hero.jpg"
          alt="Shubh Prasang by Bliss Giftings"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 flex min-h-[70vh] items-end px-6 pb-16 sm:px-10 lg:px-16 lg:pb-20">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e5cd98]">
              Shubh Prasang
            </p>

            <h1 className="font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              For the moments
              <br />
              worth remembering.
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Thoughtfully designed gifting, presentations, keepsakes and
              experiences for life&apos;s most meaningful celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16 text-center sm:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b9995b]">
            Celebrate beautifully
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#18352f] sm:text-5xl">
            Every celebration has its own story.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#30433d]/75 sm:text-base">
            From the first formal shagun to weddings, milestones and family
            traditions, Bliss Giftings creates thoughtful details that make
            each occasion feel personal.
          </p>
        </div>
      </section>

      {/* WEDDING */}
      <PrasangSection
        title="Wedding & Pre-Wedding"
        subtitle="Elegant gifting and celebration details for the occasions that lead up to the big day and the moments surrounding it."
        items={weddingPrasangs}
      />

      {/* DIVIDER */}
      <div className="mx-auto max-w-7xl border-t border-[#b9995b]/20" />

      {/* FAMILY */}
      <PrasangSection
        title="Traditional & Family Celebrations"
        subtitle="Thoughtful gifting and keepsakes for cherished family traditions, milestones and celebrations."
        items={familyPrasangs}
      />

      {/* CTA */}
      <section className="bg-[#18352f] px-6 py-20 text-center text-white sm:px-10 lg:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-[#e5cd98]">
          Create something memorable
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
          Have a celebration in mind?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
          Tell us about your occasion and we&apos;ll help you create the
          gifting and celebration details around it.
        </p>

        <a
          href="https://wa.me/919998920644"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 border border-[#e5cd98] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#e5cd98] transition hover:bg-[#e5cd98] hover:text-[#18352f]"
        >
          Connect on WhatsApp
          <span>→</span>
        </a>
      </section>

      <Footer />
    </main>
  );
}
