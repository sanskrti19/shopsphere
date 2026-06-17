import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: "all", label: "All Products" },
    { value: "electronics", label: "Electronics" },
    { value: "fashion", label: "Fashion" },
    { value: "gaming", label: "Gaming" },
    { value: "books", label: "Books" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
  };

  return (
    <div className="bg-white py-8 shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        <form onSubmit={handleSearch} className="flex flex-col gap-4 sm:flex-row">
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products, brands, and more..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 pl-12 text-gray-900 placeholder-gray-500 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-black focus:outline-none focus:ring-1 focus:ring-black appearance-none pr-10"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <FaFilter className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="rounded-lg bg-black px-8 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
