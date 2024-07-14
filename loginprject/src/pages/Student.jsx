import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import Notice from './Notice';
import getAdvisorEmail from './advisorLogic';
import courseIdReplace from './courseCodeMap.jsx';
import termReplace from './termMap';
import HeaderComponent from './HeaderComponent.jsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Student() {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentBatch, setStudentBatch] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [studentMarks, setStudentMarks] = useState(null);
  const [termVisibility, setTermVisibility] = useState({});
  const [photoUrl, setPhotoUrl] = useState('');
  const [routine, setRoutine] = useState([]);
  const [routineError, setRoutineError] = useState('');

  const advisorEmail = getAdvisorEmail(studentBatch, studentId);

  useEffect(() => {
    const studentId = localStorage.getItem('id');

    if (studentId) {
      axios.get(`http://localhost:3001/studentdata/${studentId}`)
        .then(response => {
          setStudentName(response.data.name);
          setStudentEmail(response.data.email);
          setStudentId(response.data.id);
          setStudentBatch(response.data.batch);

          // Initialize term visibility for each term
          if (response.data.marks && response.data.marks.terms) {
            const initialTermVisibility = {};
            response.data.marks.terms.forEach(term => {
              initialTermVisibility[term.term] = true;
            });
            setTermVisibility(initialTermVisibility);
          }
        })
        .catch(error => {
          console.error('Error fetching student details:', error);
        });

      fetchMarks();
    }
  }, [studentId]);

  const fetchMarks = async () => {
    // Fetch student marks data by course
    try {
      const response = await axios.get(`http://localhost:3001/studentMarks/${studentId}`)
      setStudentMarks(response.data);
    } catch (error) {
      console.error('Error fetching student marks:', error);
    }
  }

  useEffect(() => {
    if (advisorEmail) {
      axios.get(`http://localhost:3001/teacherdata/${advisorEmail}`)
        .then(response => {
          setTeacherName(response.data.name);
        })
        .catch(error => {
          console.error('Error fetching teacher details:', error);
        });
    }
  }, [advisorEmail]);

  useEffect(() => {
    if (studentEmail) {
      setPhotoUrl(`http://localhost:3001/user-photo/${studentEmail}`);
    }
  }, [studentEmail]);

  let academicYear = '';
  switch (studentBatch) {
    case '20':
      academicYear = '2020-21';
      break;
    case '21':
      academicYear = '2021-22';
      break;
    case '22':
      academicYear = '2022-23';
      break;
    default:
    // academicYear = 'Unknown Batch';
  }

  // Function to print result with a header
  const printResultContent = async (studentId) => {
    const resultElement = document.getElementById("result");
    const canvasContent = await html2canvas(resultElement);
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
    pdf.addImage(imgContentData, 'PNG', 10, 20 + headerHeight, pdfWidth - 20, contentHeight);

    pdf.save(`Result_report_of_ID_${studentId}.pdf`);
  };

  // Function to print term content with a header
  const printTermContent = async (studentId, termName) => {
    const courseElement = document.getElementById(`term-${termName}`);
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

    pdf.save(`${studentId}_Term_${termName}_Report.pdf`);
  };

  const toggleTermVisibility = (termName) => {
    setTermVisibility((prev) => ({
      ...prev,
      [termName]: !prev[termName],
    }));
  };

  const fetchRoutine = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/fetchroutine/${studentBatch}`);
      setRoutine(response.data);
    } catch (err) {
      setRoutineError('Failed to load routine. Please try again later.');
      console.log(routineError);
    }
  };

  useEffect(() => {
    fetchRoutine();
  }, [studentBatch]);

  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['student']} />
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
                    <td>{studentName}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Student ID:</td>
                    <td>{studentId}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Email:</td>
                    <td>{studentEmail}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Session:</td>
                    <td>{academicYear}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-2"></div>
            <div className="col-2">
              <img src={`../assets/teacher/${advisorEmail}.jpg`} alt="" className="img-fluid" />
              <h5>Name of the advisor:</h5>{teacherName}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="col-4 float-start">
            <Notice />
          </div>
          <div className="col-8 mt-3">
            <h4><a className='text-black text-decoration-underline' href={`http://localhost:3001/public/routine/file/${routine.file1}`}>Routine for {routine.dest} Batch</a></h4>
            <img
              className="img-fluid"
              src={`http://localhost:3001/public/routine/image/${routine.file2}`}
            />
          </div>
        </div>
        <div className="row m-2">
          {/* Display student marks */}
          <div className="col-12" id="result">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Exam Results of ID: {`${studentId}`}</h3>
              <div>
                <button
                  className="btn btn-primary mx-4"
                  onClick={() => fetchMarks()}
                >
                  Refresh
                </button>
                <button
                  className="btn btn-primary mx-4"
                  onClick={() => printResultContent(studentId)}
                >
                  Download
                </button>
              </div>
            </div>
            {studentMarks ? (
              studentMarks.terms.map(term => (
                <div key={term.term} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4
                      className="text-decoration-underline m-0 p-0"
                      onClick={() => toggleTermVisibility(term.term)}>
                      {termReplace[term.term]}
                    </h4>
                    <button
                      className="btn btn-primary mx-4"
                      onClick={() => printTermContent(studentId, term.term)}
                    >
                      Download
                    </button>
                  </div>
                  {termVisibility[term.term] && (
                    <div id={`term-${term.term}`}>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Course</th>
                            {/* {term.courses[0].exams.map(exam => (
                            <th key={exam.examType}>{exam.examType}</th>
                          ))} */}
                            <th>CT-1</th>
                            <th>CT-2</th>
                            <th>CT-3</th>
                            <th>CT-4</th>
                            <th>CT-5</th>
                            <th>Term Final</th>
                          </tr>
                        </thead>
                        <tbody>
                          {term.courses.map(course => (
                            <tr key={course.courseCode}>
                              <td>{courseIdReplace[course.courseCode] || course.courseCode}</td>
                              {course.exams.map(exam => (
                                <td key={exam.examType}>{exam.marks[0].marks}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No marks available</p>
            )}
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

export default Student;
