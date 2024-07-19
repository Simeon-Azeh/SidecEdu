import React, { useEffect, useState } from "react"; 
import { IoMdArrowForward } from "react-icons/io";
import 'aos/dist/aos.css';
import AOS from 'aos';


function SectionReversed({ imageSrc, heading, paragraph, ButtonText }) {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of animations
        });
      }, []);
    
  return (
    <div className=" h-[100%]">
      <div className="flex flex-col-reverse md:flex-row-reverse items-center w-[100%] md:w-4/5 md:m-auto md:gap-10 px-8 md:px-0 pt-10 md:pb-0">
        <div className="w-[100%] md:w-1/2">
          <img src={imageSrc} alt={heading} className="w-full" data-aos="fade-right"/>
        </div>
        <div className="w-[100%] md:w-1/2 font-poppins" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-[#404660] border-b-4 rounded border-[#9835ff] border-solid w-[60%] md:w-[50%]">
            {heading}
          </h1>
          <p className="text-gray-500 text-base md:text-lg">{paragraph}</p>
          <button className='bg-[#9835ff] text-white py-2 px-4 rounded mt-4 flex items-center gap-2 '>{ButtonText}<IoMdArrowForward /></button>
        </div>
      </div>
    </div>
  );
}

export default SectionReversed;
