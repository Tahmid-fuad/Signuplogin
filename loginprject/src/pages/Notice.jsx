import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddNotice from './AddNotice';

function Notice() {
    const [notices, setNotices] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axios.get('http://localhost:3001/fetchnotices');
                setNotices(response.data);
            } catch (err) {
                setError('Failed to load notices. Please try again later.');
            }
        };

        fetchNotices();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-4 float-start">
                    <div className="ms-xxl-1 me-xxl-1 bg-white p-3 mb-xxl-2" style={{ height: "350px" }}>
                        <div className="heading-sect">
                            <h3 className="m-0 p-0 fs-6 fw-semibold">Notice Board</h3>
                        </div>
                        <marquee direction="up" scrollamount="2" scrolldelay="2" className="p-3">
                            <ul className="latest-news-ul">
                                {error ? (
                                    <li>{error}</li>
                                ) : (
                                    notices.map((notice, index) => (
                                        <li key={index}>{notice.notice}</li>
                                    ))
                                )}
                            </ul>
                        </marquee>
                    </div>
                </div>
                <div className="col-4">
                    <AddNotice
                        notices={notices}
                        setNotices={setNotices}
                    />
                </div>
            </div>

        </div>
    );
}

export default Notice;
