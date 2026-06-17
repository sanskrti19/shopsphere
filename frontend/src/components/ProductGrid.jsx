import ProductCard from "./ProductCard";
import { FaLaptop, FaMouse, FaHeadphones, FaGamepad, FaKeyboard, FaMonitor } from "react-icons/fa";

function ProductGrid({ title }) {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      originalPrice: 4999,
      category: "Electronics",
      rating: 4.5,
      reviews: 128,
      discount: 40,
      icon: <FaHeadphones />,
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 1499,
      originalPrice: 2499,
      category: "Gaming",
      rating: 4.8,
      reviews: 95,
      discount: 40,
      icon: <FaMouse />,
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 5999,
      originalPrice: 8999,
      category: "Gaming",
      rating: 4.7,
      reviews: 156,
      discount: 33,
      icon: <FaKeyboard />,
    },
    {
      id: 4,
      name: "4K Webcam",
      price: 3499,
      originalPrice: 5499,
      category: "Electronics",
      rating: 4.6,
      reviews: 87,
      discount: 36,
      icon: <FaMonitor />,
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 1999,
      originalPrice: 3499,
      category: "Accessories",
      rating: 4.4,
      reviews: 64,
      discount: 43,
      icon: <FaLaptop />,
    },
    {
      id: 6,
      name: "USB-C Hub",
      price: 2499,
      originalPrice: 4499,
      category: "Accessories",
      rating: 4.5,
      reviews: 102,
      discount: 44,
      icon: <FaHeadphones />,
    },
    {
      id: 7,
      name: "Gaming Headset",
      price: 3999,
      originalPrice: 6999,
      category: "Gaming",
      rating: 4.9,
      reviews: 201,
      discount: 43,
      icon: <FaHeadphones />,
    },
    {
      id: 8,
      name: "Portable SSD",
      price: 4999,
      originalPrice: 7999,
      category: "Electronics",
      rating: 4.6,
      reviews: 143,
      discount: 37,
      icon: <FaLaptop />,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        {title && (
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
            <p className="mt-4 text-gray-600">Handpicked products just for you</p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex rounded-lg border border-black px-8 py-3 font-semibold text-black transition hover:bg-black hover:text-white">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
