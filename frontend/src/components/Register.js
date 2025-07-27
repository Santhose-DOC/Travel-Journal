import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/Register.css';
import logo from '../assets/Images/logo.jpg';

const Register = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('/api/auth/register', formData);
      alert(res.data.message); 
      navigate('/final'); 
    } catch (err) {
      alert(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-page">
      <div className="login-box">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h3>Username</h3>
        <input
          className="bor"
          type="text"
          placeholder="Enter the Username"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <h3>Email</h3>
        <input
          className="bor"
          type="email"
          placeholder="Enter the Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <h3>Password</h3>
        <input
          className="bor"
          type="password"
          placeholder="Enter the Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <button className="but" onClick={handleRegister}>Register</button>
        <p style={{ fontSize: '20px', color: 'white' }}>
          Already have an account? <Link to="/login" style={{ color: 'white', textDecoration: 'underline' }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
