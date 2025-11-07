import { useState, useEffect, useContext } from "react";
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiArrowUp,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { FaStar, FaStarHalfAlt, FaRegStar, FaInstagram } from "react-icons/fa";
import { HiShieldCheck, HiTruck, HiSupport } from "react-icons/hi";
import userContext from "../context/userContext";

function Home() {
  const { user } = useContext(userContext);
  console.log(user);

  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 6,
    minutes: 5,
    seconds: 30,
  });
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const dealsOfTheMonth = allProducts?.filter((product) => product?.price < 20);

  const [activeTab, setActiveTab] = useState("Men's Collection");
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "James K.",
      text: "Great quality products and fast shipping!",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Sarah M.",
      text: "Love the new collection, highly recommend!",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Michael T.",
      text: "Best shopping experience ever!",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Banner */}
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
              alt="Men's fashion"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle Banner - Promotional */}
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-lg overflow-hidden aspect-[3/4] relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300"
                  alt="Collection"
                  className="w-full rounded-lg mb-4"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                ULTIMATE SALE
              </h2>
              <p className="text-xl mb-6">NEW COLLECTION</p>
              <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
                SHOP NOW
              </button>
              <div className="mt-4">
                <img
                  src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300"
                  alt="Collection"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Banner */}
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"
              alt="Men's fashion"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3">
        <button className="bg-black text-white p-3 rounded-lg shadow-lg hover:bg-gray-800">
          <FiShoppingBag className="w-5 h-5" />
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-100 border border-gray-200"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Brand Logos */}
      <section className="max-w-7xl mx-auto px-6 py-8 border-y border-gray-200">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="text-xl font-bold">CHANEL</div>
          <div className="text-xl font-bold">LOUIS VUITTON</div>
          <div className="text-xl font-bold">PRADA</div>
          <div className="text-xl font-bold">Calvin Klein</div>
          <div className="text-xl font-bold">DENIM</div>
        </div>
      </section>

      {/* Deals Of The Month */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Deals Of The Month
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin aliquam sem.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded mb-6 hover:bg-gray-800">
              Buy Now
            </button>
            <div>
              <p className="text-sm font-semibold mb-3">
                Hurry, Before It's Too Late!
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="bg-gray-100 px-4 py-2 rounded text-2xl font-bold">
                    {String(timeLeft.days).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Days</div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 px-4 py-2 rounded text-2xl font-bold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Hr</div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 px-4 py-2 rounded text-2xl font-bold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Mins</div>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 px-4 py-2 rounded text-2xl font-bold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Sec</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {dealsOfTheMonth.map((item) => (
                  <div key={item?.id} className="min-w-full relative">
                    <img
                      src={item?.image}
                      alt={`Deal ${item}`}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded">
                      <p className="text-xs text-gray-600">Opening Soon</p>
                      <p className="font-bold">30% OFF</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 2))
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev < 2 ? prev + 1 : 0))
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <FiArrowRight className="w-5 h-5" />
            </button>
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((dot) => (
                <button
                  key={dot}
                  onClick={() => setCurrentSlide(dot)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === dot ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-center">
          New Arrivals
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            "Women's Collection",
            "Men's Collection",
            "More Accessories",
            "Children's and Trendy",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {allProducts.slice(0, 9).map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold mb-2">{product?.title}</h3>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }, (_, index) => {
                  const rate = product?.rating?.rate || 0;
                  const starValue = index + 1;

                  if (starValue <= Math.floor(rate)) {
                    return <FaStar key={index} className="text-yellow-400" />;
                  } else if (starValue === Math.ceil(rate) && rate % 1 >= 0.5) {
                    return (
                      <FaStarHalfAlt key={index} className="text-yellow-400" />
                    );
                  } else {
                    return (
                      <FaRegStar key={index} className="text-yellow-400" />
                    );
                  }
                })}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{product?.price}</span>
                <button className="bg-red-500 text-white px-4 py-1 rounded text-sm hover:bg-red-600">
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
            View More
          </button>
        </div>
      </section>

      {/* Featured Product - Peaky Blinders */}

      {/* Follow Us On Instagram */}

      {/* Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-center">
          This Is What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg"
                style={{ transform: `translateX(${index * 20}px)` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className="text-yellow-400 text-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => {}}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {}}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <FiArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Subscribe To Newsletter */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin aliquam sem.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="michael@gmail.com"
                className="flex-1 border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
                Subscribe Now
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600"
              alt="Newsletter"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default Home;
