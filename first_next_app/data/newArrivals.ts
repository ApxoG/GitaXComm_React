export type NewArrival = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
};

export const NewArrivals: NewArrival[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 129.99,
    image: "/products/headphones.jpg",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 199.99,
    originalPrice: 249.99,
    image: "/products/smartwatch.jpg",
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    name: "Premium Leather Backpack",
    price: 89.99,
    originalPrice: 119.99,
    image: "/products/backpack.jpg",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 4,
    name: "Wireless Charging Pad",
    price: 29.99,
    originalPrice: 39.99,
    image: "/products/charger.jpg",
    rating: 4.4,
    reviews: 203,
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 249.99,
    originalPrice: 299.99,
    image: "/products/chair.jpg",
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 49.99,
    originalPrice: 69.99,
    image: "/products/speaker.jpg",
    rating: 4.5,
    reviews: 142,
  },
  {
    id: 7,
    name: "LED Desk Lamp",
    price: 34.99,
    originalPrice: 49.99,
    image: "/products/lamp.jpg",
    rating: 4.3,
    reviews: 98,
  },
  {
    id: 8,
    name: "Mechanical Keyboard RGB",
    price: 119.99,
    originalPrice: 149.99,
    image: "/products/keyboard.jpg",
    rating: 4.9,
    reviews: 234,
  },
];
