import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddNotice from './AddNotice';

function Notice() {
    const [notices, setNotices] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axios.get('https://signuplogin-backend.onrender.com/fetchnotices');
                setNotices(response.data);
            } catch (err) {
                setError('Failed to load notices. Please try again later.');
            }
        };

        fetchNotices();
    }, []);

    return (
        <div>
            <div className="ms-xxl-1 me-xxl-1 bg-white p-3 mb-xxl-2">
                <div className="heading-sect">
                    <h3 className="m-0 p-0 fs-6 fw-semibold">Notice Board</h3>
                </div>
                <marquee direction="up" scrollamount="1" scrolldelay="0" className="p-3" style={{ height: "200px" }}>
                    <ul className="latest-news-ul">
                        {error ? (
                            <li>{error}</li>
                        ) : (
                            notices
                                .sort((a, b) => b._id.localeCompare(a._id))
                                .map((notice) => (
                                    <li key={notice._id}>
                                        <a
                                            className={notice.file ? 'text-black text-decoration-underline' : 'text-black'}
                                            href={notice.file ? `https://signuplogin-backend.onrender.com/public/noticefile/${notice.file}` : '#'}>
                                            {notice.notice + " "}
                                        </a>
                                    </li>
                                ))
                        )}
                    </ul>
                </marquee>
            </div>
        </div>
    );
}

export default Notice;
