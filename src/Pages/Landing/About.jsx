import React from 'react'
import Navbar from '../../Components/Landing/Navbar'
import HeroAbout from '../../Components/Landing/HeroAbout'
import WhyChooseUs from '../../Components/Landing/WhyChooseUS'
import Footer from '../../Components/Landing/Footer'

function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HeroAbout />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default About
