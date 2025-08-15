import React from 'react';
function Awards() {
    return (
    <div className='container p-5  mt-5'>
        <div className='row '>
            <div className='col-6 '>
        
                 <img src="/media/largestBroker.svg" alt="Award 1" className='img-fluid mb-3'/>
                  </div>
                  <div className='col-6 '>
                    <h1 className='mt-5'>Largest Broker in India</h1>
                    <p>
                        Tradyaar is the largest broker in India, providing a platform for millions of investors to trade and invest with confidence.</p>
                        <div className='row'>
                        <div className='col-6'><ul>
                            <li>Future and Options Trading</li>
                            <li> Equity Trading</li>
                            <li> Currency Trading</li>

                        </ul></div>
                        <div className='col-6'><ul>
                            <li>Commodity Trading</li>
                            <li>Mutual Funds</li>
                            <li> IPOS</li>
                            
                        </ul>
                        
                      </div>   
               </div>
                <img src= 'media\pressLogos.png' alt="Press Logos" className='img-fluid mt-5' style={{width:"90%"}}/>
            </div>
        </div>
    </div>);
}

export default Awards;