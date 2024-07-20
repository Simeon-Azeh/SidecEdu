import React, { useEffect, useState } from "react"; // Added useEffect import
import { CiVideoOn } from "react-icons/ci";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function ContactHero() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);

  return (
    <div>
      <div className='w-[100%] md:w-4/5 m-auto py-28 flex flex-col items-center' data-aos="fade-down"> {/* AOS animation */}
        <h2 className='text-[#404660] text-center text-3xl font-semibold'>
        We've got an entire <span>team</span> ready to help you, every step of your Educational journey
        </h2>
        <p className='text-gray-500 mt-4'>Get help 24/7 with our award-winning support network</p>
        <div className='flex justify-center gap-4' data-aos="zoom-in">
          <button className='border border-[#404660] text-[#404660] mt-8 gap-2 px-4 py-2 rounded-3xl flex items-center hover:translate-y-[-5px] duration-300'>
            <CiVideoOn className='text-xl font-semibold' />
            Book a call
          </button>
          <button className='bg-[#9835ff] text-white mt-8 px-4 py-2 rounded-3xl flex items-center hover:translate-y-[-5px] duration-300'>
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
