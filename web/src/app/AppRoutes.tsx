import Dashboard from 'pages/dashboard';
import Events from 'pages/events';
import Tasks from 'pages/tasks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from 'shared/components/Navigation';

const AppRoutes = () => {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Tasks />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
