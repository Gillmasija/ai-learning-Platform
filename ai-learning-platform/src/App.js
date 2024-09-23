import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import CareerGuidance from './pages/CareerGuidance';
import LearningPath from './pages/LearningPath';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Default route */}
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/career" element={<CareerGuidance />} />
        <Route path="/learning" element={<LearningPath />} />
      </Routes>
    </Router>
  );
}

export default App;
