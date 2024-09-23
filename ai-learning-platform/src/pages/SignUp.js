import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa'; // Import Google and Apple icons
import './Login.css'; // Reuse the same CSS file for consistency

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Mock signup logic (replace with your signup logic)
    if (email && password) {
      // After signup logic, redirect to the dashboard or login page
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="login-input"
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">Sign Up</button>
        </form>

        <div className="social-login">
          <button className="social-button google">
            <FaGoogle className="icon" /> Sign up with Google
          </button>
          <button className="social-button apple">
            <FaApple className="icon" /> Sign up with Apple
          </button>
        </div>

        {/* Link to login page */}
        <div className="signup-section">
          <p>Already have an account?</p>
          <button className="signup-button" onClick={() => navigate('/login')}>Log In</button>
        </div>
      </div>

      <div className="login-side">
        <h1>Welcome to Our Platform</h1>
        <p>Create an account to get started</p>
        <div className="login-logo">LOGO</div>
      </div>
    </div>
  );
};

export default SignUp;
