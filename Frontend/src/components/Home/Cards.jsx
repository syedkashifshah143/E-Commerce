import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../assets/t-shirt1.jpg";
import image2 from "../../assets/t-shirt2.jpg";
import image3 from "../../assets/t-shirt3.jpg";

const products = [
  {
    name: "Graphic Tee",
    description: "Stylish graphic T-shirt with vibrant colors.",
    price: 29.99,
    image: image1,
  },
  {
    name: "Vintage Logo Tee",
    description: "Classic vintage logo T-shirt for a timeless look.",
    price: 24.99,
    image: image2,
  },
  {
    name: "Plain White Tee",
    description: "Essential plain white T-shirt, perfect for layering.",
    price: 19.99,
    image: image3,
  },
];

const Cards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-10">
      {products.map((product, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
          data-aos={index === 0 ? "fade-right" : index === 1 ? "fade-left" : "fade-up"}
        >
          <img
            src={product.image}
            alt='product'
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute font-bold inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-20">
            <h2 className="text-xl text-white mb-2">{product.name}</h2>
            <p className="text-white mb-2">{product.description}</p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-2xl font-semibold text-white">
                ${product.price.toFixed(2)}
              </p>
              <span className="text-white font-bold">Discount: 30% OFF</span>
            </div>
            <button className="bg-blue-600 text-white font-bold py-2 px-4 w-32 h-10 rounded hover:bg-blue-700 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
