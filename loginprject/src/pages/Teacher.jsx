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
  const [batch, setBatch] = useState('');
  const [course, setCourse] = useState('');
  const [exam, setExam] = useState('');
  const [studentId, setStudentId] = useState('');
  const [marks, setMarks] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear success message before submission
    setSuccessMessage('');

    // Data to be sent to the backend
    const data = {
      batch,
      course,
      exam,
      studentId,
      marks,
    };

    // Send data to the backend
    axios.post('http://localhost:3001/submitMarks', data)
      .then(response => {
        // Display success message or feedback
        setSuccessMessage('Marks submitted successfully');
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error submitting marks:', error);
      });
  };

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
  }

  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['teacher']} />
      <div style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="container">
          <div className="row py-sm-5 ">
            <div className="col-3">
              <img src={`../assets/teacher/${teacherEmail}.jpg`} alt="" className="img-fluid" />
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
                <form onSubmit={handleSubmit}>
                  <h5 className='text-center'>Input Number</h5>
                  <div className='mb-2'>
                    <select
                      className='form-control'
                      value={batch}
                      onChange={(e) => setBatch(e.target.value)}
                    >
                      <option value="">Select Batch</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                    </select>
                    {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
                  </div>
                  {batch === '19' && (
                    <div className='mb-2'>
                      <select
                        className='form-control'
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                      >
                        <option value="">Select Course</option>
                        <option value="401">ETE 401</option>
                        <option value="403">ETE 403</option>
                        <option value="405">ETE 405</option>
                        <option value="407">ETE 407</option>
                      </select>
                      {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
                    </div>
                  )}
                  {batch === '20' && (
                    <div className='mb-2'>
                      <select
                        className='form-control'
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
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
                  )}
                  {batch === '22' && (
                    <div className='mb-2'>
                      <select
                        className='form-control'
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                      >
                        <option value="">Select Course</option>
                        <option value="101">ETE 101</option>
                        <option value="e183">EEE 183</option>
                        <option value="c181">CSE 181</option>
                        <option value="m185">Math 185</option>
                        <option value="p181">Phy 181</option>
                      </select>
                      {/* {formErrors.batch && <p className="text-danger">{formErrors.batch}</p>} */}
                    </div>
                  )}
                  <div className='mb-2'>
                    <select
                      className='form-control'
                      value={exam}
                      onChange={(e) => setExam(e.target.value)}
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
                    <input
                      type="number"
                      placeholder='Enter Student ID'
                      className='form-control'
                      value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                    />
                    {/* {formErrors.id && <p className="text-danger">{formErrors.id}</p>} */}
                  </div>
                  <div className='mb-2'>
                    <input
                      type="number"
                      placeholder='Marks'
                      className='form-control'
                      value={marks}
                      onChange={(e) => setMarks(e.target.value)}
                    />
                    {/* {formErrors.id && <p className="text-danger">{formErrors.id}</p>} */}
                  </div>
                  {successMessage && <p className="text-success">{successMessage}</p>}
                  <div className='d-grid'>
                    <button type='submit' className='btn btn-primary mt-2'>Save</button>
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
            {/* Content for the right column */}
          </div>
        </div>
      </div>
      <div className="row">
        {/* insert the marks table here */}
      </div>
      <Footer />
    </div>
  );
}

export default Teacher;
