import React from 'react';
function Education() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src="/media/education.svg" alt="Education" className='img-fluid mb-3'/>
                </div>
                <div className='col-6'>
                    <h1 className='mt-5'>Learn and Grow with Tradyaar</h1>
                    <p>
                        Tradyaar offers a wealth of educational resources to help you understand the world of investing,
                        from beginner guides to advanced trading strategies.
                    </p>
                    <a href="" className='link' style={{textDecoration:"none"}}> 
                        Explore Education
                    </a>
                </div>
            </div>
        </div>

     );
}

export default Education;