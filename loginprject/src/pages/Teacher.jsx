import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

function Teacher() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
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

export default Teacher
