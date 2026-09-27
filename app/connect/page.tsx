import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#30433d]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#18352f] px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44 lg:px-14">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#e5cd98]/10" />

        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full border border-[#e5cd98]/10" />

        <div className="relative mx-auto max-w-[1300px]">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#d8bd82]" />

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#e5cd98]">
              Connect Us
            </p>
          </div>

          <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.98] text-[#fffaf2] sm:text-6xl md:text-7xl lg:text-8xl">
            Tell us about
            <br />
            <span className="italic text-[#e5cd98]">
              your celebration.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base md:leading-8">
            Have a celebration in mind, a gifting requirement, or simply an
            idea you would like to bring to life? Tell us a little about it.
          </p>
        </div>
      </section>

      {/* Enquiry */}
      <section className="px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto grid max-w-[1300px] gap-16 lg:grid-cols-[0.6fr_1.4fr] lg:gap-24">

          {/* Intro */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#a8874b]">
              Start here
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#18352f] md:text-5xl">
              Tell us what
              <br />
              you have in mind.
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#596b65]">
              A few details will help us understand your celebration and
              prepare the right conversation for you.
            </p>

            <div className="mt-10 h-px w-16 bg-[#b9995b]" />

            <p className="mt-8 max-w-sm font-serif text-lg italic leading-7 text-[#596b65]">
              From one beautiful detail to an entire celebration.
            </p>
          </div>

          {/* Form */}
          <form
            action="https://formsubmit.co/Bliss.giftings@outlook.com"
            method="POST"
            className="space-y-10"
          >
            {/* FormSubmit configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Bliss Giftings Enquiry"
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <input
              type="hidden"
              name="_next"
              value="https://bliss-giftings.vercel.app/connect?submitted=true"
            />

            {/* Your Details */}
            <div>
              <p className="mb-6 text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
                Your Details
              </p>

              <div className="grid gap-7 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#596b65]">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="Full Name"
                    required
                    placeholder="Your name"
                    className="w-full border-b border-[#18352f]/20 bg-transparent px-0 py-3 font-serif text-base text-[#18352f] outline-none transition-colors placeholder:text-[#596b65]/40 focus:border-[#b9995b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#596b65]">
                    WhatsApp / Phone *
                  </label>

                  <input
                    type="tel"
                    name="Phone"
                    required
                    placeholder="+91"
                    className="w-full border-b border-[#18352f]/20 bg-transparent px-0 py-3 font-serif text-base text-[#18352f] outline-none transition-colors placeholder:text-[#596b65]/40 focus:border-[#b9995b]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#596b65]">
                    Email
                  </label>

                  <input
                    type="email"
                    name="Email"
                    placeholder="Your email address"
                    className="w-full border-b border-[#18352f]/20 bg-transparent px-0 py-3 font-serif text-base text-[#18352f] outline-none transition-colors placeholder:text-[#596b65]/40 focus:border-[#b9995b]"
                  />
                </div>

              </div>
            </div>

            {/* Event Details */}
            <div>
              <p className="mb-6 text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
                Event Details
              </p>

              <div className="grid gap-7 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#596b65]">
                    Occasion *
                  </label>

                  <select
                    name="Occasion"
                    required
                    defaultValue=""
                    className="w-full border-b border-[#18352f]/20 bg-transparent px-0 py-3 font-serif text-base text-[#18352f] outline-none focus:border-[#b9995b]"
                  >
                    <option value="" disabled>
                      Select occasion
                    </option>
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Roka / Baat Pakki</option>
                    <option>Mehendi</option>
                    <option>Haldi</option>
                    <option>Janoi</option>
                    <option>Mandva</option>
                    <option>Reception</option>
                    <option>Baby Shower</option>
                    <option>Naming Ceremony</option>
                    <option>Housewarming</option>
                    <option>Ganesh Puja</option>
                    <option>Birthday</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#596b65]">
                    Event Date
                  </label>

                  <input
                    type="date"
                    name="Event Date"
                    className="w-full border-b border-[#18352f]/20 bg-transparent px-0 py-3 font-serif text-base text-[#18352f] outline-none focus:border-[#b9995b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#596b65]">
                    Place / City
                  </label>

                  <input
                    type="text"
                    name="Event Location"
                    placeholder="Where is the celebration?"
                    className="w-full border-b border-[#18352f]/20 bg-transparent px-0 py-3 font-serif text-base text-[#18352f] outline-none placeholder:text-[#596b65]/40 focus:border-[#b9995b]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#596b65]">
                    Expected Guests
                  </label>

                  <input
                    type="number"
                    name="Expected Guests"
                    min="1"
                    placeholder="Approximate number"
                    className="w-full border-b border-[#18352f]/20 bg-transparent px-0 py-3 font-serif text-base text-[#18352f] outline-none placeholder:text-[#596b65]/40 focus:border-[#b9995b]"
                  />
                </div>

              </div>
            </div>

            {/* Services */}
            <div>
              <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[#a8874b]">
                What are you looking for?
              </p>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">

                {[
                  "Gifting",
                  "Return Favours",
                  "Candles",
                  "Decor",
                  "Live Stalls",
                  "Keepsakes",
                  "Complete Celebration",
                  "Other",
                ].map((service) => (
                  <label
                    key={service}
                    className="flex cursor-pointer items-center gap-2 border border-[#18352f]/10 px-3 py-3 text-[10px] text-[#596b65] transition-all hover:border-[#b9995b] hover:text-[#18352f]"
                  >
                    <input
                      type="checkbox"
                      name="Services"
                      value={service}
                      className="accent-[#b9995b]"
                    />

                    {service}
                  </label>
                ))}

              </div>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#596b65]">
                Tell us more
              </label>

              <textarea
                name="Message"
                rows={5}
                placeholder="Tell us what you have in mind..."
                className="w-full resize-none border-b border-[#18352f]/20 bg-transparent px-0 py-3 font-serif text-base leading-7 text-[#18352f] outline-none placeholder:text-[#596b65]/40 focus:border-[#b9995b]"
              />
            </div>

            {/* Submit */}
            <div className="pt-1">
              <button
                type="submit"
                className="group inline-flex items-center gap-5 bg-[#18352f] px-8 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#fffaf2] transition-all duration-500 hover:bg-[#b9995b]"
              >
                Send Enquiry

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
