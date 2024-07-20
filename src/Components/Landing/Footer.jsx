import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Logo from '../../../public/Images/SidecLogo.png'

function Footer() {
  return (
    <div className='bg-white font-poppins '>
      <div className='w-[100%] md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-8 md:px-0 border-b'>
        <div className='flex flex-col gap-4'>
            <div className='w-[120px] flex m-auto md:m-0'>
                <img src={Logo} alt="" className='w-full' />
            </div>
            <div className='flex gap-8 text-[#404660] items-center  font-medium'>
                <a href="" className='hover:border-b-2 hover:border-[#9835ff] hover:border-solid'>Home</a>
                <a href="" className='hover:border-b-2 hover:border-[#9835ff] hover:border-solid'>About</a>
                <a href="" className='hover:border-b-2 hover:border-[#9835ff] hover:border-solid'>Team</a>
                <a href="" className='hover:border-b-2 hover:border-[#9835ff] hover:border-solid'>Store</a>
                <a href="" className='hover:border-b-2 hover:border-[#9835ff] hover:border-solid'>Contact</a>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='text-[#404660] font-semibold text-center mt-5 md:text-left md:mt-0'>Follow Us</h1>
            <div className='flex gap-8 items-center'>
                <a href="" className='text-[#404660] hover:text-[#9835ff] duration-300'><FaFacebook size={20}/></a>
                <a href="" className='text-[#404660] hover:text-[#9835ff] duration-300'><RiWhatsappFill  size={20}/></a>
                <a href="" className='text-[#404660] hover:text-[#9835ff] duration-300'><RiInstagramFill  size={20} /></a>
                <a href="" className='text-[#404660] hover:text-[#9835ff] duration-300'><TiSocialLinkedinCircular size={30} /></a>
            </div>
        </div>
      </div>
      <div className='w-[100%] md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-8 md:px-0'>
        <div>
          <p className='text-gray-400 mb-4 md:mb-0'>Copyright © 2022. All Rights Reserved</p>
        </div>
        <div className='flex gap-4 items-center font-poppins font-medium text-[#404660] text-[14px]'>
        <a href="">Terms</a>
        <a href="">Privacy</a>
        <a href="">Cookies</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
