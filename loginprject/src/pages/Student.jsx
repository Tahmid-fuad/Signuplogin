import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import Notice from './Notice';
import getAdvisorEmail from './advisorLogic';
import courseIdReplace from './courseCodeMap.jsx';

const batchToRoutineComponent = {
  '20': React.lazy(() => import('./Routine20.jsx')),
  '21': React.lazy(() => import('./Routine21.jsx')),
};

function Student() {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentBatch, setStudentBatch] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [studentMarks, setStudentMarks] = useState(null);

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
        })
        .catch(error => {
          console.error('Error fetching student details:', error);
        });

      // Fetch student marks
      axios.get(`http://localhost:3001/studentMarks/${studentId}`)
        .then(response => {
          setStudentMarks(response.data);
        })
        .catch(error => {
          console.error('Error fetching student marks:', error);
        });
    }
  }, []);

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

 console.log(studentMarks);

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

  const RoutineComponent = batchToRoutineComponent[studentBatch] || null;

  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['student']} />
      <div style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="container">
          <div className="row py-sm-5 ">
            <div className="col-3">
              <img src={`../assets/student/${studentId}.jpg`} alt="" className="img-fluid" />
            </div>
            <div className="col-5  d-flex align-items-center">
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
          <div className="col-8">
            {RoutineComponent && (
              <Suspense fallback={<div></div>}>
                <RoutineComponent />
              </Suspense>
            )}
          </div>
        </div>
        <div className="row">
          {/* Display student marks */}
          <div className="col-12">
            <h3>Exam Results</h3>
            {studentMarks ? (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Course</th>
                    {/* {studentMarks.courses[0].exams.map(exam => (
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
                  {studentMarks.courses.map(course => (
                    <tr key={course.courseCode}>
                      <td>{courseIdReplace[course.courseCode]}</td>
                      {course.exams.map(exam => (
                        <td key={exam.examType}>{exam.marks[0].marks}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No marks available</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Student;
