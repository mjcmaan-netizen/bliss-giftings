"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#102c27]">
      {/* Hero image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 scale-[1.04] bg-cover bg-center animate-heroZoom"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2400&q=90')",
          }}
        />

        {/* Editorial overlays */}
        <div className="absolute inset-0 bg-[#102c27]/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#071b17]/90 via-[#102c27]/55 to-[#102c27]/10" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#071b17]/80 via-transparent to-[#071b17]/20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1500px] items-end px-5 pb-20 pt-32 sm:px-8 md:items-center md:px-10 md:pb-24 lg:px-14">
        <div
          className={`max-w-[780px] transition-all duration-[1200ms] ease-out ${
            loaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
            <span className="h-px w-8 bg-[#d8bd82] md:w-12" />

            <p className="text-[8px] uppercase tracking-[0.32em] text-[#e5cd98] md:text-[10px] md:tracking-[0.42em]">
              Gifting · Celebrations · Experiences
            </p>
          </div>

          <h1 className="font-serif text-[48px] leading-[0.94] tracking-[-0.025em] text-[#fffaf2] sm:text-[62px] md:text-[82px] lg:text-[104px]">
            For moments
            <br />
            <span className="italic text-[#e5cd98]">
              worth making beautiful.
            </span>
          </h1>

          <p className="mt-6 max-w-[600px] font-serif text-[19px] leading-7 text-[#f1dfb7] sm:text-[22px] md:mt-7 md:text-[27px] md:leading-9">
            Thoughtfully created. Beautifully brought together.
          </p>

          <p className="mt-5 max-w-[590px] text-[13px] leading-6 text-white/75 sm:text-sm sm:leading-7 md:mt-6 md:text-[15px] md:leading-8">
            Gifting, celebrations and handcrafted experiences, thoughtfully
            brought together to make life's beautiful moments even more
            meaningful.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-9">
            <Link
              href="#collections"
              className="group inline-flex min-h-[48px] items-center gap-4 border border-[#d8bd82] bg-[#d8bd82] px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#102c27] transition-all duration-500 hover:bg-transparent hover:text-[#fffaf2] sm:px-7 sm:py-4"
            >
              Explore Bliss
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/connect"
              className="inline-flex min-h-[48px] items-center gap-3 border border-white/40 px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:border-[#d8bd82] hover:text-[#e5cd98] sm:px-7 sm:py-4"
            >
              Connect Us
            </Link>
          </div>
        </div>
      </div>

      {/* Quiet location statement */}
      <div className="absolute bottom-7 right-5 z-20 hidden max-w-[270px] text-right md:block lg:right-14">
        <div className="flex items-center justify-end gap-3">
          <span className="h-px w-8 bg-[#d8bd82]" />

          <span className="text-[9px] uppercase tracking-[0.32em] text-[#d8bd82]">
            Crafted in India
          </span>
        </div>

        <p className="mt-2 text-xs leading-5 text-white/55">
          Creating beautiful gifting experiences for celebrations near and
          far.
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-5 z-20 flex items-center gap-3 md:left-10 lg:left-14">
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/45">
          Scroll to explore
        </span>

        <span className="relative block h-8 w-px overflow-hidden bg-white/20">
          <span className="absolute left-0 top-0 h-3 w-px animate-scrollLine bg-[#d8bd82]" />
        </span>
      </div>

      <style jsx>{`
        @keyframes heroZoom {
          0% {
            transform: scale(1.04);
          }

          50% {
            transform: scale(1.09);
          }

          100% {
            transform: scale(1.04);
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
            transform: translateY(220%);
            opacity: 0;
          }
        }

        .animate-heroZoom {
          animation: heroZoom 18s ease-in-out infinite;
        }

        .animate-scrollLine {
          animation: scrollLine 2.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-heroZoom,
          .animate-scrollLine {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
