import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black py-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12 text-center sm:py-16 lg:py-20">
        <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
          ✨ Summer Sale - Up to 50% Off
        </span>

        <h1 className="mt-8 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Discover Smart Shopping
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
          Browse thousands of premium products curated just for you. Fast shipping, secure checkout, and 100% satisfaction guaranteed.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-center font-semibold text-black transition hover:bg-gray-100"
          >
            Shop Now
            <FaArrowRight className="text-lg" />
          </Link>

          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-transparent px-8 py-4 font-semibold text-white transition hover:bg-gray-900"
          >
            Explore Catalog
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400">✅ Free shipping on orders above ₹5000</p>
      </div>
    </section>
  );
}

export default Hero;
