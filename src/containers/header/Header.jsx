import React from 'react';
import people from '../../assets/people.png';
import { Brand, CTA } from '../../components';
import Blog from '../blog/Blog';
import Features from '../features/Features';
import Possibility from '../possibility/Possibility';
import WhatGPT3 from '../whatGPT3/WhatGPT3';

// import ai from '../../assets/ai.png';
// import ai from '../../assets/images/event/sparksImage.jpg';
import './header.css';

const Header = () => (
  
  <>
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">One Stop Event Planner</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p>Every event should be Perfect</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3__header-image">{/* <img src={ai} /> */}</div>
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    {/* <Blog /> */}
  </>
);

export default Header;
