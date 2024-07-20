import React from 'react';
import NewsletterBg from '../../../public/Images/NewsletterBg.png'; // Ensure you have a background image in this path

function NewsletterSection() {
  return (
  <div className='bg-white w-[100%] md:w-4/5 mx-auto px-8 md:px-0'>
      <div 
      className='w-full font-poppins bg-cover md:bg-center bg-no-repeat' 
      style={{ backgroundImage: `url(${NewsletterBg})` }}
    >
      <div className='relative w-full md:w-3/5 mx-auto text-center text-white font-poppins py-8 px-4 md:px-0'>
        <h2 className='text-xl font-semibold text-[#404660] mb-4'>Ready to get started?</h2>
        <p className='mb-6 text-gray-500'>Join our waitlist to be the first to know when we launch.</p>
        <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
          <input 
            type='email' 
            placeholder='Enter your email' 
            className='w-full md:w-2/3 px-4 py-2 rounded focus:outline-none border shadow-gray-600 text-[#404660]'
          />
          <button className='bg-[#9835ff] text-white py-2 px-6 rounded hover:translate-y-[-5px] duration-300'>Join Waitlist</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default NewsletterSection;
