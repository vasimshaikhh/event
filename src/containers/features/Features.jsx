import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Photography',
    text: 'A Team Of 3 talented Photographers are ready to snap the best moments of your ceremony',
  },
  {
    title: 'Cinematography or Videography Service',
    text: 'Creative full HD 1080p Video, a different scape of your ceremony.',
  },
  {
    title: 'Full Venue Decoration Service',
    text: 'A Blend of out-of-the-box ideas to decore your precious date',
  },
  {
    title: 'Home Decoration',
    text: 'just call us and get total event solution under one roof..',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Harmony Event Management Firm & Wedding Planners is a group of creative minds who would like to make weddings, birthdays & any kind of events courteous & a better place for our clients to celebrate important moments of their lives...</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
