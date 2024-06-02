import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      <Footer />
    </div>
  )
}

export default Teacher;
