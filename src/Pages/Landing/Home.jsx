import React from 'react'
import Navbar from '../../Components/Landing/Navbar'
import Hero from '../../Components/Landing/Hero'
import SubHero from '../../Components/Landing/SubHero'
import SectionOne from '../../Components/Landing/SectionOne'
import SectionTwo from '../../Components/Landing/SectionTwo'
import SectionThree from '../../Components/Landing/SectionThree'
import TestimonialCarousel from '../../Components/Landing/TestimonialCard'
import SectionFour from '../../Components/Landing/SectionFour'
import FAQ from '../../Components/Landing/FAQ'
import Opportunities from '../../Components/Landing/Opportuinities'
import OurParners from '../../Components/Landing/OurParners'
import NewsletterSection from '../../Components/Landing/NewsletterSection'
import Footer from '../../Components/Landing/Footer'


function Home() {
  return (
    <div>
      <div className=''>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <SubHero />
      </div>
      <div>
        <SectionOne />
      </div>
      <div>
        <SectionTwo />
      </div>
      <div>
        <SectionThree />
      </div>
      <div>
        <TestimonialCarousel />
      </div>
      <div>
        <SectionFour />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <Opportunities />
      </div>
      <div>
        <OurParners />
      </div>
      <div>
        <NewsletterSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
