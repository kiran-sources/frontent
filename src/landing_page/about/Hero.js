import React from 'react';

function Hero() {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 fw-bold">About Tradyaar</h1>
                        <p className="lead">
                            India's most trusted trading platform, empowering investors 
                            with cutting-edge technology and seamless trading experience.
                        </p>
                        <div className="mt-4">
                            <button className="btn btn-primary me-3">Get Started</button>
                            <button className="btn btn-outline-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img 
                            src="/media/about-hero.png" 
                            alt="Trading Platform Interface" 
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;