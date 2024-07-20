import React, { useState, useEffect } from 'react';
import Logo from '../../../public/Images/SidecLogo.png';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-[#f9feff]'}`}>
      <div className=" px-4 py-4 flex items-center justify-between w-[100%] md:w-5/6 m-auto font-pop font-medium text-[14px]">
    
            <div className=" w-40">

        <img src={Logo} alt="Logo" className=" w-full " />
            </div>
        
        <div className="hidden md:flex space-x-8 text-[#404660] font-poppins">
          <a href="#home" className=" border-b-2 border-white border-solid hover:border-[#9835ff]">Home</a>
          <a href="#about" className="border-b-2 border-white border-solid hover:border-[#9835ff]">About</a>
          <a href="#team" className="border-b-2 border-white border-solid hover:border-[#9835ff]">Team</a>
          <a href="#store" className="border-b-2 border-white border-solid hover:border-[#9835ff]">Store</a>
          <a href="#contact" className="border-b-2 border-white border-solid hover:border-[#9835ff]">Contact</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-[#404660] font-pop font-medium text-[14px] border p-2 px-6 rounded hover:translate-y-[-3px] transition-all duration-300">Login</button>
          <button className="bg-[#9835ff] text-white px-4 py-2 rounded hover:translate-y-[-3px] transition-all duration-300">Get Started</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsDrawerOpen(true)} className="text-[#404660]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 font-poppins">
          <button onClick={() => setIsDrawerOpen(false)} className="absolute top-4 right-4 text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <a href="#home" className="text-[#404660] font-pop font-medium text-[14px]">Home</a>
          <a href="#about" className="text-[#404660] font-pop font-medium text-[14px]">About</a>
          <a href="#team" className="text-[#404660] font-pop font-medium text-[14px]">Team</a>
          <a href="#store" className="text-[#404660] font-pop font-medium text-[14px]">Store</a>
          <a href="#contact" className="text-[#404660] font-pop font-medium text-[14px]">Contact</a>
          <button className="text-[#404660] font-pop font-medium text-[14px]">Login</button>
          <button className="bg-[#9835ff] text-white px-4 py-2 rounded font-pop">Get Started</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
