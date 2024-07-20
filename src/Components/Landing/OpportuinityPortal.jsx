import React, { useEffect, useState } from "react"; 
import 'aos/dist/aos.css';
import AOS from 'aos';
import { MdBolt } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

function OpportunityPortal({ ImageSrc, LinkText, LinkPara, ReadMoreText, subLinks }) {

    
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of animations
    });
  }, []);

  return (
    <div className="w-[100%] md:w-4/5 m-auto py-8 px-8 md:px-0 font-poppins">
        <div className='mb-8'>
        <h1 className="text-2xl font-semibold  flex items-center gap-2 text-[#404660] border-b pb-4 mb-2">Opportunities Portal<span className='text-[#9835ff]'><MdBolt /> </span></h1>
        <a href="#" className="text-[#9835ff] font-medium flex items-center gap-2 hover:text-[#404660] duration-300"><IoIosArrowForward size={20}/> Vist Blog</a>
        </div>
      <div className="flex flex-col md:flex-row gap-4" data-aos='fade-up'>
        {/* Main Card */}
        <div className="flex-1 md:flex-none md:w-2/4 bg-[#9835ff] shadow-md rounded-lg overflow-hidden cursor-pointer hover:translate-y-[-5px] duration-300">
          <img src={ImageSrc} alt="" className="w-full h-[300px] object-cover hover:scale-110 cursor-pointer duration-300" />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2 text-white">{LinkText}</h1>
            <p className="text-slate-100 mb-4">{LinkPara}</p>
            <a href="#" className="text-slate-200 text-[12px] font-normal ">{ReadMoreText}</a>
          </div>
        </div>

        {/* Sub Cards */}
        <div className="flex-1 flex flex-col gap-4 md:w-1/3" data-aos='fade-down'>
          {subLinks.map((subLink, index) => (
            <div key={index} className="bg-white border  rounded-lg overflow-hidden p-4 cursor-pointer hover:translate-y-[-5px] duration-300">
              <h2 className="text-[16px] text-[#404660] font-semibold mb-2 hover:text-[#9835ff] duration-300">{subLink.text}</h2>
              <p className="text-gray-700 text-[12px] mb-4">{subLink.para}</p>
              <a href="#"className="text-gray-700 text-[12px] font-normal hover:text-[#9835ff] duration-300">{subLink.readMore}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OpportunityPortal;
