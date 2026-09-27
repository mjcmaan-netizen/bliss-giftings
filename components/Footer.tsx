import Link from "next/link";

const navigation = [
  { name: "Gifting", href: "/gifting" },
  { name: "Shubh Prasang", href: "/shubh-prasang" },
  { name: "Candles", href: "/candles" },
  { name: "Connect Us", href: "/connect" },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M5.2 8.2H1.8V22h3.4V8.2ZM3.5 2A2 2 0 1 0 3.5 6a2 2 0 0 0 0-4ZM22 13.9c0-4.1-2.2-6-5.1-6-2.4 0-3.5 1.3-4.1 2.2V8.2H9.4V22h3.4v-7.2c0-1.9.4-3.8 2.8-3.8 2.3 0 2.3 2.1 2.3 3.9V22h3.4l.7-8.1Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .4 5.2.4 11.7c0 2.1.5 4.1 1.6 5.9L.3 24l6.5-1.7a11.7 11.7 0 0 0 5.3 1.3h.1c6.5 0 11.7-5.2 11.7-11.7 0-3.1-1.2-6.1-3.4-8.4ZM12.1 21.6c-1.7 0-3.3-.4-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.4a9.8 9.8 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9a9.8 9.8 0 0 1 2.9 6.9c0 5.5-4.4 9.9-9.9 9.9Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.3-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.9 4.4 1.8.8 2.5.9 3.4.8.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="bg-[#f7f3ec] px-6 pb-8 pt-16 md:px-10 md:pb-10 md:pt-20 lg:px-14">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid gap-12 border-b border-[#18352f]/10 pb-12 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-16">

            {/* Brand */}
            <div>
              <h2 className="font-serif text-4xl text-[#18352f]">
                Bliss
                <span className="italic text-[#a8874b]"> Giftings</span>
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-[#596b65]">
                Thoughtfully created for life&apos;s beautiful moments.
              </p>

              {/* Social Icons */}
              <div className="mt-7 flex items-center gap-5 text-[#b9995b]">
                <a
                  href="https://www.instagram.com/bliss_giftings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bliss Giftings on Instagram"
                  className="transition-all duration-300 hover:-translate-y-1 hover:text-[#18352f]"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="https://www.linkedin.com/company/bliss-giftings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bliss Giftings on LinkedIn"
                  className="transition-all duration-300 hover:-translate-y-1 hover:text-[#18352f]"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="mailto:Bliss.giftings@outlook.com"
                  aria-label="Email Bliss Giftings"
                  className="transition-all duration-300 hover:-translate-y-1 hover:text-[#18352f]"
                >
                  <MailIcon />
                </a>
              </div>
            </div>

            {/* Explore */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
                Explore
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-fit font-serif text-base text-[#30433d] transition-colors duration-300 hover:text-[#a8874b]"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-4 text-sm text-[#596b65]">
                <a
                  href="https://wa.me/919998920644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-[#a8874b]"
                >
                  +91 99989 20644
                </a>

                <a
                  href="mailto:Bliss.giftings@outlook.com"
                  className="break-all transition-colors duration-300 hover:text-[#a8874b]"
                >
                  Bliss.giftings@outlook.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center md:flex-row md:text-left">
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#596b65]">
              © {new Date().getFullYear()} Bliss Giftings · All rights reserved.
            </p>

            <p className="text-[9px] uppercase tracking-[0.18em] text-[#a8874b]">
              Crafted in India
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919998920644"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Bliss Giftings on WhatsApp"
        className="fixed bottom-5 right-5 z-[120] flex h-14 w-14 items-center justify-center rounded-full bg-[#d8bd82] text-[#18352f] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:scale-110 hover:bg-[#e5cd98] md:bottom-7 md:right-7 md:h-16 md:w-16"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}
