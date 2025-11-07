import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaStar,
  FaHeart,
  FaShareAlt,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { HiShieldCheck, HiTruck, HiSupport } from "react-icons/hi";
import { FiArrowLeft, FiShoppingBag } from "react-icons/fi";
import userContext from "../context/userContext";
import { useContext } from "react";

function SingleProduct() {
  const { id } = useParams();

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const colors = ["Black", "White", "Gray", "Navy", "Red"];

  const { user } = useContext(userContext);

  const handleAddToCart = () => {
    if (product) {
      // Add product to local cart

      if (user?.sub) {
        fetch("https://fakestoreapi.com/carts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.sub,
            products: [{ id: product.id, quantity }],
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log("Cart saved to API:", data));
      }
    }
  };
  // const product = {
  //   id: parseInt(id) || 1,
  //   name: "Shiny Dress",
  //   price: "$95.50",
  //   originalPrice: "$120.00",
  //   rating: 5,
  //   reviews: 128,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin aliquam sem. This elegant dress features premium materials and exceptional craftsmanship.",
  //   images: [
  //     "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800",
  //     "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800",
  //     "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800",
  //     "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
  //   ],
  //   inStock: true,
  //   sku: "FASCO-001",
  //   category: "Women's Collection",
  // };

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

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
    <div className="min-h-screen bg-white">
      {/* Header */}

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-6"
        >
          <FiArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <span className="text-sm text-gray-600">{product.category}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
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
                <span className="text-sm text-gray-600">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm font-semibold">
                    Save 20%
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Size Selection */}
            {(product.category === "men's clothing" ||
              product.category === "women's clothing") && (
              <div className="mb-6">
                <label className="block text-sm font-semibold mb-3">
                  Size: {selectedSize}
                </label>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded border-2 ${
                        selectedSize === size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-500"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">
                Color: {selectedColor}
              </label>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 ${
                      selectedColor === color
                        ? "border-black scale-110"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                    style={{
                      backgroundColor:
                        color === "Black"
                          ? "#000"
                          : color === "White"
                          ? "#fff"
                          : color === "Gray"
                          ? "#808080"
                          : color === "Navy"
                          ? "#000080"
                          : "#ff0000",
                    }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                className="flex-1 bg-black text-white px-8 py-4 rounded hover:bg-gray-800 font-semibold"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button className="px-6 py-4 border border-gray-300 rounded hover:bg-gray-100">
                <FaHeart className="w-5 h-5" />
              </button>
              <button className="px-6 py-4 border border-gray-300 rounded hover:bg-gray-100">
                <FaShareAlt className="w-5 h-5" />
              </button>
            </div>

            {/* Product Info */}
            <div className="border-t border-gray-200 pt-6 mb-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">SKU:</span>{" "}
                  <span className="font-semibold">{product.sku}</span>
                </div>
                <div>
                  <span className="text-gray-600">Category:</span>{" "}
                  <span className="font-semibold">{product.category}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <FaStar className="text-yellow-400 text-xl" />
                <span className="text-sm">High Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <HiShieldCheck className="text-xl" />
                <span className="text-sm">Warranty Protection</span>
              </div>
              <div className="flex items-center gap-3">
                <HiTruck className="text-xl" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <HiSupport className="text-xl" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
