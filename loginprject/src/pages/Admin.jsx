import ProtectedRoute from './ProtectedRoute';
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Admin() {
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
            <ProtectedRoute allowedRoles={['admin']} handleLogout={handleLogout} />
            <h1>Welcome to the Admin Panel</h1>
            <button onClick={handleLogout}>Logout</button>
            <Footer />
        </div>
    );
}

export default Admin;
