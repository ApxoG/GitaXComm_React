import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiShoppingBag, FiUser, FiX, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  // Close cart dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wider">FASCO</div>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-black">
            All Products
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-black">
            Sign In
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiSearch className="w-5 h-5" />
          </button>
          <div className="relative" ref={cartRef}>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="p-2 hover:bg-gray-100 rounded-full relative"
            >
              <FiShoppingBag className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            {/* Cart Dropdown */}
            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 max-h-[600px] flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">
                    Shopping Cart ({getTotalItems()})
                  </h3>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded-full"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto">
                  {cartItems.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                      <FiShoppingBag className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Your cart is empty</p>
                    </div>
                  ) : (
                    <div className="p-4 space-y-4">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
                        >
                          <img
                            src={item.image || "https://via.placeholder.com/80"}
                            alt={item.title || item.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-sm mb-1 line-clamp-2">
                              {item.title || item.name}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              ${(item.price || 0).toFixed(2)}
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center border border-gray-300 rounded">
                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      (item.quantity || 1) - 1
                                    )
                                  }
                                  className="px-2 py-1 hover:bg-gray-100 text-sm"
                                >
                                  -
                                </button>
                                <span className="px-3 py-1 text-sm border-x border-gray-300">
                                  {item.quantity || 1}
                                </span>
                                <button
                                  onClick={() =>
                                    updateQuantity(
                                      item.id,
                                      (item.quantity || 1) + 1
                                    )
                                  }
                                  className="px-2 py-1 hover:bg-gray-100 text-sm"
                                >
                                  +
                                </button>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 hover:bg-red-50 text-red-600 rounded"
                              >
                                <FiTrash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">
                              $
                              {(
                                (item.price || 0) * (item.quantity || 1)
                              ).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                  <div className="p-4 border-t border-gray-200 space-y-4">
                    <div className="flex items-center justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <Link
                      to="/cart"
                      onClick={() => setIsCartOpen(false)}
                      className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      View Cart
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiUser className="w-5 h-5" />
          </button>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
