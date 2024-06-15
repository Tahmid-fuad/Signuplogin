import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import Notice from './Notice';
import { useEffect, useState } from 'react';

function Teacher() {
  const [teacherName, setTeacherName] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherDesig, setTeacherDesig] = useState('');

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
  }, []);

  let designation = '';
  switch (teacherDesig) {
    case '1':
      designation = 'Proffesor';
      break;
    case '2':
      designation = 'Associate Proffesor';
      break;
    case '3':
      designation = 'Assistant Proffesor';
      break;
    case '4':
      designation = 'Lecturer';
      break;
    default:
    // designation = 'Unknown Batch';
  }

  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['teacher']} />
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="container">
          <div className="row py-sm-5 ">
            <div className="col-3">
              <img src={`../assets/teacher/${teacherEmail}.jpg`} alt="" className="img-fluid" />
            </div>
            <div className="col-5  d-flex align-items-center">
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
            <div className="col-2"></div>
            <div className="col-2">
              {/* <img src="../assets/saifulsir.jpg" alt="" className="img-fluid" /> */}
              {/* <h5>Name of the advisor:</h5>Dr. Saiful Islam */}
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
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Teacher;
