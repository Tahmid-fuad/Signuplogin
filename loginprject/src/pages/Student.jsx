import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import Notice from './Notice';
import Routine20 from './Routine20';

function Student() {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   axios.post('http://localhost:3001/logout', {}, { withCredentials: true })
  //     .then(() => {
  //       localStorage.removeItem('role');
  //       navigate('/login');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

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
            <div className="col-5 ">
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
            <Notice />
          </div>
          <div className="col-8">
            <Routine20/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Student
