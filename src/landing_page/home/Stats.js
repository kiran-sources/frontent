import React from 'react';
function Stats() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                   <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>
                        Join millions of investors
                    </h2>
                    <p className='text-muted'>
                        Our platform is trusted by millions of investors worldwide   
                        to manage their investments effectively and securely.
                    </p>
                     <h2 className='fs-4'>
                         Invest with confidence
                    </h2>
                    <p className='text-muted'>
                    Tradyaar provides a secure and reliable platform for all your investment needs, 
                    ensuring your financial future is in safe hands.
                    </p>
                     <h2 className='fs-4'>
        
                         NO Spam or unwanted calls

                     </h2>
                    <p className='text-muted'>
                        We respect your privacy and ensure that you receive only relevant 
                        information without any spam or unwanted calls.
                    </p>
                    <h2 className='fs-4'>
                         Do Better with Tradyaar
                     </h2>
                    <p className='text-muted'>
                        Experience a seamless investment journey with Tradyaar, 
                        where your financial goals are our priority.
                    </p>
                  
                </div>
                <div className='col-6 p-5'>
                    <img src='media\ecosystem.png' alt="Ecosystem" className='img-fluid' style={{width:"80%"}}/>
                    <div>
                        <div className='text -center mt-5'>
                          <a href='' className='mr-5' style={{textDecoration:"none"}}>explore now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                          <a href=''   className='mr-5'           style={{textDecoration:"none"}}>try kit <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Stats;