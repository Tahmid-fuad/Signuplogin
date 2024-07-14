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
import MarkSubForm from './MarkSubForm';

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
  const [photoUrl, setPhotoUrl] = useState('');
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [info, setInfo] = useState('');
  const [year, setYear] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [serverError, setServerError] = useState('');
  const [facultyId, setFacultyId] = useState('');
  const [publication, setPublication] = useState([]);
  const [routine, setRoutine] = useState([]);
  const [routineError, setRoutineError] = useState('');

  useEffect(() => {
    const teacherEmail = localStorage.getItem('email');

    if (teacherEmail) {
      axios.get(`http://localhost:3001/teacherdata/${teacherEmail}`)
        .then(response => {
          setTeacherName(response.data.name);
          setTeacherEmail(response.data.email);
          setTeacherDesig(response.data.desig);
          setPhotoUrl(`http://localhost:3001/user-photo/${teacherEmail}`);
        })
        .catch(error => {
          console.error('Error fetching teacher details:', error);
        });
    }

    fetchMarks();

  }, []);

  const fetchMarks = async () => {
    // Fetch student marks data by course
    try {
      const response = await axios.get('http://localhost:3001/getMarksByCourse')
      setMarksData(response.data);
    } catch (error) {
      console.error('Error fetching student marks:', error);
    }
  }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage('');
    setServerError('');

    const formData = new FormData();
    formData.append('email', teacherEmail);
    formData.append('title', title);
    formData.append('authors', authors);
    formData.append('info', info);
    formData.append('year', year);

    axios.post('http://localhost:3001/facultydetails', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(result => {
        setSubmitMessage('Updated Successfully');
        fetchFaculty();
        resetForm();
      })
      .catch(err => {
        // if (err.response && err.response.status === 500) {
        setServerError(err.response);
        // } else {
        //   setServerError("An error occurred. Please try again.");
        // }
      });

  };

  const resetForm = () => {
    setTitle('');
    setAuthors('');
    setInfo('');
    setYear('');
  };

  useEffect(() => {
    fetchFaculty();
  }, [teacherEmail]);

  const fetchFaculty = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/faculty/${teacherEmail}`);
      setPublication(response.data.publications);
      setFacultyId(response.data._id);
    } catch (error) {
      console.error('Error fetching faculty data', error);
    }
  };

  const deleteFacultyrecord = async (facultyId, publicationId) => {
    try {
      await axios.delete(`http://localhost:3001/facultyrecord/${facultyId}/publication/${publicationId}`);
      fetchFaculty();
    } catch (err) {
      setError('Failed to delete publication. Please try again later.');
    }
  };

  const fetchRoutine = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/fetchroutine/master`);
      setRoutine(response.data);
    } catch (err) {
      setRoutineError('Failed to load routine. Please try again later.');
      console.log(routineError);
    }
  };

  useEffect(() => {
    fetchRoutine();
  }, []);

  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['teacher']} />
      <div style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="container">
          <div className="row py-sm-5">
            <div className="col-3">
              {photoUrl ? (
                <img src={photoUrl} className="img-fluid" />
              ) : (
                <div>Loading photo...</div>
              )}
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
                <MarkSubForm
                  teacherEmail={teacherEmail}
                  batch={batch}
                  setBatch={setBatch}
                  term={term}
                  setTerm={setTerm}
                  course={course}
                  setCourse={setCourse}
                  exam={exam}
                  setExam={setExam}
                  studentId={studentId}
                  setStudentId={setStudentId}
                  marks={marks}
                  setMarks={setMarks}
                  setMarksData={setMarksData}
                  successMessage={successMessage}
                  setSuccessMessage={setSuccessMessage}
                />
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
            <h3><a className='text-black text-decoration-underline' href={`http://localhost:3001/public/routine/file/${routine.file1}`}>Master Routine</a></h3>
            <img
              className="img-fluid"
              src={`http://localhost:3001/public/routine/image/${routine.file2}`}
              // style={{ objectFit: 'cover', height: '500px' }}
            />
          </div>
        </div>
      </div>
      <div className="row m-2">
        {/* Display Marks Data */}
        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="text-decoration-underline">Exam Results</h3>
            <button
              className="btn btn-primary mx-4"
              onClick={() => fetchMarks()}
            >
              Refresh
            </button>
          </div>
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
      <div className="row">
        <h2 className='text-center text-decoration-underline bg-primary py-sm-2 text-white'>My Research</h2>
        <div className="col-4">
          <div className='w-100 p-4 rounded bg-white'>
            <form onSubmit={handleSubmit}>
              <h5 className='text-center'>Update My Research</h5>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Title"
                  id="title"
                  style={{ height: '20px' }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Authors"
                  id="authors"
                  style={{ height: '20px' }}
                  value={authors}
                  onChange={(e) => setAuthors(e.target.value)}
                />
                <label htmlFor="authors">Authors</label>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Informations"
                  id="info"
                  style={{ height: '20px' }}
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                />
                <label htmlFor="info">Information</label>
              </div>
              <div className='mb-2'>
                {/* <label htmlFor="number">Year</label> */}
                <input
                  type="number"
                  placeholder='Year'
                  className='form-control'
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              {submitMessage && <p className="text-success">{submitMessage}</p>}
              {serverError && <p className="text-danger">{serverError}</p>}
              <div className='d-grid'>
                <button className='btn btn-primary mt-2'>Save</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-8">
          <div className='m-2'>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-primary m-1"
                onClick={fetchFaculty}
              >
                Refresh
              </button>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th style={{ width: "5%" }}>SN</th>
                  <th style={{ width: "25%" }}>Title</th>
                  <th style={{ width: "25%" }}>Authors</th>
                  <th style={{ width: "30%" }}>Info</th>
                  <th style={{ width: "10%" }}>Year</th>
                  <th style={{ width: "5%" }}>Delete</th>
                </tr>
              </thead>
              <tbody>
                {publication.map((publication, idx) => (
                  <tr key={idx}>
                    <td>{publication.sn}</td>
                    <td>{publication.title}</td>
                    <td>{publication.authors}</td>
                    <td>{publication.info}</td>
                    <td>{publication.year}</td>
                    <td>
                      <button
                        className='btn btn-secondary rounded-3 btn-sm ms-auto'
                        onClick={() => deleteFacultyrecord(facultyId, publication._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
