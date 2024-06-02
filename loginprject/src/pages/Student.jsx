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
      <h1>Welcome to the Student Panel</h1>
      <button onClick={handleLogout}>Logout</button>
      <Footer />
    </div>
  )
}

export default Student
