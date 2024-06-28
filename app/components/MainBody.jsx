import React from 'react';
import Hero from './sections/Hero';
import Testimonial from './sections/sub-section/Testimonial';
import AreaOfFocus from './sections/AreaOfFocus';
import AboutUs from './sections/AboutUs';
import Innovation from './sections/Innovation';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import CoFound from './sections/CoFound';
import Join from './sections/Join';
import Sinc from './sections/Sinc';
import Equity from './sections/Equity';
import Blog from './sections/Blog';
import Feature from './sections/Feature';

const mainBody = () => {
  return (
    <div className="w-full gap-8">
      <Hero />
      <Testimonial />
      <AboutUs />
      <AreaOfFocus />
      <Innovation />
      <Services />
      <Portfolio />
      <CoFound />
      <Join />
      <Sinc />
      <Equity />
      <Blog />
      <Feature />
    </div>
  );
};

export default mainBody;
