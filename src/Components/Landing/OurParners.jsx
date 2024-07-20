import React from 'react'
import UregaLogo from '../../../public/Images/urega.png';
import ALULogo from '../../../public/Images/alu.png';
import PlaceholderImg from '../../../public/Images/PlaceholderImg.png';
import { MdCall } from "react-icons/md";

function OurPartners() {
  return (
    <div>
      <div className='w-[100%] md:w-4/5 mx-auto font-poppins py-8 px-8 md:px-0'>
        <h1 className='text-2xl font-semibold mb-4 text-[#404660]'>Our Partners</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center'>
          <div className='w-full bg-white p-4 rounded'>
            <img src={UregaLogo} alt="Urega Logo" className='w-full object-cover' />
          </div>
          <div className='w-full bg-white p-4 rounded'>
            <img src={ALULogo} alt="ALU Logo" />
          </div>
          <div className='w-full bg-white p-4 rounded'>
            <img src={PlaceholderImg} alt="Placeholder" />
          </div>
          <div className='w-full bg-white p-4 rounded'>
            <img src={PlaceholderImg} alt="Placeholder" />
          </div>
          <div className='w-full bg-white p-4 rounded'>
            <img src={PlaceholderImg} alt="Placeholder" />
          </div>
          <div className='w-full bg-white p-4 rounded'>
            <img src={PlaceholderImg} alt="Placeholder" />
          </div>
          <div className='w-full bg-white p-4 rounded'>
            <img src={PlaceholderImg} alt="Placeholder" />
          </div>
          <div className='w-full bg-white p-4 rounded'>
            <img src={PlaceholderImg} alt="Placeholder" />
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p className='mb-4 text-lg text-[#404660]'>We are open to partnership and sponsorship opportunities. Join us in our mission to make a difference!</p>
          <button className='bg-[#9835ff] text-white py-2 px-4 rounded hover:translate-y-[-5px] duration-300 flex items-center gap-2 m-auto'><MdCall /> Schedule a call</button>
        </div>
      </div>
    </div>
  )
}

export default OurPartners;
