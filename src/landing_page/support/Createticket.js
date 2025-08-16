import React from 'react';

function CreateTicket() {
    return (
        <div className="container mt-5">
            <h2>Create Support Ticket</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit Ticket</button>
            </form>
        </div>
    );
}

export default CreateTicket;