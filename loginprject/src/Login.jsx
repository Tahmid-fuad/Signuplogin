import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
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
            <Header></Header>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '7rem', paddingBottom: '7rem', background: 'linear-gradient(120deg,#AB7442, #ffffff)' }}>
                <div style={{ background: 'white', opacity: 0.9, borderRadius: '10px', boxShadow: '10px 10px 15px rgba(0,0,0,0.05)', width: '400px' }}>
                    <h1 style={{ textAlign: 'center', padding: '20px 0', borderBottom: '1px solid silver' }}>Log in</h1>
                    <form onSubmit={handleSubmit} style={{ padding: '0 40px', boxSizing: 'border-box' }}>
                        <div style={{ position: 'relative', top: '10px', left: '5px', color: '#adadad', transform: 'translateY(-50%)', fontSize: '16px', pointerEvents: 'none', transition: '.5s' }}>CUET Email</div>
                        <div className="txt_field" style={{ position: 'relative', marginBottom: '30px' }}>
                            <border-bottom style={{ width: '100%', height: '2px', background: '#adadad', transition: '0.5s' }} />
                            <input type="text" style={{ width: '100%', padding: '0 5px', height: '40px', fontSize: '16px', border: 'none', background: 'none', outline: 'none' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <span style={{ content: "", position: 'absolute', top: '40px', left: '0', width: '0%', height: '2px', backgroundColor: '#AB7442', transition: '.5s', }}></span>
                        </div>
                        <label style={{ position: 'relative', top: '10px', left: '5px', color: '#adadad', transform: 'translateY(-50%)', fontSize: '16px', pointerEvents: 'none', transition: '.5s' }}>Password</label>
                        <div className="txt_field" style={{ position: 'relative', marginBottom: '30px' }}>
                            <border-bottom style={{ width: '100%', height: '2px', background: '#adadad', transition: '0.5s' }} />
                            <input type="password" style={{ width: '100%', padding: '0 5px', height: '40px', fontSize: '16px', border: 'none', background: 'none', outline: 'none' }} value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span style={{ content: "", position: 'absolute', top: '40px', left: '0', width: '0%', height: '2px', backgroundColor: '#AB7442', transition: '.5s', }}></span>
                        </div>
                    <ToastContainer />
                        <div className="form-group text-right" style={{ marginBottom: '20px' }}>
                            <Link to="/forgot-password" className="pass" style={{ color: '#a6a6a6', cursor: 'pointer', textDecoration: 'none' }}>Forgot Password?</Link>
                        </div>
                        <button type="submit" style={{ width: '100%', height: '50px', border: '1px solid', background: '#AB7442', borderRadius: '25px', fontSize: '18px', color: '#e9f4fb', fontWeight: 700, cursor: 'pointer', outline: 'none' }}>Login</button>
                    </form>
                    <div className="signup_link text-center mt-3" style={{ fontSize: '16px', color: '#666666', textAlign: 'center', marginTop: '30px', marginBottom: '30px' }}>
                        Do not have your account yet? <br />
                        <Link to="/signup" style={{ color: '#AB7442', textDecoration: 'none' }}>Sign up</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
