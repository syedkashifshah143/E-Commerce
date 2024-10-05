import React from 'react';
import image from '../../assets/banner1.jpg'; // Ensure correct path to the image

const items = [
    {
        text1: "Limited Time Offer",
        text2: "Special Edition",
        paragraph: "Don’t miss out on this exclusive opportunity! Our Special Edition T-shirt is perfect for those who want to stand out with style and comfort. Available for a limited time only, this unique piece is designed to elevate your wardrobe.",
        text3: "Buy This T-shirt At 20% Discount, Use Code OFF25",
    }
    
];

const SpecialOffer = () => {
  return (
    <div 
      className="relative h-screen bg-fixed bg-cover bg-center flex items-center pl-20" 
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="rounded-lg text-white max-w-xl ">
        <h4 className="text-lg mb-2 text-white">{items[0].text1}</h4>
        <h1 className="text-4xl font-bold mb-4 text-white">{items[0].text2}</h1>
        <p className="text-base mb-6 text-white">{items[0].paragraph}</p>
        <p href="#" className="inline-block font-bold mb-4 text-white">{items[0].text3}</p>
        <div className="flex justify-start">
        <button className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-300">
          SHOP NOW
        </button>
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
