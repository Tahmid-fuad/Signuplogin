import Header from './Header';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); // Initialize role state
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [serverError, setServerError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(name, email, password);
        setFormErrors(errors);
        setIsSubmit(true);

        if (Object.keys(errors).length === 0) {
            axios.post('http://localhost:3001/register', { name, email, password, role }) // Send role to server
                .then(result => {
                    console.log(result);
                    navigate('/login');
                })
                .catch(err => {
                    if (err.response && err.response.status === 400) {
                        setServerError("Email already registered");
                    } else {
                        setServerError("An error occurred. Please try again.");
                    }
                });
        }
    };

    const validate = (name, email, password) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!name) {
            errors.name = "Username is required";
        }
        if (!email) {
            errors.email = "Email is required";
        } else if (!regex.test(email)) {
            errors.email = "This is not a valid email format";
        }
        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }
        if (!role) { // Validate role
            errors.role = "Role is required";
        }
        return errors;
    };

    return (
        <div>
            <Header />
            <div className='signup template d-flex justify-content-center align-items-center vh-100' style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
                <div className='w-25 p-5 rounded bg-white'>
                    <form onSubmit={handleSubmit}>
                        <h3 className='text-center'>Sign Up</h3>
                        <div className='mb-2'>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder='Enter Name'
                                className='form-control'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder='Enter Email'
                                className='form-control'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="role">Role</label>
                            <select
                                className='form-control'
                                value={role}
                                onChange={(e) => setRole(e.target.value)} // Update role state
                            >
                                <option value="">Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </select>
                            {formErrors.role && <p className="text-danger">{formErrors.role}</p>}
                        </div>
                        {serverError && <p className="text-danger">{serverError}</p>}
                        <div className='mb-2'>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder='Enter Password'
                                className='form-control'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                        </div>
                        <div className='d-grid'>
                            <button className='btn btn-primary mt-2'>Sign up</button>
                        </div>
                        <p className='text-center mt-2'>
                            <Link to="/login" className='ms-2 mt-2'>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;
