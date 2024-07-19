import React from 'react'
import Navbar from '../../Components/Landing/Navbar'
import Hero from '../../Components/Landing/Hero'
import SubHero from '../../Components/Landing/SubHero'
import SectionOne from '../../Components/Landing/SectionOne'
import SectionTwo from '../../Components/Landing/SectionTwo'
import SectionThree from '../../Components/Landing/SectionThree'

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
    </div>
  )
}

export default Home
