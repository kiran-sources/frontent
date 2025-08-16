import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/Signup/Signup';
import Aboutpage from './landing_page/about/Aboutpage';
import Pricingpage from './landing_page/pricing/Pricingpage';
import ProductPage from './landing_page/products/ProductPage';
import Supportpage from './landing_page/support/Supportpage';
import NotFound from './landing_page/NotFound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/pricing" element={<Pricingpage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/support" element={<Supportpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);