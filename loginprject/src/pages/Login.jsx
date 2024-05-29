import Header from './Header'
import Footer from './Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                if (result.data === "Success") {
                    toast.success('Login Successful!');
                    navigate('/');
                }
                else {
                    toast.error(result.data);
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <div>
            <Header />
            <div className='login template d-flex justify-content-center align-items-center 100-w vh-100' style={{background:  "linear-gradient(120deg,#AB7442, #ffffff)"}}>
                <div className='40-w p-5 rounded bg-white'>
                    <form onSubmit={handleSubmit} >
                        <h3 className='text-center'>Log in</h3>
                        <div className='mb-2'>
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='Enter Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="password">Password</label>
                            <input type="password" placeholder='Enter Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        {/* <div className='mb-2'>
                            <input type="checkbox" className='custom-control custom-checkbox' id="check" />
                            <label htmlFor="check" className='custom-input-label ms-2'>
                                Remember me
                            </label>
                        </div> */}
                        <div className='d-grid'>
                            <button className='btn btn-primary mt-2'>Log in</button>
                        </div>
                        <ToastContainer/>
                        <p className='text-right mt-2 '>
                            <a href="">Forgot Password?</a>
                        </p>
                        <div className="text-center mt-2">
                            <Link to="/signup" className='ms-2'>Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
