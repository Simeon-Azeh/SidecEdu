import React from 'react';
import Section from './Section';
import ImageOne from '../../../public/Images/ImageOne.png'; // Adjust the path as necessary

function SectionOne() {
  return (
    <Section
      imageSrc={ImageOne}
      heading="National Exams"
      paragraph="Practice your national exams, GCE, WAEC, JAMB, HND and more with our online library of questions"
    />
  );
}

export default SectionOne;
