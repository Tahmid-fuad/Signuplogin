import React, { useState } from 'react';
import axios from 'axios';


const AddNotice = ({ notices, setNotices, setError }) => {

    const [isSubmit, setIsSubmit] = useState(false);
    const [serverError, setServerError] = useState('');
    const [notice, setNotice] = useState('');

    const handleNotice = async (e) => {
        e.preventDefault();
        setIsSubmit(true);
        setServerError('');
        try {
            const result = await axios.post('http://localhost:3001/addnotice', { notice });
            try {
                const response = await axios.get('http://localhost:3001/fetchnotices');
                setNotices(response.data);
            } catch (err) {
                setError('Failed to load notices. Please try again later.');
            }
        } catch (err) {
            if (err.response && err.response.status === 500) {
                setServerError("An error occurred. Please try again.");
            } else {
                setServerError(err.message);
            }
        } finally {
            setIsSubmit(false);
        }
    };

    return (
        <div>
            <div className="section-title text-start">
                <h3 className="mb-4">Add Notice</h3>
            </div>
            <form onSubmit={handleNotice}>
                <div className="row g-3">
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea
                                className="form-control"
                                placeholder="Write the notice message"
                                id="message"
                                style={{ height: '100px' }}
                                value={notice}
                                onChange={(e) => setNotice(e.target.value)}
                            />
                            <label htmlFor="message">Notice message</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">
                            {isSubmit ? 'Submitting...' : 'Add Notice'}
                        </button>
                    </div>
                </div>
            </form>
            {serverError && <div className="alert alert-danger mt-3">{serverError}</div>}
        </div>
    );
};
export default AddNotice;
