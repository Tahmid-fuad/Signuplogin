import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/reset-password/${token}`, { password });
      setMessage('Password reset successfully');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="reset-password template d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(120deg,#AB7442, #ffffff)" }}>
        <div className="w-25 p-5 rounded bg-white">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center">Reset Password</h3>
            <div className="mb-2">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button className="btn btn-primary mt-2">Submit</button>
            </div>
            {message && <p className="text-center mt-2 text-success">{message}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ResetPassword;
