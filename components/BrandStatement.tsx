export default function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-[#18352f] px-6 py-28 md:px-10 md:py-36 lg:px-14">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#e5cd98]/15" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full border border-[#e5cd98]/10" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#d8bd82]" />

          <span className="text-[9px] uppercase tracking-[0.4em] text-[#e5cd98]">
            The Bliss Philosophy
          </span>

          <span className="h-px w-10 bg-[#d8bd82]" />
        </div>

        <h2 className="mt-8 font-serif text-4xl leading-tight text-[#fffaf2] md:text-6xl lg:text-7xl">
          Because the most beautiful
          <br />
          <span className="italic text-[#e5cd98]">
            moments deserve to stay.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-white/65 md:text-base">
          At Bliss Giftings, we believe gifting is more than giving something.
          It is about creating a feeling, celebrating a milestone and turning
          meaningful moments into memories that stay with you.
        </p>

        <div className="mt-10">
          <span className="font-serif text-lg italic text-[#d9a89a]">
            Thoughtfully Celebrated. Beautifully Remembered.
          </span>
        </div>
      </div>
    </section>
  );
}
