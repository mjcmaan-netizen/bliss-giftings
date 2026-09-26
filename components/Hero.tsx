"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#172c27]">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 scale-[1.06] bg-cover bg-center animate-heroZoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-[#102c27]/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071b17]/90 via-[#102c27]/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#071b17]/90 via-[#071b17]/30 to-transparent" />

        <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#d8bd82]/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 pb-24 pt-32 md:px-10 lg:px-14">
        <div
          className={`max-w-4xl transition-all duration-[1200ms] ease-out ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-[#d8bd82]" />

            <p className="text-[9px] uppercase tracking-[0.42em] text-[#e3c98d] md:text-[10px]">
              Gifting • Celebrations • Beautiful Details
            </p>
          </div>

          <h1 className="max-w-5xl font-serif text-[52px] leading-[0.96] tracking-[-0.025em] text-[#fffaf2] sm:text-[68px] md:text-[84px] lg:text-[104px]">
            Thoughtfully
            <br />
            <span className="italic text-[#e6cd94]">
              Celebrated.
            </span>
          </h1>

          <p className="mt-6 font-serif text-2xl italic tracking-wide text-[#f1dfb7] sm:text-3xl md:text-4xl">
            Beautifully Remembered.
          </p>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 md:text-[15px] md:leading-8">
            Thoughtfully curated gifting, beautiful celebrations, meaningful
            keepsakes and unforgettable experiences — created with intention
            and crafted around your story.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#collections"
              className="group inline-flex items-center gap-4 border border-[#d8bd82] bg-[#d8bd82] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#102c27] transition-all duration-500 hover:bg-transparent hover:text-[#fffaf2]"
            >
              Explore Bliss
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/connect"
              className="inline-flex items-center gap-4 border border-white/40 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.24em] text-white transition-all duration-500 hover:border-[#d8bd82] hover:text-[#e5cd98]"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-6 z-20 hidden max-w-[280px] text-right md:block">
        <div className="flex items-center justify-end gap-3">
          <span className="h-px w-8 bg-[#d8bd82]" />
          <span className="text-[9px] uppercase tracking-[0.32em] text-[#d8bd82]">
            Crafted in India
          </span>
        </div>

        <p className="mt-2 text-xs leading-5 text-white/60">
          Creating beautiful gifting experiences for celebrations near and far.
        </p>
      </div>

      <div className="absolute bottom-10 left-6 z-20 flex items-center gap-4 md:left-10 lg:left-14">
        <span className="text-[8px] uppercase tracking-[0.35em] text-white/50">
          Scroll to explore
        </span>

        <span className="relative block h-10 w-px overflow-hidden bg-white/20">
          <span className="absolute left-0 top-0 h-4 w-px animate-scrollLine bg-[#d8bd82]" />
        </span>
      </div>

      <style jsx>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1.06);
          }
          50% {
            transform: scale(1.11);
          }
          100% {
            transform: scale(1.06);
          }
        }

        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateY(250%);
            opacity: 0;
          }
        }

        .animate-heroZoom {
          animation: heroZoom 16s ease-in-out infinite;
        }

        .animate-scrollLine {
          animation: scrollLine 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
