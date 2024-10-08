import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RegisterForm from './components/Login/RegisterForm';
import LoginForm from './components/Login/LoginForm';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';
import Product from './components/Home/Product';
import AdminDashboard from './components/Admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const isAuthenticated = true; // Replace with your actual authentication logic

  return (
    <>
      <Navbar />
      <div className='pt-16'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route 
            path="/admin/*" 
            element={
              <ProtectedRoute 
                element={<AdminDashboard />} 
                isAuthenticated={isAuthenticated} 
              />
            } 
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
