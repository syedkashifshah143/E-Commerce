import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Motasim from '../../assets/Profile/Motasim.jpg';
import Daniyal from '../../assets/Profile/Daniyal.jpg';
import Hammad from '../../assets/Profile/Hammad.jpg';
import Irfan from '../../assets/Profile/Irfan.jpg';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%", zIndex: 1 }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-2xl" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", borderRadius: "50%", zIndex: 1 }}
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-2xl" />
    </div>
  );
};

const testimonialsData = [
  {
    name: "Motasim",
    job: "Web Developer",
    message: "Amazing quality and fast shipping! Highly recommend.",
    image: Motasim,
  },
  {
    name: "Daniyal",
    job: "Web Developer",
    message: "The best shopping experience I've ever had!",
    image: Daniyal,
  },
  {
    name: "Hammad",
    job: "Web Developer",
    message: "Excellent customer service and great products.",
    image: Hammad,
  },
  {
    name: "Irfan",
    job: "Web Developer",
    message: "The products are top-notch and the delivery was lightning fast! Will definitely shop again.",
    image: Irfan,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md flex flex-col justify-between"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="rounded-full mr-4 w-16 h-16 object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-bold">{testimonial.name}</span>
                  <span className="text-gray-500 text-sm">{testimonial.job}</span>
                </div>
              </div>
              <p className="text-gray-600 text-left mb-4">{testimonial.message}</p>
              <div className="flex mb-1">
                {/* Static 5 stars */}
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
