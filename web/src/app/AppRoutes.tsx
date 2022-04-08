import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import Dashboard from 'pages/dashboard';
import Events from 'pages/events';
import Tasks from 'pages/tasks';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from 'shared/components/Navigation';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
