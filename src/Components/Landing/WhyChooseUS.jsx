import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import WhyChooseUsImage from '../../../public/Images/WhyUs.png';
import 'aos/dist/aos.css';
import AOS from 'aos';

function WhyChooseUs() {

    useEffect(() => {
        AOS.init({
          duration: 2000, // Duration of animations
        });
      }, []);
    
  const [showMore, setShowMore] = useState(false);

  const reasons = [
    { header: 'Quality', text: 'Sidec ensures a premium learning experience with high-caliber educational materials effortlessly accessible through technology.' },
    { header: 'Ease of Use', text: 'Our platform prioritizes user-friendliness, providing an accessible and efficient learning experience for seamless knowledge transfer.' },
    { header: 'Availability', text: 'From exam preparation to interviews and scholarships, Sidec offers a tailored suite of products to meet diverse educational needs, aspiring to be a leading provider of academic resources.' },
    { header: 'Trust', text: 'Sidec has earned the trust of countless users, offering assurance that our materials are curated to provide the best in education. Choose Sidec with confidence, knowing you have access to top-tier resources for your academic journey.' },
    { header: 'Experience', text: 'Sidec provides a seamless learning experience, leveraging cutting-edge technology to deliver high-quality content.' },
    { header: 'Innovation', text: 'Our team of educators and researchers are constantly exploring new ways to improve the learning experience.' },
    { header: 'Affordability', text: 'We are striving for affordability with our flexible pricing, discounts, or free access to certain features.' }
  ];

  const visibleReasons = showMore ? reasons : reasons.slice(0, 4);

  return (
    <div className='bg-white'>
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-5/6 m-auto py-8 px-4 md:px-0 font-poppins">
        <div className="w-full md:w-1/2 mb-4 md:mb-0" data-aos="fade-right">
          <img src={WhyChooseUsImage} alt="Why Choose Us" className="w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-1/2 px-4" data-aos='fade-up'>
          <h2 className="text-2xl font-semibold mb-4 text-[#404660]">Why Choose Us</h2>
          <ul className="space-y-2 text-[#404660] list-none text-justify">
            {visibleReasons.map((reason, index) => (
              <li key={index} className="">
                <div>
                <h1 className="text-[#9835ff] flex items-center gap-2 font-semibold"><FaCheckCircle />{reason.header}:</h1>
                <span className="text-[#404660]"> {reason.text}</span>
                </div>
              </li>
            ))}
          </ul>
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="mt-4 bg-[#9835ff] text-white px-4 py-2 rounded hover:bg-[#7829cc] transition-all duration-300"
            >
              View More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
