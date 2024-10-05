import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import Product from './Product'
import SpecialOffer from './SpecialOffer'
import FeaturesSection from './FeaturesSection'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Cards/>
      <Product/>
      <SpecialOffer/>
      <FeaturesSection/>
      <Testimonials/>
    </div>
  )
}

export default Home
