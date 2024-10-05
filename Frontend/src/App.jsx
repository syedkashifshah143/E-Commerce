import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import RegisterForm from './components/Login/RegisterForm'
import LoginForm from './components/Login/LoginForm'
import Home from './components/Home/Home'
import About from './components/Home/About'
import Contact from './components/Home/Contact'
import AllProducts from './components/Home/AllProducts'
import Footer from './components/Home/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='pt-16'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproduct" element={<AllProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App