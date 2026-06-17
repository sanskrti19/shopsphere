import { Link } from "react-router-dom";
import { FaShoppingCart, FaStar, FaEye } from "react-icons/fa";
import { useState } from "react";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-2xl bg-white shadow-md transition hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-gray-100">
        <div className="flex h-full items-center justify-center text-6xl text-gray-300">
          {product.icon}
        </div>

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          {product.category}
        </span>

        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute right-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            -{product.discount}%
          </span>
        )}

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 backdrop-blur-sm">
            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-black transition hover:bg-gray-100">
              <FaShoppingCart />
              Add
            </button>
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 font-semibold text-white transition hover:bg-gray-800"
            >
              <FaEye />
              View
            </Link>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < Math.floor(product.rating) ? "" : "opacity-30"} />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <span className="text-2xl font-bold text-black">₹{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="line-through text-gray-500">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="mt-5 flex gap-2">
          <button className="flex-1 rounded-lg bg-black py-2 font-semibold text-white transition hover:bg-gray-800">
            Add to Cart
          </button>
          <Link
            to={`/products/${product.id}`}
            className="flex-1 rounded-lg border border-gray-300 py-2 text-center font-semibold text-gray-900 transition hover:bg-gray-50"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
