import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaFilter, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FiGrid, FiList } from "react-icons/fi";

function AllProducts() {
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const categories = [
    "All",
    "men's clothing",
    "electronics",
    "jewelery",
    "women's clothing",
  ];

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  filteredProducts.sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    } else if (sortBy === "rating") {
      return b.rating.rate - a.rating.rate;
    }
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All Products</h1>
          <p className="text-gray-600">
            Discover our complete collection of fashion items
          </p>
        </div>

        {/* Filters and View Options */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-4 flex-wrap">
              <FaFilter className="text-gray-600" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(category === "All" ? "all" : category)
                    }
                    className={`px-4 py-2 rounded ${
                      (selectedCategory === "all" && category === "All") ||
                      selectedCategory === category
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort and View */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <div className="flex gap-2 border border-gray-300 rounded">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FiGrid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FiList className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
                viewMode === "list" ? "flex gap-4" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  viewMode === "list" ? "w-48 shrink-0" : ""
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full object-cover hover:scale-105 transition-transform duration-300 ${
                    viewMode === "list" ? "h-48" : "h-80"
                  }`}
                />
                {product.originalPrice && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    Sale
                  </div>
                )}
              </div>
              <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                <h3 className="font-semibold mb-2">{product.title}</h3>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }, (_, index) => {
                    const rate = product?.rating?.rate || 0;
                    const starValue = index + 1;

                    if (starValue <= Math.floor(rate)) {
                      return <FaStar key={index} className="text-yellow-400" />;
                    } else if (
                      starValue === Math.ceil(rate) &&
                      rate % 1 >= 0.5
                    ) {
                      return (
                        <FaStarHalfAlt
                          key={index}
                          className="text-yellow-400"
                        />
                      );
                    } else {
                      return (
                        <FaRegStar key={index} className="text-yellow-400" />
                      );
                    }
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
                <button className="mt-3 w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Previous
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 border rounded ${
                page === 1
                  ? "bg-black text-white border-black"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
