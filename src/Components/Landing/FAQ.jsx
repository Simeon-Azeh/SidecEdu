import React from 'react';
import { Collapse } from 'antd';

const data = [
  { key: '1', question: 'What is sidec all about?', answer: 'Sidec is a web app that allows students to practice and know how prepared they are for a National Exam.' },
  { key: '2', question: 'Is sidec free?', answer: 'Yes, we are still in our beta stage and testing our first audience. So you can still use Sidec for free at the moment.' },
  { key: '3', question: 'Where can I use sidec?', answer: 'You can get started by creating an account or signing on sidecedu.com' },
  { key: '4', question: 'Is Sidec only for High School Student?', answer: 'Currently, yes. The Sidec first beta release is only available for high school students but subsequent changes will be made and will be available for university students later on.' },
  { key: '5', question: 'What is the purpose of sidec?', answer: 'Our website provides high-quality educational resources and courses to help individuals enhance their skills, gain knowledge, and achieve their learning goals.' },
  { key: '6', question: 'Is registeration or sign up required to access sidec?', answer: 'While some content might be accessible without registration, signing up allows you to track your progress, enrol in courses, and access premium content.' },
  { key: '7', question: 'How do I create an account?', answer: 'Click the “Sign Up” or “Register” button and follow the simple steps to create your account. You’ll need to provide some basic information.' },
];

const items = data.map(faq => ({
  key: faq.key,
  label: faq.question,
  children: <p>{faq.answer}</p>,
}));

function FAQ() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className='h-screen w-[100%] md:w-4/5 mx-auto p-8 md:px-0 py-20 pb-10 font-poppins' data-aos="fade-up">
        <div className=''>
        <h1 className='text-2xl font-semibold text-[#404660] mb-4'>Frequently Asked Questions</h1>
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
        </div>
    </div>
  );
}

export default FAQ;
