export default function Reach() {
  return (
    <section className="relative overflow-hidden bg-[#18352f] px-5 py-24 md:px-10 md:py-32 lg:px-14 lg:py-36">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          
          {/* Copy */}
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
              <span className="italic text-[#e5cd98]">borders.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-8 text-white/65 md:text-base">
              Thoughtfully creating beautiful experiences, wherever the
              celebration takes us.
            </p>
          </div>

          {/* World map */}
          <div className="relative min-h-[280px] overflow-hidden md:min-h-[420px] lg:min-h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-[900px]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full opacity-[0.18] brightness-0 invert"
                />

                {/* Soft geographic glow — deliberately label-free */}
                <div className="pointer-events-none absolute left-[55%] top-[43%] h-32 w-32 rounded-full bg-[#e5cd98]/20 blur-3xl md:h-48 md:w-48" />

                <div className="pointer-events-none absolute left-[67%] top-[38%] h-24 w-24 rounded-full bg-[#d9a89a]/15 blur-3xl md:h-36 md:w-36" />

                <div className="pointer-events-none absolute left-[30%] top-[40%] h-20 w-20 rounded-full bg-[#e5cd98]/10 blur-3xl md:h-32 md:w-32" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#18352f] via-transparent to-[#18352f]/30" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#e5cd98]/15 pt-7">
          <p className="text-center font-serif text-lg italic text-[#d9a89a] md:text-xl">
            From local celebrations to moments across borders.
          </p>
        </div>
      </div>
    </section>
  );
}
