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
            <div className="col-4">
              <div className='w-100 p-3 rounded bg-white'>
                <form>
                  <h5 className='text-center'>Input Number</h5>
                  <div className='mb-2'>
                    {/* <label htmlFor="batch">Batch</label> */}
                    <select
                      className='form-control'
                    // value={batch}
                    // onChange={(e) => setBatch(e.target.value)}
                    >
                      <option value="">Select Batch</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                    </select>
                    {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
                  </div>
                  <div className='mb-2'>
                    {/* <label htmlFor="batch">Batch</label> */}
                    <select
                      className='form-control'
                    // value={batch}
                    // onChange={(e) => setBatch(e.target.value)}
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
                  <div className='mb-2'>
                    {/* <label htmlFor="batch">Batch</label> */}
                    <select
                      className='form-control'
                    // value={batch}
                    // onChange={(e) => setBatch(e.target.value)}
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
                    {/* <label htmlFor="id">Student ID</label> */}
                    <input
                      type="number"
                      placeholder='Enter Student ID'
                      className='form-control'
                      // value={id}
                      // onChange={(e) => setId(e.target.value)}
                    />
                    {/* {formErrors.id && <p className="text-danger">{formErrors.id}</p>} */}
                  </div>
                  <div className='mb-2'>
                    {/* <label htmlFor="id">Marks</label> */}
                    <input
                      type="number"
                      placeholder='Marks'
                      className='form-control'
                      // value={id}
                      // onChange={(e) => setId(e.target.value)}
                    />
                    {/* {formErrors.id && <p className="text-danger">{formErrors.id}</p>} */}
                  </div>

                  {/* {errorMessage && <p className="text-danger">{errorMessage}</p>} */}
                  <div className='d-grid'>
                    <button type='submit' className='btn btn-primary mt-2'>Log in</button>
                  </div>
                  <p className='text-right mt-2'>
                    {/* <Link to="/forgot-password">Forgot Password?</Link> */}
                  </p>
                  <div className="text-center mt-2">
                    {/* <Link to="/signup" className='ms-2'>Sign up</Link> */}
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

          </div>
        </div>
        <div className="row">

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Teacher;
