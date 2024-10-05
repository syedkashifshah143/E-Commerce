import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import RegisterForm from './components/Login/RegisterForm'
import LoginForm from './components/Login/LoginForm'
import Home from './components/Home/Home'
import About from './components/Home/About'
import Contact from './components/Home/Contact'
import Product from './components/Home/Product'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        </Routes>
    </>
  )
}

export default App