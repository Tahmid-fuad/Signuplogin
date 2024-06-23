import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import Notice from './Notice';
import React, { useEffect, useState } from 'react';
import courseIdReplace from './courseCodeMap';
import termReplace from './termMap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import HeaderComponent from './HeaderComponent';

function Teacher() {
  const [teacherName, setTeacherName] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherDesig, setTeacherDesig] = useState('');
  const [batch, setBatch] = useState('');
  const [term, setTerm] = useState('');
  const [course, setCourse] = useState('');
  const [exam, setExam] = useState('');
  const [studentId, setStudentId] = useState('');
  const [marks, setMarks] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [marksData, setMarksData] = useState({});
  const [batchVisibility, setBatchVisibility] = useState({});
  const [termVisibility, setTermVisibility] = useState({});

  useEffect(() => {
    const teacherEmail = localStorage.getItem('email');

    if (teacherEmail) {
      axios.get(`http://localhost:3001/teacherdata/${teacherEmail}`)
        .then(response => {
          setTeacherName(response.data.name);
          setTeacherEmail(response.data.email);
          setTeacherDesig(response.data.desig);
        })
        .catch(error => {
          console.error('Error fetching teacher details:', error);
        });
    }

    // Fetch student marks data by course
    axios.get('http://localhost:3001/getMarksByCourse')
      .then(response => {
        setMarksData(response.data);
      })
      .catch(error => {
        console.error('Error fetching student marks:', error);
      });
  }, []);

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

  let designation = '';
  switch (teacherDesig) {
    case '1':
      designation = 'Professor';
      break;
    case '2':
      designation = 'Associate Professor';
      break;
    case '3':
      designation = 'Assistant Professor';
      break;
    case '4':
      designation = 'Lecturer';
      break;
    default:
      // designation = 'Unknown Designation';
      break;
  }

  // Function to print batch content
  const printBatchContent = async (batchYear) => {
    const batchElement = document.getElementById(`batch-${batchYear}`);
    const canvas = await html2canvas(batchElement);
    const imgData = canvas.toDataURL('image/png');

    // Render header to canvas
    const headerElement = document.getElementById('pdf-header');
    const headerCanvas = await html2canvas(headerElement);
    const headerImgData = headerCanvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();

    // Add header
    const headerImgProps = pdf.getImageProperties(headerImgData);
    const headerHeight = (headerImgProps.height * pdfWidth) / headerImgProps.width;
    pdf.addImage(headerImgData, 'PNG', 10, 10, pdfWidth - 20, headerHeight);

    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 10, 20 + headerHeight, pdfWidth - 20, pdfHeight);
    pdf.save(`Batch_${batchYear}_Report.pdf`);
  };

  // Function to print term content with a header
  const printTermContent = async (batchYear, termName) => {
    const courseElement = document.getElementById(`term-${batchYear}-${termName}`);
    const canvasContent = await html2canvas(courseElement);
    const imgContentData = canvasContent.toDataURL('image/png');

    // Render header to canvas
    const headerElement = document.getElementById('pdf-header');
    const headerCanvas = await html2canvas(headerElement);
    const headerImgData = headerCanvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();

    // Add header
    const headerImgProps = pdf.getImageProperties(headerImgData);
    const headerHeight = (headerImgProps.height * pdfWidth) / headerImgProps.width;
    pdf.addImage(headerImgData, 'PNG', 10, 10, pdfWidth - 20, headerHeight);

    // Add content
    const imgContentProps = pdf.getImageProperties(imgContentData);
    const contentHeight = (imgContentProps.height * pdfWidth) / imgContentProps.width;
    // pdf.addImage(imgContentData, 'PNG', 10, 10, pdfWidth - 20, contentHeight);
    pdf.addImage(imgContentData, 'PNG', 10, 20 + headerHeight, pdfWidth - 20, contentHeight);

    pdf.save(`Batch_${batchYear}_Term_${termName}_Report.pdf`);
  };

  // Function to print course content with a header
  const printCourseContent = async (batchYear, courseCode) => {
    const courseElement = document.getElementById(`course-${batchYear}-${term}-${courseCode}`);
    const canvasContent = await html2canvas(courseElement);
    const imgContentData = canvasContent.toDataURL('image/png');

    // Render header to canvas
    const headerElement = document.getElementById('pdf-header');
    const headerCanvas = await html2canvas(headerElement);
    const headerImgData = headerCanvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();

    // Add header
    const headerImgProps = pdf.getImageProperties(headerImgData);
    const headerHeight = (headerImgProps.height * pdfWidth) / headerImgProps.width;
    pdf.addImage(headerImgData, 'PNG', 10, 10, pdfWidth - 20, headerHeight);

    // Add content
    const imgContentProps = pdf.getImageProperties(imgContentData);
    const contentHeight = (imgContentProps.height * pdfWidth) / imgContentProps.width;
    // pdf.addImage(imgContentData, 'PNG', 10, 10, pdfWidth - 20, contentHeight);
    pdf.addImage(imgContentData, 'PNG', 10, 20 + headerHeight, pdfWidth - 20, contentHeight);

    pdf.save(`Course_${courseCode}_Batch_${batchYear}_Report.pdf`);
  };

  const toggleBatchVisibility = (batchYear) => {
    setBatchVisibility((prev) => ({
      ...prev,
      [batchYear]: !prev[batchYear],
    }));
  };

  const toggleTermVisibility = (batchYear, termName) => {
    setTermVisibility((prev) => ({
      ...prev,
      [batchYear]: {
        ...prev[batchYear],
        [termName]: !prev[batchYear]?.[termName]
      }
    }));
  };
  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['teacher']} />
      <div style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="container">
          <div className="row py-sm-5">
            <div className="col-3">
              <img src={`../assets/teacher/${teacherEmail}.jpg`} alt="" className="img-fluid" />
            </div>
            <div className="col-5 d-flex align-items-center">
              <table className='table' style={{ borderColor: "transparent" }}>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Name:</td>
                    <td>{teacherName}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Email:</td>
                    <td>{teacherEmail}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Designation:</td>
                    <td>{designation}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-4">
              <div className='w-100 p-3 rounded bg-white'>
                <form onSubmit={handleSubmit}>
                  <h5 className='text-center'>Input Number</h5>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-4 float-start">
            <Notice />
          </div>
          <div className="col-8">
            {/* Content for the right column */}
          </div>
        </div>
      </div>
      <div className="row">
        {/* Display Marks Data */}
        <div className="container mt-5">
          <h3 className="text-decoration-underline">Exam Results</h3>
          {Object.keys(marksData).length > 0 ? (
            Object.entries(marksData).map(([batchYear, terms]) => (
              <div key={batchYear} id={`batch-${batchYear}`} className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="text-decoration-underline m-0 p-0"
                    onClick={() => toggleBatchVisibility(batchYear)}>
                    Batch: {batchYear}
                  </h5>
                  <button
                    className="btn btn-primary mx-4"
                    onClick={() => printBatchContent(batchYear)}
                  >
                    Download
                  </button>
                </div>
                {batchVisibility[batchYear] && (
                  <>
                    {Object.entries(terms).map(([termName, courses]) => (
                      <div key={termName} id={`term-${batchYear}-${termName}`} className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5
                            className="text-decoration-underline"
                            onClick={() => toggleTermVisibility(batchYear, termName)}>
                            {termReplace[termName]}
                          </h5>
                          <button
                            className="btn btn-primary mx-4"
                            onClick={() => printTermContent(batchYear, termName)}
                          >
                            Download
                          </button>
                        </div>
                        {termVisibility[batchYear] && termVisibility[batchYear][termName] && (
                          <>
                            {Object.entries(courses).map(([courseCode, students]) => (
                              <div key={courseCode} id={`course-${batchYear}-${termName}-${courseCode}`} className="mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                  <h5 className="m-0">{courseIdReplace[courseCode] || courseCode}</h5>
                                  <button
                                    className="btn btn-primary mx-4"
                                    onClick={() => printCourseContent(batchYear, courseCode)}
                                  >
                                    Download
                                  </button>
                                </div>
                                <table className="table table-striped table-bordered">
                                  <thead>
                                    <tr>
                                      <th>Student ID</th>
                                      <th>CT-1</th>
                                      <th>CT-2</th>
                                      <th>CT-3</th>
                                      <th>CT-4</th>
                                      <th>CT-5</th>
                                      <th>Term Final</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {students.map((student, index) => (
                                      <tr key={index}>
                                        <td>{student.studentId}</td>
                                        <td>{student['ct1'] || ''}</td>
                                        <td>{student['ct2'] || ''}</td>
                                        <td>{student['ct3'] || ''}</td>
                                        <td>{student['ct4'] || ''}</td>
                                        <td>{student['ct5'] || ''}</td>
                                        <td>{student['term'] || ''}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))
          ) : (
            <p>No marks data available.</p>
          )}
        </div>
      </div>
      <Footer />
      <div id="pdf-header" style={{ position: 'absolute', top: '-99999999px' }}>
        <HeaderComponent />
      </div>
    </div>
  );
}

export default Teacher;
