import React from 'react';
import OpportunityPortal from './OpportuinityPortal';
import ImgBlog from '../../../public/Images/aluBlog.jpg'

const mainOpportunity = {
    ImageSrc: ImgBlog,
  LinkText: 'Study at ALU? This is all ypu need to know...',
  LinkPara: 'ALU is a pan-African university based in East Africa, in partnership with Mastercard they have...',
  ReadMoreText: 'Read More >>'
};

const subOpportunities = [
  {
    text: 'What it feels like to win',
    para: 'I never knew what winning feels like, all it takes is to start. But how well are...',
    readMore: 'Read More >>'
  },
  {
    text: 'Germany student visa application tips',
    para: "Planning to study in Germany but don't know where to start, all you need to do is...",
    readMore: 'Read More >>'
  },
  {
    text: "Study At UBC? Here's all you need to you",
    para: 'The international scholars program at UBC Canada is looking for students who...',
    readMore: 'Read More >>'
  }
];

function Opportunities() {
  return (
    <div className="bg-white">
     
      <OpportunityPortal
        ImageSrc={mainOpportunity.ImageSrc}
        LinkText={mainOpportunity.LinkText}
        LinkPara={mainOpportunity.LinkPara}
        ReadMoreText={mainOpportunity.ReadMoreText}
        subLinks={subOpportunities}
      />
    </div>
  );
}

export default Opportunities;
