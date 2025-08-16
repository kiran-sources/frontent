import React from 'react';
import Hero from './Hero';  // Create a pricing-specific Hero
import Openaccount from '../OpenAccount';
import Brokerage from './Brokerage';

function PricingPage() {
    return (
        <div className="pricing-page">
            <Hero />
            <Brokerage />
            <Openaccount />
        </div>
    );
}

export default PricingPage;