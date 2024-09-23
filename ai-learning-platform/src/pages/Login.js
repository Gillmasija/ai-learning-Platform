import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa'; // Import Google and Apple icons
import './Login.css'; // Add this to import the CSS file

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock authentication logic
    if (email === 'test@example.com' && password === 'password123') {
      setIsAuthenticated(); // Update authentication status
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      setError('Invalid email or password');
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); // Redirect to the sign-up page
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Sign In</h2>
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
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">Continue</button>
        </form>

        <div className="social-login">
          <button className="social-button google">
            <FaGoogle className="icon" /> Sign in with Google
          </button>
          <button className="social-button apple">
            <FaApple className="icon" /> Sign in with Apple
          </button>
        </div>

        {/* Sign Up Button */}
        <div className="signup-section">
          <p>Don't have an account?</p>
          <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>

      <div className="login-side">
        <h1>Welcome Page</h1>
        <p>Sign in to continue access</p>
        <div className="login-logo">LOGO</div>
      </div>
    </div>
  );
};

export default Login;
