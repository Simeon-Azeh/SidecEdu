import React, { useState } from 'react';
import { Drawer } from 'antd';
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Importing images
import CEOImage from '../../../public/Images/Simeon.png';
import CTOImage from '../../../public/Images/Junior.jpg';
import CFOImage from '../../../public/Images/olannni.png';
import COOImage from '../../../public/Images/rose.png';
import CMOImage from '../../../public/Images/sebbb.png';
import HRImage from '../../../public/Images/christian.png';

const teamMembers = [
  { name: 'Simeon Azeh K.', role: 'Co-Founder & Frontend dev', description: 'Simeon is passionate Co-founder and frontend developer at ALU Rwanda. With over two years of experience in software development for students, Simeon has been incharge of building our entire frontend framework using modern tech like Reactjs. He has a deep understanding of user experience and design. His diverse skill set includes technical expertise and proficiency in design and branding, attention to details, and management.', image: CEOImage, linkedin: '#', facebook: '#', instagram: '#' },
  { name: 'Junior Foryoung', role: 'Co-Founder & CTO', description: 'Junior is an innovative Co-founder and full stack developer at University of Bambili, Cameroon. With over four years of experience in software development for students, He has a deep understanding of their needs. Junior envisions revolutionizing the Edtech sector by creating solutions that empower students and educators through technology. At Sidec, we are eager to collaborate with like-minded individuals who share a passion for innovation in education. Education is not a one-size-fits-all concept, and We are committed to creating solutions that cater to diverse learning styles and needs.', image: CTOImage, linkedin: '#', facebook: '#', instagram: '#' },
  { name: 'Olaniyi Olufemi', role: 'Project Manager', description: 'Olaniyi Olufemi is a Creative Designer from Nigeria with over three years of experience working in Marketing, Branding, E.V, IT and Ed-Tech Industries.', image: CFOImage, linkedin: '#', facebook: '#', instagram: '#' },
  { name: 'Mbokojong Rosette', role: 'Brand Manager', description: 'Rosette is a Cameroonian with two years of working as a Social media Marketing Specialist with a global tech company.', image: COOImage, linkedin: '#', facebook: '#', instagram: '#' },
  { name: 'Elomba Sebastien', role: 'Director, Field ops', description: 'Opps! No data to show yet!', image: CMOImage, linkedin: '#', facebook: '#', instagram: '#' },
  { name: 'Alain Michael', role: 'Backend Developer', description: 'Opps! No data to show yet!', image: HRImage, linkedin: '#', facebook: '#', instagram: '#' },
];

const Team = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const showDrawer = (member) => {
    setSelectedMember(member);
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
    setSelectedMember(null);
  };

  return (
    <div className='py-24 px-8 md:px-0 font-poppins w-full md:w-4/5 mx-auto'>
      <h2 className="text-2xl font-semibold text-[#404660] text-center">Meet our team</h2>
      <p className='text-[#404660] text-center mb-8'>Learn more about the people that make things happen.</p>
      <div className="flex flex-wrap justify-center gap-4">
        {teamMembers.slice(0, 3).map((member, index) => (
          <div key={index} className="cursor-pointer bg-white border rounded-md p-2 flex flex-col items-center w-[320px] mb-4 hover:translate-y-[-5px] duration-300">
            <img src={member.image} alt={member.name} className="object-cover rounded-md mb-4 hover:scale-105 duration-300" />
            <h3 className="text-xl font-medium mb-2 text-[#404660] ">{member.name}</h3>
            <p className="text-sm text-gray-400 text-[18px] mb-2">{member.role}</p>
            <p className="text-[16px] font-medium text-[#9835ff] cursor-pointer mb-2 flex items-center gap-1" onClick={() => showDrawer(member)}>More Info<IoMdArrowRoundForward /></p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {teamMembers.slice(3).map((member, index) => (
          <div key={index} className="cursor-pointer bg-white border rounded-md p-2 flex flex-col items-center w-[300px] mb-4 hover:translate-y-[-5px] duration-300">
            <img src={member.image} alt={member.name} className="object-cover rounded-md mb-4 hover:scale-105 duration-300" />
            <h3 className="text-xl font-medium mb-2 text-[#404660]">{member.name}</h3>
            <p className="text-sm text-gray-400 text-[18px] mb-2">{member.role}</p>
            <p className="text-[16px] font-medium text-[#9835ff] cursor-pointer mb-2 flex items-center gap-1" onClick={() => showDrawer(member)}>More Info<IoMdArrowRoundForward /></p>
          </div>
        ))}
      </div>
      <Drawer title={selectedMember?.name} placement="right" onClose={onClose} visible={drawerVisible}>
        {selectedMember && (
          <>
            <img src={selectedMember.image} alt={selectedMember.name} className="object-cover rounded-md mb-4 hover:scale-105 duration-300" />
            <p><strong>Role:</strong> {selectedMember.role}</p>
            <p>{selectedMember.description}</p>
            <div className="flex space-x-4 text-[#404660] mt-4">
              <a href={selectedMember.linkedin}><FaLinkedin /></a>
              <a href={selectedMember.facebook}><FaFacebook /></a>
              <a href={selectedMember.instagram}><FaTwitter /></a>
            </div>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default Team;
