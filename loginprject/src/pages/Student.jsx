import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Student() {
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.post('http://localhost:3001/logout', {}, { withCredentials: true })
      .then(() => {
        localStorage.removeItem('role');
        navigate('/login');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['student']} handleLogout={handleLogout} />
      <button onClick={handleLogout}>Logout</button>
      <div style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="container">
          <div className="row py-sm-5 ">
            <div className="col-3">
              <img src="../assets/njr.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-3">
                  <h5>
                    Name:<br />
                    Student ID:<br />
                    Session:
                  </h5>
                </div>
                <div className="col-9">
                  Nusrat Jahan<br />
                  2008056<br />
                  2020-2021
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
          <div className="col-8" style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
            abcd
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Student
