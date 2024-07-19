import React from 'react'
import Navbar from '../../Components/Landing/Navbar'
import Hero from '../../Components/Landing/Hero'
import SubHero from '../../Components/Landing/SubHero'
import SectionOne from '../../Components/Landing/SectionOne'

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
    </div>
  )
}

export default Home
