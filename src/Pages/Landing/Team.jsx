import React from 'react'
import Navbar from '../../Components/Landing/Navbar'
import TeamCard from '../../Components/Landing/TeamCard'
import Footer from '../../Components/Landing/Footer'

function Team() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <TeamCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Team
