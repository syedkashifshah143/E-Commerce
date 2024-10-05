import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { FaUpwork } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-white rounded-lg shadow-md">

      {/* Left side with contact info */}
      <div className="md:w-1/2 p-4 border-r md:border-r-gray-300">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Info</h2>
        <div className="flex items-center mb-4">
          <FaPhone className="text-blue-600 mr-2" />
          <p className="text-lg">+92 305 832 2008</p>
        </div>
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-blue-600 mr-2" />
          <p className="text-lg">syedkashifshah3@gmail.com</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Address:</h3>
          <p>Share Faisal Ambala Bakery in Karachi</p>
        </div>
        
        {/* Connect with me section */}
        <div className="mt-10">
          <h3 className="font-bold">Connect with me:</h3>
          <div className="flex space-x-8 mt-6">
            <a href="https://www.upwork.com/freelancers/~01f0a2e0476db2ea6d" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              <FaUpwork size={24} />
            </a>
            <a href="https://www.linkedin.com/in/syedkashifshah143/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/syedkashifshah143" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition">
              <FaGithub size={24} />
            </a>
            <a href="https://wa.link/mtm7qs" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Right side with the contact form */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
