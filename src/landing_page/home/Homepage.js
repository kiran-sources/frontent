import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './pricing';
import Education from './Education';
import Openaccount from '../OpenAccount';
import Navbar from '../Navbar'; // Fix import path
import Footer from '../Footer'; // Fix import path


function Homepage() {
    return ( 
  <>
   
      <Hero/>
      <Awards/>
      <Stats/> 
      <Pricing/>
      <Education/>
      <Openaccount/>
    
 </>
    );
}

export default Homepage;