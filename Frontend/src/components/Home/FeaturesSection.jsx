import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGlobe, FaTags, FaLock, FaTshirt, FaShippingFast, FaRedoAlt, FaClipboardCheck } from "react-icons/fa";

const FeaturesSection = () => {
    const features = [
        {
          icon: <FaGlobe size={50} className="text-blue-500" />,
          title: "Worldwide Shipping",
          description: "We deliver across the globe with reliable services.",
        },
        {
          icon: <FaTshirt size={50} className="text-green-500" />,
          title: "Best Quality",
          description: "Our products are crafted from the finest materials.",
        },
        {
          icon: <FaTags size={50} className="text-yellow-500" />,
          title: "Best Offers",
          description: "Get the best deals and discounts on our products.",
        },
        {
          icon: <FaLock size={50} className="text-red-500" />,
          title: "Secure Payments",
          description: "Your payments are 100% secure and protected.",
        },
        {
          icon: <FaShippingFast size={50} className="text-purple-500" />,
          title: "Free Shipping",
          description:
            "Shopping with no extra charges – savor the liberty of complimentary shipping on every order.",
        },
        {
          icon: <FaRedoAlt size={50} className="text-orange-500" />,
          title: "Easy Returns",
          description:
            "With our hassle-free Easy Returns, changing your mind has never been more convenient.",
        },
        {
          icon: <FaClipboardCheck size={50} className="text-teal-500" />,
          title: "Order Tracking",
          description:
            "Stay in the loop with our Order Tracking feature – from checkout to your doorstep.",
        },
      ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <section className="py-16">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-[#e9ecef] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              data-aos="fade-up"
            >
              <div className="text-indigo-600 mb-6 flex justify-center items-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 whitespace-nowrap">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
