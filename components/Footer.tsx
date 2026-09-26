import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Gifting", href: "/gifting" },
  { name: "Shubh Prasang", href: "/shubh-prasang" },
  { name: "Candles", href: "/candles" },
  { name: "Connect", href: "/connect" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f7f3ec] px-6 pb-8 pt-20 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-[#18352f]/10 pb-14 md:grid-cols-3">
          <div>
            <h2 className="font-serif text-4xl text-[#18352f]">
              Bliss
              <span className="italic text-[#a8874b]"> Giftings</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#596b65]">
              Thoughtfully created gifting, celebrations and beautiful details
              for life's moments worth remembering.
            </p>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit font-serif text-base text-[#30433d] transition-colors hover:text-[#a8874b]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
              Connect
            </p>

            <p className="mt-5 font-serif text-lg text-[#18352f]">
              Let's create something beautiful.
            </p>

            <Link
              href="/connect"
              className="mt-5 inline-block text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a8874b]"
            >
              Start a conversation →
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center md:flex-row md:text-left">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#596b65]">
            © {new Date().getFullYear()} Bliss Giftings. All rights reserved.
          </p>

          <p className="font-serif text-sm italic text-[#a8874b]">
            Thoughtfully Celebrated. Beautifully Remembered.
          </p>
        </div>
      </div>
    </footer>
  );
}
