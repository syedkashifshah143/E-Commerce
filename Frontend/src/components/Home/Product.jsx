import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import product_1 from "../../assets/product_1.png";
import product_2 from "../../assets/product_2.png";
import product_3 from "../../assets/product_3.png";
import product_4 from "../../assets/product_4.png";
import product_5 from "../../assets/product_5.png";
import product_6 from "../../assets/product_6.png";
import product_7 from "../../assets/product_7.png";
import product_8 from "../../assets/product_8.png";
import product_9 from "../../assets/product_9.png";
import product_10 from "../../assets/product_10.png";

const products = [
  {
    name: "Stylish Blouse",
    description: "A stylish blouse perfect for casual outings.",
    new_price: 50.0,
    old_price: 80.5,
    image: product_1,
  },
  {
    name: "Chic Linen Summer Dress",
    description: "Lightweight and breathable, ideal for summer days.",
    new_price: 75.0,
    old_price: 110.0,
    image: product_2,
  },
  {
    name: "Casual Denim Jacket",
    description: "A versatile jacket that goes with everything.",
    new_price: 60.0,
    old_price: 90.0,
    image: product_3,
  },
  {
    name: "Elegant Floral Maxi Dress",
    description: "Perfect for evening events and weddings.",
    new_price: 95.0,
    old_price: 130.0,
    image: product_4,
  },
  {
    name: "Classic White Sneakers",
    description: "Comfortable and stylish for everyday wear.",
    new_price: 45.0,
    old_price: 70.0,
    image: product_5,
  },
  {
    name: "Trendy Backpack",
    description: "Functional and stylish, perfect for daily use.",
    new_price: 55.0,
    old_price: 85.0,
    image: product_6,
  },
  {
    name: "Sophisticated Watch",
    description: "A timeless piece for any occasion.",
    new_price: 150.0,
    old_price: 200.0,
    image: product_7,
  },
  {
    name: "Stylish Sunglasses",
    description: "Protect your eyes while looking fabulous.",
    new_price: 25.0,
    old_price: 40.0,
    image: product_8,
  },
  {
    name: "Cozy Knit Sweater",
    description: "Warm and comfy for chilly days.",
    new_price: 40.0,
    old_price: 60.0,
    image: product_9,
  },
  {
    name: "Classic Chino Pants",
    description: "Versatile pants that can be dressed up or down.",
    new_price: 50.0,
    old_price: 75.0,
    image: product_10,
  },
];

const ProductCard = ({ product, onRate, isZoomed, onZoom }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    onRate(product.name, rate);
  };

  return (
    <div
      data-aos="fade-up"
      className="border border-gray-300 rounded-lg p-4 text-center bg-white shadow-md"
    >
      <div className="relative">
        <img
          src={product.image}
          alt="Product"
          className={`object-cover mb-2 rounded transition-transform duration-300 ${isZoomed ? 'scale-110' : 'scale-100'}`}
          style={{ transformOrigin: 'center' }}
        />
        <button
          className="absolute left-2 top-2 text-gray-600 hover:text-gray-900"
          onClick={onZoom}
        >
          <AiOutlineSearch size={24} />
        </button>
        <button
          className="absolute right-2 top-2 text-gray-600 hover:text-gray-900"
          onClick={() => console.log(`Added ${product.name} to cart`)} // Placeholder for adding to cart functionality
        >
          <FaShoppingBag size={24} />
        </button>
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <div className="flex justify-between items-center my-6">
        <p className="text-xl font-bold">${product.new_price.toFixed(2)}</p>
        <p className="line-through text-gray-500">
          ${product.old_price.toFixed(2)}
        </p>
      </div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${rating >= star ? "text-yellow-500" : "text-gray-300"}`}
            onClick={() => handleRating(star)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

const Product = () => {
  const [zoomedProduct, setZoomedProduct] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleRating = (productName, rating) => {
    console.log(`Rated ${productName} with ${rating} stars`);
  };

  const handleZoom = (image) => {
    setZoomedProduct(image);
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-3xl font-bold my-10">Products Item</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            onRate={handleRating}
            isZoomed={zoomedProduct === product.image}
            onZoom={() => handleZoom(product.image)}
          />
        ))}
      </div>

      {/* Display the zoomed image if one is selected */}
      {zoomedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <img
            src={zoomedProduct}
            alt="Zoomed Product"
            className="transform scale-110"
            onClick={() => setZoomedProduct(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Product;
