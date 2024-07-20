import React from 'react'
import Navbar from '../../Components/Landing/Navbar'
import ContactHero from '../../Components/Landing/ContactHero'
import ContactItem from '../../Components/Landing/ContactItem'

function Contact() {
  return (
    <div>
     <div>
        <Navbar />
     </div>
     <div>
        <ContactHero />
     </div>
     <div>
        <ContactItem />
     </div>
    </div>
  )
}

export default Contact
