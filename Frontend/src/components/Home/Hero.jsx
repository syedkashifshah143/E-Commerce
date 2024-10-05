import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RxDotFilled } from 'react-icons/rx';
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";

const products = [
  {
    name: 'Classic White Tee',
    description: 'Stay stylish and comfortable in our classic white tee, perfect for any casual occasion.',
    image: image1
  },
  {
    name: 'Graphic Tee',
    description: "Make a statement with our bold graphic tee, designed to stand out wherever you go.",
    image: image2
  },
  {
    name: 'Vintage Style Tee',
    description: 'Embrace nostalgia with our vintage-style tee, a timeless addition to your wardrobe.',
    image: image3
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={products[currentIndex].image}
          alt='slide image'
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between items-center px-4">
        <button onClick={handlePrev} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300">
          <FaChevronLeft />
        </button>

        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 p-4 rounded-md shadow-md  text-white text-center">
  <h1 className="text-3xl font-bold mb-2">{products[currentIndex].name}</h1>
  <p className="text-lg text-white">{products[currentIndex].description}</p>
</div>


        <button onClick={handleNext} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300">
          <FaChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {products.map((product, index) => (
          <RxDotFilled
            key={index}
            className={`cursor-pointer text-white ${index === currentIndex ? 'text-lg' : 'text-sm'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
