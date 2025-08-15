import React from 'react';

function Hero() {
  return (
    <div className='container p-5 mb-5 text-center'>
      <div className='row  '>
        <img src="/media/homeHero.png" alt="Beautiful sunset over the ocean" className='mb-5'/>
        <h1 className='mt-5'>Invest in everything</h1>
        <p>
          Tradyaar is a platform that allows you to invest in stocks, mutual funds, and more with ease.
        </p>
        <button className='  btn btn-primary fs-5' style={{ justifyContent: "center", alignItems: "center" }}> Signup </button>
        <div className='col'>
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
}

export default Hero;