import React from 'react'

function Notice() {
    return (
        <div>
            <div className="ms-xxl-1 me-xxl-1 bg-white p-3 mb-xxl-2" style={{ height: "350px" }}>
                <div className="heading-sect">
                    <h3 className="m-0 p-0 fs-6 fw-semibold">Notice Board</h3>
                </div>
                <ul className="notice-board-list">
                    <li>Undergraduate admission test</li>
                    <li>Masters admission notice</li>
                    <li>PhD Registration Form for Selected Candidates </li>
                    <li>Notice regarding industrial tour of 20-batch</li>
                </ul>
            </div>
        </div>
    )
}

export default Notice
