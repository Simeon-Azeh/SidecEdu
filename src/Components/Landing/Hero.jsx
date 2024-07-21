import React, { useState, useEffect } from 'react';
import HeroImg from '../../../public/Images/HeroImg.svg';
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import { Modal, Form, Input, Button } from 'antd';
import AOS from 'aos';

function Hero() {
  const texts = ["Faster", "Better", "Smarter"];
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Trigger the fade-out animation
      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setFade(true); // Trigger the fade-in animation
      }, 500); // Wait for the fade-out animation to complete before changing the text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000, // Duration of animations
    });
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission here
    setIsModalVisible(false);
  };

  return (
    <div className='min-h-screen flex items-center justify-between md:w-4/5 m-auto font-poppins'>
      <div className='flex flex-col md:flex-row items-center p-2 md:p-0'>
        <div className='text-center mt-20 md:mt-0 md:text-left md:w-1/2' data-aos='fade-down'>
          <h1 className='text-4xl font-bold mb-4 text-[#404660]  pop'>
            Learning{' '}
            <span
              className={`text-[#9835ff] inline-block transition-all duration-500 transform ${fade ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              {texts[currentText]}
            </span>{' '}
            for Improved Performance
          </h1>
          <p className='text-lg mb-6 pop text-gray-500'>Sidec is a web app that allows students to practice and know how prepared they are for a National Exam.</p>
          <div className='flex gap-4 items-center justify-center md:justify-start'>
            <button
              onClick={showModal}
              className='bg-[#9835ff] text-white px-6 py-3 rounded-lg font-normal text-lg transition-transform duration-300 hover:translate-y-[-3px] pop flex items-center gap-2  md:m-0'
            >
              Join Waitlist <IoMdArrowForward />
            </button>
            <a href="https://youtu.be/Zq8TpFSMxSM?si=MnnqSTeYjERkPSRQ" target="_blank" rel="noopener noreferrer">    <button className='border border-[#9835ff] text-[#9835ff] px-6 py-3 rounded-lg font-normal text-lg transition-transform duration-300 hover:translate-y-[-3px] pop flex items-center gap-2  md:m-0'>
              <IoPlayCircleOutline size={20} /> Demo
            </button></a>
        
          </div>
        </div>
        <div className='mt-8 md:mt-0 md:ml-8 md:w-1/2' data-aos='fade-right'>
          <img src={HeroImg} alt="Hero Image" className='w-full h-auto' />
        </div>
      </div>
      <Modal title="Join Waitlist" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true, message: 'Please enter your phone number' }]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-[#9835ff] text-white hover:bg-[#9835ff]">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Hero;
