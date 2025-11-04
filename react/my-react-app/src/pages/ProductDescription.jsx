import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSigleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/productss/${id}`
        );
        const data = await response.json();
        setSigleProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        navigate("/500");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const SkeletonLoader = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Skeleton */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-200 rounded-lg border border-gray-200 overflow-hidden">
            <div className="w-full h-full bg-gray-300 animate-pulse"></div>
          </div>
        </div>

        {/* Product Information Skeleton */}
        <div className="space-y-6">
          {/* Title and Rating Skeleton */}
          <div>
            <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className="w-5 h-5 bg-gray-200 rounded animate-pulse"
                  ></div>
                ))}
              </div>
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
            </div>
          </div>

          {/* Price Skeleton */}
          <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>

          {/* Features Skeleton */}
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded w-40 animate-pulse"></div>
            <div className="space-y-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-200 rounded animate-pulse shrink-0"></div>
                  <div className="h-4 bg-gray-200 rounded flex-1 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Color Options Skeleton */}
          <div className="space-y-3">
            <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
            <div className="flex space-x-3">
              {[1, 2, 3].map((color) => (
                <div
                  key={color}
                  className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"
                ></div>
              ))}
            </div>
          </div>

          {/* Quantity and Buttons Skeleton */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              <div className="flex items-center border border-gray-300 rounded-md">
                <div className="w-10 h-10 bg-gray-200 animate-pulse"></div>
                <div className="w-12 h-10 bg-gray-200 animate-pulse border-x border-gray-300"></div>
                <div className="w-10 h-10 bg-gray-200 animate-pulse"></div>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-1 h-12 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="w-12 h-12 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <div className="aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden">
                <img
                  src={singleProduct?.image}
                  alt="Wireless Headphones"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Product Title and Rating */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {singleProduct?.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {singleProduct?.rating &&
                      `${singleProduct?.rating?.rate} out of 5 stars`}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  {singleProduct?.price &&
                    `$${singleProduct?.price?.toFixed(2)}`}
                </span>
              </div>

              {/* Product Features */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {[
                    "Active Noise Cancellation Technology",
                    "30-Hour Battery Life",
                    "Quick Charge: 5 min = 3 hours playback",
                    "Premium Comfort Padding",
                    "Bluetooth 5.0 Connectivity",
                    "Built-in Microphone for Calls",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-green-500 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color Options */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Color</h3>
                <div className="flex space-x-3">
                  {[
                    {
                      name: "Midnight Black",
                      color: "bg-black",
                      selected: true,
                    },
                    { name: "Silver", color: "bg-gray-300", selected: false },
                    {
                      name: "Rose Gold",
                      color: "bg-pink-300",
                      selected: false,
                    },
                  ].map((color) => (
                    <button
                      key={color.name}
                      className={`w-10 h-10 rounded-full border-2 ${
                        color.selected ? "border-blue-500" : "border-gray-300"
                      } ${color.color} hover:scale-110 transition-transform`}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-900">
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">
                      1
                    </span>
                    <button className="px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
