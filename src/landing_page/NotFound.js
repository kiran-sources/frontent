import React from 'react';


function Notfound() {
    return (
        <div className='container p-5 mt-5 text-center'>
            <h1 className='mt-5'>404 Notfound</h1>
            <p>
                Join Tradyaar today and take the first step towards your financial future.
                Opening an account is quick and easy, with no hidden fees.
            </p>
            <button className='btn btn-primary' type="button" style={{ textDecoration: "none" }}>
                Go Home
            </button>
        </div>
    );
}

export default Notfound;