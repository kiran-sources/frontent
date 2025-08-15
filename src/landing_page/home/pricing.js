import React from 'react';
function Pricing() {
    return (
            <div className='container p-5 mt-5'> 
                <div className='row'> 
                    <div className='col-4'>
                        <h1 className='mt-3'>Unbeatable pricing</h1>
                        <p> 
                            Tradyaar offers competitive pricing with no hidden fees,
                             ensuring you get the best value for your investments.
                        </p>
                        <a href =""  className='link' style={{textDecoration:"none"}}> 
                             See pricing
                            </a>
                    </div>
                    <div className='col-2'> </div>
                    <div className='col-6'>
                        <div className='row text-center'>
                             <div className='col  p-3 border'>
                                <h1>
                                    $0
                                </h1>
                                <p>
                                    Brokerage on Equity Delivery
                                </p>
                             </div>
                              <div className='col p-3 border'>
                                <h1>
                                    $20
                                </h1>
                                <p>
                                    Brokerage on Intraday and F&O
                                </p>
                              </div>

                        </div>
                        </div>
                        
                </div>
            </div>
             );
}

export default Pricing;