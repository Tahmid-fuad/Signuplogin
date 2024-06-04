import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

function Student() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };
  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['student']} handleLogout={handleLogout} />
      <button onClick={handleLogout}>Logout</button>
      <div className="container pb-5">
        <div className="row">
          <div className="col-3">
            <img src="../assets/njr.jpg" alt="" className="img-fluid" />
          </div>
          <div className="col-6">
            <div className="row">
            <div className="col-3">
            Name:<br/> 
            Student ID:<br/>
            Session:
            </div>
            <div className="col-9">
              Nusrat Jahan<br/>
              2008056<br/>
              2020-2021
            </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
              <img src="../assets/saifulsir.jpg" alt="" className="img-fluid" />
              Name of the advisor: Dr. Saiful Islam
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Student
