import React, { useEffect, useState,useRef } from 'react';
import BredcrumnmNgmentSetion from './components/BredcrumnmNgmentSetion';
import AwardSection from './components/AwardSection';
import ServiceSection from './components/ServiceSection';
import TestimonialSection from './components/TestimonialSection';
import AbsoluteSponser from './components/AbsoluteSponser';
import Speaker from './components/Speaker';
import SpecialOffer from './components/SpecialOffer';

const About = () => {
  return (
	  <>
		  <BredcrumnmNgmentSetion />
		  <br/><br/><br/>
		  <AwardSection />
		  <ServiceSection />
		
		  {/* <TestimonialSection /> */}
		  {/* <AbsoluteSponser /> */}
		  {/* <Speaker /> */}
		  {/* <SpecialOffer/>		 */}
    </>
  );
};

export default About;

