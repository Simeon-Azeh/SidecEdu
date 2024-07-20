import React, { useEffect, useState } from "react"; 
import 'aos/dist/aos.css';
import AOS from 'aos';

const data = [
  { key: '1', question: 'What is sidec all about?', answer: 'Sidec is a web app that allows students to practice and know how prepared they are for a National Exam.' },
  { key: '2', question: 'Is sidec free?', answer: 'Yes, we are still in our beta stage and testing our first audience. So you can still use Sidec for free at the moment.' },
  { key: '3', question: 'Where can I use sidec?', answer: 'You can get started by creating an account or signing on sidecedu.com' },
  { key: '4', question: 'Is Sidec only for High School Student?', answer: 'Currently, yes. The Sidec first beta release is only available for high school students but subsequent changes will be made and will be available for university students later on.' },
  { key: '5', question: 'What is the purpose of sidec?', answer: 'Our website provides high-quality educational resources and courses to help individuals enhance their skills, gain knowledge, and achieve their learning goals.' },
  { key: '6', question: 'Is registeration or sign up required to access sidec?', answer: 'While some content might be accessible without registration, signing up allows you to track your progress, enrol in courses, and access premium content.' },
  { key: '7', question: 'How do I create an account?', answer: 'Click the “Sign Up” or “Register” button and follow the simple steps to create your account. You’ll need to provide some basic information.' },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
    });
  }, []);

  return (
    <div className="">
        <div className=' w-[100%] md:w-4/5 mx-auto py-8 h-[100%] font-poppins px-8 md:px-0'>
        <h1 className='text-2xl mb-4 text-[#404660] font-semibold ' data-aos='fade-down'>Frequently Asked Questions</h1>
        {data.map((item, index) => (
        <div key={item.key} className="border-b border-gray-200" data-aos='fade-up'>
          <button
            className="w-full text-left px-4 py-3 bg-transparent text-[#404660] font-medium hover:text-[#9835ff] focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <span>{item.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-3 text-gray-400 text-[14px]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
        </div>
    </div>
  );
};

export default FAQ;
