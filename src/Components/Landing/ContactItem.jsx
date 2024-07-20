import React, { useEffect, useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactItem() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="bg-white p-10 font-poppins w-full md:w-4/5 mx-auto" data-aos="zoom-in"> {/* Added AOS attribute here */}
      <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Info Section */}
        <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2 text-[#9835ff]">
              Call us
              </h2>
              <p className="text-gray-600 mb-2">
              Call our team, Mon - Fri from 8am to 5pm
              </p>
              <p className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
                <MdOutlinePhoneInTalk /> +250 725 354 096
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#9835ff]">
              Chat with us
              </h2>
              <p className="text-gray-600 mb-2">
              Speak to our friendly team via live chat.
              </p>
              <a
                href="" className="text-gray-800 font-semibold mb-4 mt-4 flex items-center gap-2 hover:text-[#9835ff] duration-300"
              >
                <RiChat1Line /> Get in touch
              </a>
              <a
                href="" className="text-gray-800 font-semibold mb-4 mt-4 flex items-center gap-2 hover:text-[#9835ff] duration-300"
              >
                <FiSend /> Book a call
              </a>
              <a
                href="" className="text-gray-800 font-semibold mb-2 flex items-center gap-2 hover:text-[#9835ff] duration-300"
              >
                <FaXTwitter /> Message us on X (formerlly Twitter)
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[#9835ff] mt-4">
               Visit us
              </h2>
              <p className="text-gray-600 mb-2">
               Chat with us at our Kigali HQ
              </p>
              <a
                href="" className="text-gray-800 font-semibold mb-2 flex items-center gap-2"
              >
                <IoLocationOutline /> Bumbogo, Kigali Rwanda
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="Firstname" className="block text-gray-700 mb-2">
                 First Name
                </label>
                <input
                  type="text"
                  id="Firstname" className="w-full p-2 border bg-transparent text-[#9835ff] rounded focus:outline-none focus:ring-1 focus:ring-[#9835ff]"
               
                />
              </div>
              <div>
                <label htmlFor="Lastname" className="block text-gray-700 mb-2">
                Last Name
                </label>
                <input
                  type="text"
                  id="Lastname" className="w-full p-2 border bg-transparent text-[#9835ff] rounded focus:outline-none focus:ring-1 focus:ring-[#9835ff]"
                 
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="Email" className="block text-gray-700 mb-2">
              Email
              </label>
              <input
                type="email"
                id="Email" className="w-full p-2 border bg-transparent text-[#9835ff] rounded focus:outline-none focus:ring-1 focus:ring-[#9835ff]"
            
              />
            </div>
            <div className="mb-4">
              <label htmlFor="Phone" className="block text-gray-700 mb-2">
           Phone
              </label>
              <div className="flex">
                <select className="w-[100px] p-2 border border-r-0 rounded-l focus:outline-none bg-transparent text-[#9835ff]">
                  <option value="+1">+1 US</option>
                  <option value="+44">+44 NED</option>
                  <option value="+237">+237 CMR</option>
                  <option value="+91">+91 IND</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="tel"
                  id="Phone" className="w-full p-2 border border-l-0 rounded-r focus:outline-none bg-transparent text-[#9835ff]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="Message" className="block text-gray-700 mb-2">
              Message
              </label>
              <textarea
                id="Message"
                rows="2" className="w-full p-2 border rounded focus:outline-none bg-transparent text-[#9835ff]"
              
              ></textarea>
            </div>
            <button
              type="submit" className="w-full bg-[#9835ff] text-white py-2 px-4 rounded hover:bg-[#336e67] focus:outline-none focus:ring-2 focus:ring-[#9835ff]"
            >
            Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
