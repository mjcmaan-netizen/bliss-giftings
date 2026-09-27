"use client";

import { useEffect, useState } from "react";

const locations = [
  // New York
  { left: "29.4%", top: "35.1%" },

  // Birmingham
  { left: "49.5%", top: "30.5%" },

  // Dubai
  { left: "65.35%", top: "34.7%" },

  // Sharjah
  { left: "65.45%", top: "34.8%" },

  // Maldives
  { left: "70.3%", top: "39.9%" },

  // Delhi
  { left: "71.4%", top: "29.8%" },

  // Goa
  { left: "70.6%", top: "35.8%" },

  // Mumbai
  { left: "70.25%", top: "34.8%" },

  // Pune
  { left: "70.5%", top: "35.2%" },

  // Nagpur
  { left: "71.7%", top: "33.3%" },

  // Ahmedabad
  { left: "70.2%", top: "32.7%" },

  // Rajkot
  { left: "69.8%", top: "32.3%" },

  // Vadodara
  { left: "70.9%", top: "32.7%" },
];

export default function Reach() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#18352f] px-5 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

          <div className="relative z-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#d8bd82]" />

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#e5cd98]">
                Our Reach
              </p>
            </div>

            <h2 className="mt-7 max-w-lg font-serif text-5xl leading-[0.98] text-[#fffaf2] md:text-6xl lg:text-7xl">
              Across
              <br />
              <span className="italic text-[#e5cd98]">
                borders.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-8 text-white/65 md:text-base">
              Thoughtfully creating beautiful experiences, wherever the
              celebration takes us.
            </p>
          </div>

          <div className="relative w-full">
            <div className="relative mx-auto aspect-[2/1] w-full max-w-[1000px] overflow-hidden">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Equirectangular_projection_world_map_without_borders.svg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-contain opacity-[0.18] brightness-0 invert"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#18352f] via-transparent to-[#18352f]" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#18352f]/30 via-transparent to-[#18352f]/40" />

              {locations.map((location, index) => (
                <span
                  key={`${location.left}-${location.top}-${index}`}
                  className={`absolute z-10 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e5cd98] shadow-[0_0_10px_3px_rgba(229,205,152,0.55)] transition-all duration-1000 ${
                    visible
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                  style={{
                    left: location.left,
                    top: location.top,
                  }}
                >
                  <span
                    className="absolute inset-[-7px] rounded-full border border-[#e5cd98]/35"
                    style={{
                      animation: "reachPulse 2.8s ease-out infinite",
                      animationDelay: `${index * 180}ms`,
                    }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#e5cd98]/15 pt-7">
          <p className="text-center font-serif text-lg italic text-[#d9a89a] md:text-xl">
            From local celebrations to moments across borders.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes reachPulse {
          0% {
            transform: scale(0.65);
            opacity: 0.7;
          }

          70% {
            transform: scale(1.8);
            opacity: 0;
          }

          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          span {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
