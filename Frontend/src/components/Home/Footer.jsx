import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-teal-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="hover:text-teal-300">Home</Link>
              </li>
              <li>
                <Link to="/shop" onClick={scrollToTop} className="hover:text-teal-300">Shop</Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-teal-300">About</Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-teal-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Social Media</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-300">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm">© {new Date().getFullYear()} E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
