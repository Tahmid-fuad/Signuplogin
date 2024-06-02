import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

const ProtectedRoute = ({ allowedRoles, handleLogout }) => {
    const role = localStorage.getItem('role');

    const checkAuth = async () => {
        try {
            await axios.get('http://localhost:3001/protected', { withCredentials: true });
            return true;
        } catch (error) {
            return false;
        }
    };

    if (!allowedRoles.includes(role) || !checkAuth()) {
        handleLogout();
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Outlet />
            {/* <button onClick={handleLogout}>Logout</button> Logout button */}
        </>
    );
};

ProtectedRoute.propTypes = {
    allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleLogout: PropTypes.func.isRequired
};

export default ProtectedRoute;
