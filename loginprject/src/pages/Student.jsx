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
    <ProtectedRoute allowedRoles={['student']} handleLogout={handleLogout}>
        <h1>Welcome to the Student Panel</h1>
        <button onClick={handleLogout}>Logout</button> 
    </ProtectedRoute>
    <Footer />
    </div>
  )
}

export default Student
