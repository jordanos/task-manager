import Events from 'pages/events';
import Tasks from 'pages/tasks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from 'shared/components/Navigation';

const AppRoutes = () => {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="*" element={<Tasks />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
