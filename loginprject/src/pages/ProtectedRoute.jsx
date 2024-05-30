import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ allowedRoles, handleLogout }) => {
    const role = localStorage.getItem('role');

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Outlet />
            <button onClick={handleLogout}>Logout</button> {/* Logout button */}
        </>
    );
};

ProtectedRoute.propTypes = {
    allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleLogout: PropTypes.func.isRequired 
};

export default ProtectedRoute;
