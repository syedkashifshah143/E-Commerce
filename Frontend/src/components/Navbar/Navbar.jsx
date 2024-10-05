import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for mobile menu

const Navbar = () => {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedProfileImage = localStorage.getItem("profileImage");
    setUsername(storedUsername || "");
    setProfileImage(storedProfileImage || "");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("profileImage");
    localStorage.removeItem("token");
    setUsername("");
    setProfileImage("");
    setDropdownOpen(false);
    navigate("/login");
  };

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between bg-teal-600 font-bold text-white items-center p-4 z-50">
      {isAuthenticated && (
        <p className="hidden md:block text-white">Welcome Back! {username}</p>
      )}
      <div className="flex-grow flex justify-center">
        <ul className="hidden md:flex gap-10">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">All Products</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-teal-600 flex flex-col items-center md:hidden">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2">About</Link>
            <Link to="/product" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2">All Products</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2">Contact us</Link>
          </div>
        )}
      </div>

      <div className="flex items-center ">
        {isAuthenticated ? (
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={profileImage ? `http://localhost:5000/${profileImage}` : 'path_to_default_image'}
                alt={`${username}'s profile`}
                onError={(e) => { e.target.src = 'path_to_default_image'; }}
              />
              <span className="ml-2 text-white">{username}</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 bg-white text-black p-2 rounded shadow mt-2 w-48 z-50">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={profileImage ? `http://localhost:5000/${profileImage}` : 'path_to_default_image'}
                    alt={`${username}'s profile`}
                    onError={(e) => { e.target.src = 'path_to_default_image'; }}
                  />
                  <div className="flex flex-col">
                    <h2 className="font-bold">{username}</h2>
                    <button onClick={handleLogout} className="mt-1 text-red-500 w-full text-left">Logout</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-white text-teal-600 font-bold py-1 px-4 rounded">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
