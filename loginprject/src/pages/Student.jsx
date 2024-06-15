import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import Notice from './Notice';
import Routine20 from './Routine20';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Student() {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentBatch, setStudentBatch] = useState('');

  useEffect(() => {
    const studentId = localStorage.getItem('id');

    if (studentId) {
      axios.get(`http://localhost:3001/studentdata/${studentId}`)
        .then(response => {
          // const batchMap = {
          //   '19': '2019-20',
          //   '20': '2020-21',
          //   '21': '2021-22',
          //   '22': '2022-23',
          //   '23': '2023-24'
          // };
          setStudentName(response.data.name);
          setStudentEmail(response.data.email);
          setStudentId(response.data.id);
          setStudentBatch(response.data.batch);
          // setStudentBatch(batchMap[response.data.batch]);
          // console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching student details:', error);
        });
    }
  }, []);

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
    // Add more cases as needed
    default:
      academicYear = 'Unknown Batch';
  }

  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['student']} />
      {/* <button onClick={handleLogout} className='btn btn-primary py-4 px-lg-5 d-none d-lg-block'>Logout<i className="fa fa-arrow-right ms-3"></i></button> */}
      <div style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="container">
          <div className="row py-sm-5 ">
            <div className="col-3">
              <img src="../assets/njr.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-5  d-flex align-items-center">
              <div className="row">
                <div className="col-6">
                  <h5>
                    Name:<br />
                    Student ID:<br />
                    Email:<br />
                    Batch:
                  </h5>
                </div>
                <div className="col-6">
                  {studentName}<br />
                  {studentId}<br />
                  {studentEmail}<br />
                  {academicYear}
                </div>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-2">
              <img src="../assets/saifulsir.jpg" alt="" className="img-fluid" />
              <h5>Name of the advisor:</h5>Dr. Saiful Islam
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
            <Routine20 />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Student
