import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import CareerGuidance from './pages/CareerGuidance';
import LearningPath from './pages/LearningPath';
import Login from './pages/Login';  // Import your Login component
import SignUp from './pages/SignUp'; // Import the SignUp component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status

  // Function to simulate authentication
  const handleLogin = () => {
    setIsAuthenticated(true); // Set as true when user successfully logs in
  };

  // Component for protecting routes
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={handleLogin} />} /> {/* Login route */}
        <Route path="/signup" element={<SignUp />} /> {/* Sign Up route */}

        {/* Protect routes below by wrapping with PrivateRoute */}
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> {/* Default route */}
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/career" element={<PrivateRoute><CareerGuidance /></PrivateRoute>} />
        <Route path="/learning" element={<PrivateRoute><LearningPath /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
