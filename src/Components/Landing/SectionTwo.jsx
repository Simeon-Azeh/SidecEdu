import React from 'react';
import ImageOne from '../../../public/Images/ImageTwo.png'; // Adjust the path as necessary
import SectionReversed from './SectionReversed';

function SectionTwo() {
  return (
    <div>
      <SectionReversed
      imageSrc={ImageOne}
      heading="Data Predictions"
      paragraph="With analytics, get to know how prepared you are for the exams after taking our mock tests." 
      ButtonText="Learn More"/>
    </div>
  )
}

export default SectionTwo
