import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notice from './Notice';

function Teacher() {
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
      <ProtectedRoute allowedRoles={['teacher']} handleLogout={handleLogout} />
      <h1>Welcome to the Teacher Panel</h1>
      <button onClick={handleLogout}>Logout</button>
      <div style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="container">
          <div className="row py-sm-5 ">
            <div className="col-3">
              <img src="../assets/saifulsir.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-3">
                  <h5>
                    Name:<br />
                    Designation:
                  </h5>
                </div>
                <div className="col-9">
                  D. Saiful Islam<br />
                  Associate proffesor
                </div>
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-2">
              {/* <img src="../assets/saifulsir.jpg" alt="" className="img-fluid" /> */}
              {/* <h5>Name of the advisor:</h5>Dr. Saiful Islam */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 float-start">
          <Notice />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Teacher;
