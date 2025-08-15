import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/Signup/Signup';
import AboutPage from './landing_page/about/Aboutpage';
import PricingPage from './landing_page/pricing/Pricingpage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/Supportpage';
import NotFound from './landing_page/NotFound';


import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar/>
    <Routes>
     
      <Route path='/' element={<Homepage />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/support' element={<SupportPage/>} />
      <Route path='/NotFound' element={<NotFound />} />

      {/* Add more routes as needed */}
    </Routes>
    <Footer/>

  </BrowserRouter>
);