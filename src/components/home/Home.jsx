import React from 'react';
import { Hero } from './Hero';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Portfolio } from "../pages/Portfolio";
import { Contact } from "../pages/Contact";

export const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}
