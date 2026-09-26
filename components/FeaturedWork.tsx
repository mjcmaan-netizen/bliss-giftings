const featured = [
  {
    title: "Thoughtful Gifting",
    category: "Gifting",
    image:
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Beautiful Celebrations",
    category: "Shubh Prasang",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=90",
  },
  {
    title: "Handcrafted Candles",
    category: "Candles",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-[#fbf8f2] px-6 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-2xl">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#a8874b]">
            A Glimpse of Bliss
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#18352f] md:text-6xl">
            Made for moments
            <br />
            <span className="italic text-[#a8874b]">
              worth remembering.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((item) => (
            <div key={item.title} className="group">
              <div className="aspect-[4/5] overflow-hidden bg-[#e5ded3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>

              <p className="mt-5 text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
                {item.category}
              </p>

              <h3 className="mt-2 font-serif text-2xl text-[#18352f]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
