import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from './Hero';

function Aboutpage() {
    return (
        <div>
            <Hero />
            <Outlet />
        </div>
    );
}

export default Aboutpage;