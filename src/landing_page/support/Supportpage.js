import React from 'react';
import { Link } from 'react-router-dom';

function SupportPage() {
    return (
        <div className="container mt-5">
            <h1>Support Center</h1>
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Create Ticket</h5>
                            <p className="card-text">Need help? Create a support ticket.</p>
                            <Link to="/support/create-ticket" className="btn btn-primary">
                                Create Ticket
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">FAQs</h5>
                            <p className="card-text">Find answers to common questions.</p>
                            <Link to="/support/faq" className="btn btn-primary">
                                View FAQs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportPage;