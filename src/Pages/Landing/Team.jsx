import React, { useEffect } from 'react'
import Navbar from '../../Components/Landing/Navbar'
import TeamCard from '../../Components/Landing/TeamCard'
import Footer from '../../Components/Landing/Footer'

function Team() {
    useEffect(() => {
        document.title = "Team"
    })
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
