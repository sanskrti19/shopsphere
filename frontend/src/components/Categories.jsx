import { FaLaptop, FaTshirt, FaGamepad, FaBook, FaHeadphones } from "react-icons/fa";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { id: 1, name: "Electronics", icon: FaLaptop, color: "bg-blue-100 text-blue-600" },
    { id: 2, name: "Fashion", icon: FaTshirt, color: "bg-pink-100 text-pink-600" },
    { id: 3, name: "Gaming", icon: FaGamepad, color: "bg-purple-100 text-purple-600" },
    { id: 4, name: "Books", icon: FaBook, color: "bg-green-100 text-green-600" },
    { id: 5, name: "Accessories", icon: FaHeadphones, color: "bg-yellow-100 text-yellow-600" },
    { id: 6, name: "Shoes", icon: FaTshirt, color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Shop by Category</h2>
          <p className="mt-4 text-gray-600">Explore our wide range of products across different categories</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to="/products"
                className="group rounded-xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <div className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full text-3xl transition group-hover:scale-110 ${category.color}`}>
                  <IconComponent />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-black">{category.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
