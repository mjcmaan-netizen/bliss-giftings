"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "GIFTING", href: "/gifting" },
  { name: "SHUBH PRASANG", href: "/shubh-prasang" },
  { name: "CANDLES", href: "/candles" },
  { name: "CONNECT", href: "/connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#f8f3e9]/80 shadow-[0_6px_25px_rgba(60,45,25,0.06)] backdrop-blur-xl"
            : "bg-black/10 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[88px] w-full max-w-[1600px] items-center px-6 md:px-10 lg:px-14">
          <Link href="/" aria-label="Bliss Giftings" className="shrink-0">
            <div className="relative h-[64px] w-[64px] overflow-hidden rounded-full transition-transform duration-500 hover:scale-105">
              <Image
                src="/logo.png"
                alt="Bliss Giftings"
                fill
                priority
                sizes="64px"
                className="object-cover"
              />
            </div>
          </Link>

          <nav className="ml-auto hidden items-center gap-6 whitespace-nowrap md:flex lg:gap-8 xl:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative shrink-0"
              >
                <span
                  className={`font-serif text-[13px] font-bold italic tracking-[0.12em] transition-all duration-500 ${
                    scrolled
                      ? "text-[#243d32]"
                      : "bg-gradient-to-r from-[#c6a15b] via-[#f1d28a] to-[#b8893e] bg-clip-text text-transparent drop-shadow-[0_1px_5px_rgba(0,0,0,0.35)]"
                  }`}
                >
                  {item.name}
                </span>

                <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-[#b8893e] via-[#f1d28a] to-[#b8893e] transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto flex h-11 w-11 flex-col items-end justify-center gap-[6px] md:hidden"
          >
            <span
              className={`h-px transition-all duration-300 ${
                scrolled ? "bg-[#243d32]" : "bg-[#e3c27a]"
              } ${menuOpen ? "w-6 translate-y-[4px] rotate-45" : "w-6"}`}
            />

            <span
              className={`h-px transition-all duration-300 ${
                scrolled ? "bg-[#243d32]" : "bg-[#e3c27a]"
              } ${menuOpen ? "w-6 -translate-y-[3px] -rotate-45" : "w-4"}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[90] bg-[#102c27]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col items-center justify-center px-8">
          <div className="relative mb-12 h-[110px] w-[110px] overflow-hidden rounded-full">
            <Image
              src="/logo.png"
              alt="Bliss Giftings"
              fill
              sizes="110px"
              className="object-cover"
            />
          </div>

          <nav className="flex flex-col items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-[#c6a15b] via-[#f1d28a] to-[#b8893e] bg-clip-text font-serif text-[18px] font-bold italic tracking-[0.16em] text-transparent"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <p className="absolute bottom-10 px-6 text-center font-serif text-sm italic text-[#d8bd82]/60">
            Thoughtfully Celebrated. Beautifully Remembered.
          </p>
        </div>
      </div>
    </>
  );
}
