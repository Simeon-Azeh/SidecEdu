import React from 'react';
import Section from './Section';
import ImageOne from '../../../public/Images/ImageOne.png'; // Adjust the path as necessary

function SectionThree() {
  return (
    <div>
       <Section
      imageSrc={ImageOne}
      heading="relearning tools"
      paragraph="You can easily find tutors that can help in teaching and tutoring you in any subject you are not performing well"
    />
    </div>
  )
}

export default SectionThree
