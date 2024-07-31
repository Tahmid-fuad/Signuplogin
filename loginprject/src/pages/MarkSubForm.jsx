import React, { useState } from 'react';
import axios from 'axios';
import courseCredit from './courseCredit';
import courseType from './courseType';

const MarkSubForm = ({ teacherEmail, batch, setBatch, term, setTerm, course, setCourse, exam, setExam, studentId, setStudentId, marks, setMarks, setMarksData, successMessage, setSuccessMessage }) => {
    const [formErrors, setFormErrors] = useState({});
    const courseCrdt = courseCredit[course];
    const courseTyp = courseType[course];
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(batch, term, course, exam, studentId, marks);
        setFormErrors(errors);
        // Clear success message before submission
        setSuccessMessage('');


        if (Object.keys(errors).length === 0) {
            // Data to be sent to the backend
            const data = {
                batch,
                term,
                course,
                courseCrdt,
                courseTyp,
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
        }
    };

    const validate = (batch, term, course, exam, studentId, marks) => {
        const errors = {};
        if (!batch) {
            errors.batch = "Batch is required";
        }
        if (!term) {
            errors.term = "Term is required";
        }
        if (!course) {
            errors.course = "Course code is required";
        }
        if (!exam) {
            errors.exam = "Exam type is required";
        }
        if (!studentId) {
            errors.studentId = "Student Id is required";
        } else if (studentId.length != 7) {
            errors.studentId = "Student ID  must be at least 7 characters long";
        }
        if (!marks) {
            errors.marks = "Marks is required";
        }
        return errors;
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
                {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>}
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
                {formErrors.term && <p className="text-danger">{formErrors.term}</p>}
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
                    {formErrors.course && <p className="text-danger">{formErrors.course}</p>}
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
                        <option value="304">ETE 304</option>
                        <option value="305">ETE 305</option>
                        <option value="306">ETE 306</option>
                        <option value="307">ETE 307</option>
                        <option value="308">ETE 308</option>
                        <option value="309">ETE 309</option>
                        <option value="310">ETE 310</option>
                        <option value="c380">CSE 380</option>
                    </select>
                    {formErrors.course && <p className="text-danger">{formErrors.course}</p>}
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
                    {formErrors.course && <p className="text-danger">{formErrors.course}</p>}
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
                    {formErrors.course && <p className="text-danger">{formErrors.course}</p>}
                </div>
            )}
            {courseTyp === 'theory' && (
                <div className='mb-2'>
                    <select
                        className='form-control'
                        value={exam}
                        onChange={(e) => setExam(e.target.value)}
                    >
                        <option value="">Exam</option>
                        <option value="CT-1">CT-1</option>
                        <option value="CT-2">CT-2</option>
                        <option value="CT-3">CT-3</option>
                        <option value="CT-4">CT-4</option>
                        <option value="CT-5">CT-5</option>
                        <option value="Term Final">Term Final</option>
                    </select>
                    {formErrors.exam && <p className="text-danger">{formErrors.exam}</p>}
                </div>
            )}
            {courseTyp === 'lab' && (
                <div className='mb-2'>
                    <select
                        className='form-control'
                        value={exam}
                        onChange={(e) => setExam(e.target.value)}
                    >
                        <option value="">Lab no.</option>
                        <option value="Lab-1">Lab-1</option>
                        <option value="Lab-2">Lab-2</option>
                        <option value="Lab-3">Lab-3</option>
                        <option value="Lab-4">Lab-4</option>
                        <option value="Lab-5">Lab-5</option>
                        <option value="Lab-6">Lab-6</option>
                        <option value="Lab-7">Lab-7</option>
                        <option value="Lab-8">Lab-8</option>
                        <option value="Lab-9">Lab-9</option>
                        <option value="Lab-10">Lab-10</option>
                        <option value="Quiz">Quiz</option>
                        <option value="Viva">Viva</option>
                    </select>
                    {formErrors.exam && <p className="text-danger">{formErrors.exam}</p>}
                </div>
            )}
            <div className='mb-2'>
                <input
                    type="number"
                    placeholder='Enter Student ID'
                    className='form-control'
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                />
                {formErrors.studentId && <p className="text-danger">{formErrors.studentId}</p>}
            </div>
            <div className='mb-2'>
                <input
                    type="number"
                    placeholder='Marks'
                    className='form-control'
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
                />
                {formErrors.marks && <p className="text-danger">{formErrors.marks}</p>}
            </div>
            {successMessage && <p className="text-success">{successMessage}</p>}
            <div className='d-grid'>
                <button type='submit' className='btn btn-primary mt-2'>Save</button>
            </div>
        </form>
    );
};

export default MarkSubForm;
