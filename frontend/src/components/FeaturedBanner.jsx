import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";

function FeaturedBanner() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-black p-12 text-white md:p-16">
          {/* Background effect */}
          <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2">
            <div className="h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
              <FaFire className="text-xl" />
              <span className="font-semibold">Flash Sale</span>
            </div>

            <h2 className="mt-6 text-4xl font-bold md:text-5xl">Limited Time Offer</h2>
            <p className="mt-4 max-w-lg text-lg text-gray-100">
              Get up to 50% off on selected items. This offer is valid for 48 hours only. Don't miss out!
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-100"
              >
                Shop Now
              </Link>
              <button className="inline-flex items-center justify-center rounded-lg border border-white px-8 py-3 font-semibold text-white transition hover:bg-white/10">
                Learn More
              </button>
            </div>

            {/* Countdown Timer */}
            <div className="mt-12 grid grid-cols-4 gap-4 sm:gap-8">
              {[
                { label: "Days", value: "02" },
                { label: "Hours", value: "14" },
                { label: "Minutes", value: "36" },
                { label: "Seconds", value: "42" },
              ].map((time) => (
                <div key={time.label} className="text-center">
                  <div className="rounded-lg bg-black/30 px-3 py-2 text-2xl font-bold backdrop-blur-sm md:px-4 md:py-3 md:text-4xl">
                    {time.value}
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest md:text-sm">{time.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBanner;
