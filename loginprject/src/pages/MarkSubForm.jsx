import React, { useState } from 'react';
import axios from 'axios';

const MarkSubForm = ({ teacherEmail, batch, setBatch, term, setTerm, course, setCourse, exam, setExam, studentId, setStudentId, marks, setMarks, setMarksData, successMessage, setSuccessMessage }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear success message before submission
        setSuccessMessage('');

        // Data to be sent to the backend
        const data = {
            batch,
            term,
            course,
            exam,
            studentId,
            marks,
            teacherEmail,
        };

        // Send data to the backend
        axios.post('http://localhost:3001/submitMarks', data)
            .then(response => {
                setSuccessMessage('Marks submitted successfully');
                axios.get('http://localhost:3001/getMarksByCourse')
                    .then(response => {
                        setMarksData(response.data);
                    });
            })
            .catch(error => {
                console.error('Error submitting marks:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h5 className='text-center'>Input Marks</h5>
            <div className='mb-2'>
                <select
                    className='form-control'
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                >
                    <option value="">Select Batch</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                </select>
                {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
            </div>
            <div className='mb-2'>
                <select
                    className='form-control'
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                >
                    <option value="">Select Term</option>
                    <option value="11">Level-1 Term-1</option>
                    <option value="12">Level-1 Term-2</option>
                    <option value="21">Level-2 Term-1</option>
                    <option value="22">Level-2 Term-2</option>
                    <option value="31">Level-3 Term-1</option>
                    <option value="32">Level-3 Term-2</option>
                    <option value="41">Level-4 Term-1</option>
                    <option value="42">Level-4 Term-2</option>
                </select>
                {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
            </div>
            {term === '41' && (
                <div className='mb-2'>
                    <select
                        className='form-control'
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <option value="">Select Course</option>
                        <option value="401">ETE 401</option>
                        <option value="403">ETE 403</option>
                        <option value="405">ETE 405</option>
                        <option value="407">ETE 407</option>
                    </select>
                    {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
                </div>
            )}
            {term === '31' && (
                <div className='mb-2'>
                    <select
                        className='form-control'
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <option value="">Select Course</option>
                        <option value="301">ETE 301</option>
                        <option value="303">ETE 303</option>
                        <option value="305">ETE 305</option>
                        <option value="307">ETE 307</option>
                        <option value="309">ETE 309</option>
                    </select>
                    {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
                </div>
            )}
            {term === '21' && (
                <div className='mb-2'>
                    <select
                        className='form-control'
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <option value="">Select Course</option>
                        <option value="201">ETE 201</option>
                        <option value="203">ETE 203</option>
                        <option value="c281">CSE 281</option>
                        <option value="m281">Math 281</option>
                        <option value="h281">Hum 281</option>
                    </select>
                    {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
                </div>
            )}
            {term === '12' && (
                <div className='mb-2'>
                    <select
                        className='form-control'
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    >
                        <option value="">Select Course</option>
                        <option value="101">ETE 101</option>
                        <option value="e183">EEE 183</option>
                        <option value="c181">CSE 181</option>
                        <option value="m185">Math 185</option>
                        <option value="p181">Phy 181</option>
                    </select>
                    {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
                </div>
            )}
            <div className='mb-2'>
                <select
                    className='form-control'
                    value={exam}
                    onChange={(e) => setExam(e.target.value)}
                >
                    <option value="">Exam</option>
                    <option value="ct1">CT-1</option>
                    <option value="ct2">CT-2</option>
                    <option value="ct3">CT-3</option>
                    <option value="ct4">CT-4</option>
                    <option value="ct5">CT-5</option>
                    <option value="term">Term Final</option>
                </select>
                {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
            </div>
            <div className='mb-2'>
                <input
                    type="number"
                    placeholder='Enter Student ID'
                    className='form-control'
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                />
                {/* {formErrors.id && <p className="text-danger">{formErrors.id}</p>} */}
            </div>
            <div className='mb-2'>
                <input
                    type="number"
                    placeholder='Marks'
                    className='form-control'
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                />
                {/* {formErrors.id && <p className="text-danger">{formErrors.id}</p>} */}
            </div>
            {successMessage && <p className="text-success">{successMessage}</p>}
            <div className='d-grid'>
                <button type='submit' className='btn btn-primary mt-2'>Save</button>
            </div>
        </form>
    );
};

export default MarkSubForm;
