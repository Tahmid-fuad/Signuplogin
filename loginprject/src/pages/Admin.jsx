import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios';
import { useEffect, useState } from 'react';
import MarkSubForm from './MarkSubForm';
import termReplace from './termMap';
import courseIdReplace from './courseCodeMap';
import Signup from './Signup';
import AddNotice from './AddNotice';
import AddRoutine from './AddRoutine';
import AddOwl from './AddOwl';
import AddPic from './AddPic';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import HeaderComponent from './HeaderComponent';

function Admin() {
  const [teacherEmail, setTeacherEmail] = useState('');
  const [batch, setBatch] = useState('');
  const [term, setTerm] = useState('');
  const [course, setCourse] = useState('');
  const [exam, setExam] = useState('');
  const [studentId, setStudentId] = useState('');
  const [marks, setMarks] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [marksData, setMarksData] = useState({});
  const [batchVisibility, setBatchVisibility] = useState({});
  const [termVisibility, setTermVisibility] = useState({});
  const [notices, setNotices] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');
  const [contactError, setContactError] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [desig, setDesig] = useState('');
  const [foi, setFoi] = useState('');
  const [quali, setQuali] = useState('');
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [info, setInfo] = useState('');
  const [year, setYear] = useState('');
  const [photo, setPhoto] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [faculties, setFaculties] = useState([]);
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [facultyVisibility, setFacultyVisibility] = useState({});
  const [routines, setRoutines] = useState([]);
  const [routinesError, setRoutinesError] = useState('');

  useEffect(() => {
    fetchMarks();
  }, []);

  const fetchMarks = async () => {
    // Fetch student marks data by course
    try {
      const response = await axios.get('http://localhost:3001/getMarksByCourse')
      setMarksData(response.data);
    } catch (error) {
      console.error('Error fetching student marks:', error);
    }
  }

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:3001/fetchcontacts');
      setContacts(response.data);
    } catch (err) {
      setContactError('Failed to load notices. Please try again later.');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Function to print batch content
  const printBatchContent = async (batchYear) => {
    const batchElement = document.getElementById(`batch-${batchYear}`);
    const canvas = await html2canvas(batchElement);
    const imgData = canvas.toDataURL('image/png');

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

    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 10, 20 + headerHeight, pdfWidth - 20, pdfHeight);
    pdf.save(`Batch_${batchYear}_Report.pdf`);
  };

  // Function to print term content with a header
  const printTermContent = async (batchYear, termName) => {
    const courseElement = document.getElementById(`term-${batchYear}-${termName}`);
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

    pdf.save(`Batch_${batchYear}_Term_${termName}_Report.pdf`);
  };

  // Function to print course content with a header
  const printCourseContent = async (batchYear, term, courseCode) => {
    const courseElement = document.getElementById(`course-${batchYear}-${term}-${courseCode}`);
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

    pdf.save(`Course_${courseCode}_Batch_${batchYear}_Report.pdf`);
  };

  const toggleBatchVisibility = (batchYear) => {
    setBatchVisibility((prev) => ({
      ...prev,
      [batchYear]: !prev[batchYear],
    }));
  };

  const toggleTermVisibility = (batchYear, termName) => {
    setTermVisibility((prev) => ({
      ...prev,
      [batchYear]: {
        ...prev[batchYear],
        [termName]: !prev[batchYear]?.[termName]
      }
    }));
  };


  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fetchnotices');
        setNotices(response.data);
      } catch (err) {
        setError('Failed to load notices. Please try again later.');
      }
    };

    fetchNotices();
  }, []);

  const deleteNotice = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/notices/${id}`);
      setNotices(notices.filter(notice => notice._id !== id));
    } catch (err) {
      setError('Failed to delete notice. Please try again later.');
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/contacts/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (err) {
      setError('Failed to delete contact. Please try again later.');
    }
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage('');
    setServerError('');
    const errors = validate(name, email, desig);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('number', number);
      formData.append('facebook', facebook);
      formData.append('linkedin', linkedin);
      formData.append('desig', desig);
      formData.append('foi', foi);
      formData.append('quali', quali);
      formData.append('photo', photo);
      formData.append('title', title);
      formData.append('authors', authors);
      formData.append('info', info);
      formData.append('year', year);

      axios.post('http://localhost:3001/facultydetails', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(result => {
          setSubmitMessage('Updated Successfully');
          fetchFaculties();
          fetchEmails();
          resetForm();
        })
        .catch(err => {
          // if (err.response && err.response.status === 500) {
          setServerError(err.response);
          // } else {
          //   setServerError("An error occurred. Please try again.");
          // }
        });
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    setFacebook('');
    setLinkedin('');
    setDesig('');
    setFoi('');
    setQuali('');
    setTitle('');
    setAuthors('');
    setInfo('');
    setYear('');
    setPhoto(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const validate = (name, email, id, password, role, batch, desig) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!name) {
    //   errors.name = "Username is required";
    // }
    if (!email) {
      errors.email = "Email is required";
    } else if (!regex.test(email)) {
      errors.email = "This is not a valid email format";
    }
    // if (!desig) {
    //   errors.desig = "Designation is required";
    // }
    return errors;
  };


  const fetchFaculties = async () => {
    try {
      const response = await axios.get('http://localhost:3001/faculties');
      setFaculties(response.data);
    } catch (error) {
      console.error('Error fetching faculty data', error);
    }
  };
  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('http://localhost:3001/emails');
      setEmails(response.data.map(entry => entry.email));
    } catch (error) {
      console.error('Error fetching emails', error);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const deleteFacultyrecord = async (facultyId, publicationId) => {
    try {
      await axios.delete(`http://localhost:3001/facultyrecord/${facultyId}/publication/${publicationId}`);
      fetchFaculties();
    } catch (err) {
      setError('Failed to delete publication. Please try again later.');
    }
  };

  const deleteFaculty = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/dltfaculty/${id}`);
      fetchFaculties();
      fetchEmails();
    } catch (err) {
      setError('Failed to delete faculty. Please try again later.');
    }
  };

  const toggleFacultyVisibility = (facultyId) => {
    setFacultyVisibility((prev) => ({
      ...prev,
      [facultyId]: !prev[facultyId],
    }));
  };

  const fetchRoutines = async () => {
    try {
      const response = await axios.get('http://localhost:3001/fetchroutines');
      setRoutines(response.data);
    } catch (err) {
      setRoutinesError('Failed to load routines. Please try again later.');
    }
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  const deleteRoutine = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/routine/${id}`);
      fetchRoutines();
    } catch (err) {
      console.log('Failed to delete routine. Please try again later.');
    }
  };

  const calculateBestMarks = (student) => {
    const courseCredit = parseFloat(student.courseCredit);
    const ctMarks = student.exams
      .filter(exam => exam.examType.startsWith('CT'))
      .map(exam => parseFloat(exam.marks));
    const bestN = courseCredit === 3 ? 3 : courseCredit === 4 ? 4 : ctMarks.length;
    const bestMarks = ctMarks
      .sort((a, b) => b - a)
      .slice(0, bestN)
      .reduce((acc, mark) => acc + mark, 0);


    const attendanceMarks = parseFloat(student.exams.find(exam => exam.examType === 'Attendance')?.marks || 0);
    const termFinalMarks = parseFloat(student.exams.find(exam => exam.examType === 'Term Final')?.marks || 0);
    return (bestMarks + attendanceMarks + termFinalMarks).toFixed(2);
  };

  const calculateLabTotal = (course) => {
    const labMarks = course.exams
      .filter(exam => exam.examType.startsWith('Lab'))
      .map(exam => parseFloat(exam.marks) || 0);

    const averageLabMarks = labMarks.reduce((acc, mark) => acc + mark, 0) / labMarks.length;

    const quizMark = parseFloat(course.exams.find(exam => exam.examType === 'Quiz')?.marks) || 0;
    const vivaMark = parseFloat(course.exams.find(exam => exam.examType === 'Viva')?.marks) || 0;
    const attendanceMark = parseFloat(course.exams.find(exam => exam.examType === 'Attendance')?.marks) || 0;

    const totalMarks = (averageLabMarks * course.courseCredit * 6) + quizMark + vivaMark + attendanceMark;

    return totalMarks.toFixed(2);
  };

  const calculateGrade = (student, totalMarks) => {
    const courseCredit = student.courseCredit;
    const maxMarks = courseCredit * 100;
    const percentage = totalMarks / maxMarks;

    const attendanceMark = parseFloat(student.exams.find(exam => exam.examType === 'Attendance')?.marks) || 0;
    const minAttendanceMark = courseCredit * 6;

    if (attendanceMark < minAttendanceMark) {
      return 'F';
    }

    if (percentage > 0.8) {
      return 'A+';
    } else if (percentage >= 0.75) {
      return 'A';
    } else if (percentage >= 0.70) {
      return 'A-';
    } else if (percentage >= 0.65) {
      return 'B+';
    } else if (percentage >= 0.60) {
      return 'B';
    } else if (percentage >= 0.55) {
      return 'B-';
    } else if (percentage >= 0.50) {
      return 'C+';
    } else if (percentage >= 0.45) {
      return 'C';
    } else if (percentage >= 0.40) {
      return 'D';
    } else {
      return 'F';
    }
  };

  return (
    <div>
      <Header />
      <ProtectedRoute allowedRoles={['admin']} />
      <div style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="container">
          <div className="row py-sm-5">
            <div className="col-4">
              <Signup />
            </div>
            <div className="col-4">
              <AddOwl />
              <div className="m-2"></div>
              <AddPic />
            </div>
            <div className="col-4">
              <div className='w-100 p-3 rounded bg-white'>
                <MarkSubForm
                  teacherEmail={teacherEmail}
                  batch={batch}
                  setBatch={setBatch}
                  term={term}
                  setTerm={setTerm}
                  course={course}
                  setCourse={setCourse}
                  exam={exam}
                  setExam={setExam}
                  studentId={studentId}
                  setStudentId={setStudentId}
                  marks={marks}
                  setMarks={setMarks}
                  setMarksData={setMarksData}
                  successMessage={successMessage}
                  setSuccessMessage={setSuccessMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        {/* Display Marks Data */}
        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="text-decoration-underline">Exam Results</h3>
            <button
              className="btn btn-primary mx-4"
              onClick={() => fetchMarks()}
            >
              Refresh
            </button>
          </div>
          {marksData && marksData.batch ? (
            marksData.batch.map(batch => (
              <div key={batch.batchName} id={`batch-${batch.batchName}`} className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="text-decoration-underline m-0 p-0"
                    onClick={() => toggleBatchVisibility(batch.batchName)}>
                    Batch: {batch.batchName}
                  </h5>
                  <button
                    className="btn btn-primary mx-4"
                    onClick={() => printBatchContent(batch.batchName)}
                  >
                    Download
                  </button>
                </div>
                {batchVisibility[batch.batchName] && (
                  <>
                    {batch.terms.map(term => (
                      <div key={term.term} id={`term-${batch.batchName}-${term.term}`}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="text-decoration-underline"
                            onClick={() => toggleTermVisibility(batch.batchName, term.term)}>
                            {termReplace[term.term] || term.term}
                          </h5>
                          <button
                            className="btn btn-primary mx-4"
                            onClick={() => printTermContent(batch.batchName, term.term)}
                          >
                            Download
                          </button>
                        </div>
                        {termVisibility[batch.batchName] && termVisibility[batch.batchName][term.term] && (
                          <>
                            {term.courses.map(course => {
                              const examTypes = [...new Set(course.students.flatMap(student => student.exams.map(exam => exam.examType)))];
                              return (
                                <div key={course.courseCode} id={`course-${batch.batchName}-${term.term}-${course.courseCode}`}>
                                  <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="text-decoration-underline">{courseIdReplace[course.courseCode] || course.courseCode}</h5>
                                    <button
                                      className="btn btn-primary mx-4"
                                      onClick={() => printCourseContent(batch.batchName, term.term, course.courseCode)}
                                    >
                                      Download
                                    </button>
                                  </div>
                                  <table className="table table-striped table-bordered">
                                    <thead>
                                      <tr>
                                        <th>Student ID</th>
                                        {examTypes.map(examType => (
                                          <th key={examType}>{examType}</th>
                                        ))}
                                        <th>Total</th>
                                        <th>Grade</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {course.students.map(student => (
                                        <tr key={student.studentId}>
                                          <td>{student.studentId}</td>
                                          {examTypes.map(examType => {
                                            const exam = student.exams.find(e => e.examType === examType);
                                            return <td key={examType}>{exam ? exam.marks : ''}</td>;
                                          })}
                                          <td>
                                            {student.courseType === 'theory'
                                              ? calculateBestMarks(student)
                                              : calculateLabTotal(student)}
                                          </td>
                                          <td>
                                            {student.courseType === 'theory'
                                              ? calculateGrade(student, calculateBestMarks(student))
                                              : calculateGrade(student, calculateLabTotal(student))}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              );
                            })}
                          </>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))
          ) : (
            <p>No marks data available.</p>
          )}
        </div>
      </div>
      <div>
        <div className="row mb-3">
          <div className="col-3 float-start">
            <div className="ms-xxl-1 me-xxl-1 bg-white p-3 mb-xxl-2">
              <div className="heading-sect">
                <h3 className="m-0 p-0 fs-6 fw-semibold">Notice Board</h3>
              </div>
              <div>
                <ul className="latest-news-ul">
                  {error ? (
                    <li>{error}</li>
                  ) : (
                    notices
                      .sort((a, b) => b._id.localeCompare(a._id))
                      .map((notice) => (
                        <li key={notice._id}>
                          <a
                            className={notice.file ? 'text-black text-decoration-underline' : 'text-black'}
                            href={notice.file ? `http://localhost:3001/public/noticefile/${notice.file}` : '#'}>
                            {notice.notice + " "}
                          </a>
                          <button className='btn btn-secondary rounded-3 btn-sm ms-auto' onClick={() => deleteNotice(notice._id)}>Delete</button>
                        </li>
                      ))
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3">
            <AddNotice notices={notices} setNotices={setNotices} />
          </div>
          <div className="col-3">
            <div className="ms-xxl-1 me-xxl-1 bg-white p-3 mb-xxl-2">
              <div className="heading-sect">
                <h3 className="m-0 p-0 fs-6 fw-semibold">Routines</h3>
              </div>
              <div>
                <ul className="latest-news-ul">
                  {routinesError ? (
                    <li>{routinesError}</li>
                  ) : (
                    routines
                      .map((routine) => (
                        <li key={routine._id}>
                          <a
                            className='text-black text-decoration-underline'
                            href={`http://localhost:3001/public/routine/file/${routine.file1}`}
                          >
                            {routine.dest} Routine
                          </a>
                          {/* <button className='btn btn-secondary rounded-3 btn-sm ms-auto' >Delete</button> */}
                          <i className="fa-solid fa-trash" onClick={() => deleteRoutine(routine._id)} style={{ cursor: 'pointer' }}></i>
                        </li>
                      ))
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-3">
            <AddRoutine setRoutines={setRoutines} />
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="container mt-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="text-decoration-underline">Contact Messages</h3>
            <button
              className="btn btn-primary"
              onClick={() => fetchContacts()}
            >
              Refresh
            </button>
          </div>
          {contactError ? (
            <p>Error getting contacts.</p>
          ) : (
            contacts.length === 0 ? (
              <p>No messages available.</p>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: "15%" }}>Name</th>
                    <th style={{ width: "15%" }}>Email</th>
                    <th style={{ width: "20%" }}>Subject</th>
                    <th style={{ width: "45%" }}>Message</th>
                    <th style={{ width: "5%" }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.subject}</td>
                      <td>{contact.message}</td>
                      <td>
                        <button
                          className='btn btn-secondary rounded-3 btn-sm ms-auto'
                          onClick={() => deleteMessage(contact._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          )}
        </div>
      </div>
      <div className="row">
        <h2 className='text-center text-decoration-underline bg-primary py-sm-2 text-white'>Faculty Details</h2>
        <div className="col-4">
          <div className='w-100 p-4 rounded bg-white'>
            <form onSubmit={handleSubmit}>
              <h5 className='text-center'>Faculty Details Update</h5>
              <div className='mb-2'>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder='Enter Name'
                  className='form-control'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* {formErrors.name && <p className="text-danger">{formErrors.name}</p>} */}
              </div>
              <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <div>
                  <select
                    className='form-control'
                    value={selectedEmail}
                    onChange={(e) => {
                      setSelectedEmail(e.target.value);
                      if (e.target.value === 'other') {
                        setEmail('');
                      } else {
                        setEmail(e.target.value);
                      }
                    }
                    }
                  >
                    <option value="">Select an existing email</option>
                    {emails.map((emailOption, index) => (
                      <option key={index} value={emailOption}>{emailOption}</option>
                    ))}
                    <option value="other">Other (Enter a new email)</option>
                  </select>
                </div>
                {selectedEmail === 'other' && (
                  <input
                    type="email"
                    placeholder='Enter Email'
                    className='form-control mt-2'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                )}
                {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
              </div>
              <div className='mb-2'>
                <label htmlFor="number">Number</label>
                <input
                  type="text"
                  placeholder='Enter Number'
                  className='form-control'
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                {/* {formErrors.number && <p className="text-danger">{formErrors.number}</p>} */}
              </div>
              <div className='mb-2'>
                <label htmlFor="number">Facebook Link</label>
                <input
                  type="text"
                  placeholder='Enter Facebook Link'
                  className='form-control'
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
                {/* {formErrors.number && <p className="text-danger">{formErrors.number}</p>} */}
              </div>
              <div className='mb-2'>
                <label htmlFor="number">LinkedIn link</label>
                <input
                  type="text"
                  placeholder='Enter LinkedIn Link'
                  className='form-control'
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
                {/* {formErrors.number && <p className="text-danger">{formErrors.number}</p>} */}
              </div>
              <div className='mb-2'>
                <label htmlFor="desig">Designation</label>
                <select
                  className='form-control'
                  value={desig}
                  onChange={(e) => setDesig(e.target.value)}
                >
                  <option value="">Select Designation</option>
                  <option value="1">Professor</option>
                  <option value="2">Associate Professor</option>
                  <option value="3">Assistant Professor</option>
                  <option value="4">Lecturer</option>
                </select>
                {/* {formErrors.desig && <p className="text-danger">{formErrors.desig}</p>} */}
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Field of Interest"
                  id="foi"
                  style={{ height: '20px' }}
                  value={foi}
                  onChange={(e) => setFoi(e.target.value)}
                />
                <label htmlFor="foi">Field of Interest</label>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Qualification"
                  id="quili"
                  style={{ height: '20px' }}
                  value={quali}
                  onChange={(e) => setQuali(e.target.value)}
                />
                <div className='mb-2'>
                  <label htmlFor="photo">Upload Photo</label>
                  <input
                    type="file"
                    className='form-control'
                    onChange={handlePhotoChange}
                  />
                </div>
                <label htmlFor="quali">Qualification</label>
              </div>
              <div className="fw-bolder pt-3">Publications</div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Title"
                  id="title"
                  style={{ height: '20px' }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Authors"
                  id="authors"
                  style={{ height: '20px' }}
                  value={authors}
                  onChange={(e) => setAuthors(e.target.value)}
                />
                <label htmlFor="authors">Authors</label>
              </div>
              <div className="form-floating mb-2">
                <textarea
                  className="form-control"
                  placeholder="Informations"
                  id="info"
                  style={{ height: '20px' }}
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                />
                <label htmlFor="info">Information</label>
              </div>
              <div className='mb-2'>
                {/* <label htmlFor="number">Year</label> */}
                <input
                  type="number"
                  placeholder='Year'
                  className='form-control'
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
              {submitMessage && <p className="text-success">{submitMessage}</p>}
              {serverError && <p className="text-danger">{serverError}</p>}
              <div className='d-grid'>
                <button className='btn btn-primary mt-2'>Save</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-8">
          <div className='m-2'>
            {faculties.map((faculty, index) => (
              <div key={index}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4
                    className="text-decoration-underline m-0 p-0"
                    onClick={() => toggleFacultyVisibility(faculty._id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {faculty.name}
                  </h4>
                  <div>
                    <button
                      className="btn btn-primary m-1"
                      onClick={() => deleteFaculty(faculty._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary m-1"
                      onClick={() => fetchFaculties()}
                    >
                      Refresh
                    </button>
                  </div>
                </div>
                {facultyVisibility[faculty._id] && (
                  <div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th style={{ width: "5%" }}>SN</th>
                          <th style={{ width: "25%" }}>Title</th>
                          <th style={{ width: "25%" }}>Authors</th>
                          <th style={{ width: "30%" }}>Info</th>
                          <th style={{ width: "10%" }}>Year</th>
                          <th style={{ width: "5%" }}>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {faculty.publications.map((publication, idx) => (
                          <tr key={idx}>
                            <td>{publication.sn}</td>
                            <td>{publication.title}</td>
                            <td>{publication.authors}</td>
                            <td>{publication.info}</td>
                            <td>{publication.year}</td>
                            <td>
                              <button
                                className='btn btn-secondary rounded-3 btn-sm ms-auto'
                                onClick={() => deleteFacultyrecord(faculty._id, publication._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
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

export default Admin;
