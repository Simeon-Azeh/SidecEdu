import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="px-4 py-4 flex items-center justify-between w-[100%] md:w-5/6 m-auto font-pop font-medium text-[14px]">
        <div className="w-40">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-full" />
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 text-[#404660] font-poppins">
          <Link to="/" className="border-b-2 border-white border-solid hover:border-[#9835ff]">Home</Link>
          <Link to="/about" className="border-b-2 border-white border-solid hover:border-[#9835ff]">About</Link>
          <Link to="/team" className="border-b-2 border-white border-solid hover:border-[#9835ff]">Team</Link>
         
          <Link to="/contact" className="border-b-2 border-white border-solid hover:border-[#9835ff]">Contact</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <button className="text-[#404660] font-pop font-medium text-[14px] border p-2 px-6 rounded hover:translate-y-[-3px] transition-all duration-300">Login</button>
          </Link>
          <Link to="/get-started">
            <button className="bg-[#9835ff] text-white px-4 py-2 rounded hover:translate-y-[-3px] transition-all duration-300">Get Started</button>
          </Link>
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
          <Link to="/" className="text-[#404660] font-pop font-medium text-[14px]" onClick={() => setIsDrawerOpen(false)}>Home</Link>
          <Link to="/about" className="text-[#404660] font-pop font-medium text-[14px]" onClick={() => setIsDrawerOpen(false)}>About</Link>
          <Link to="/team" className="text-[#404660] font-pop font-medium text-[14px]" onClick={() => setIsDrawerOpen(false)}>Team</Link>
          <Link to="/contact" className="text-[#404660] font-pop font-medium text-[14px]" onClick={() => setIsDrawerOpen(false)}>Contact</Link>
          <Link to="/login" className="text-[#404660] font-pop font-medium text-[14px]" onClick={() => setIsDrawerOpen(false)}>Login</Link>
          <Link to="/get-started" className="bg-[#9835ff] text-white px-4 py-2 rounded font-pop" onClick={() => setIsDrawerOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
