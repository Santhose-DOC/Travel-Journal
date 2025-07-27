import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/styles/Login.css';
import logo from '../assets/Images/logo.jpg';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/final'); 
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h3>Username</h3>
        <input className="bor" type="text" placeholder="Enter the Username/Email" required />
        <h3>Password</h3>
        <input className="bor" type="password" placeholder="Enter the Password" required />
        <br />
        <button className="but" onClick={handleLogin}>Log In</button>
        <p style={{ fontSize: '20px' }}>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
