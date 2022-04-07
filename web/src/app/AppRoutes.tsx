import Dashboard from 'pages/dashboard';
import Events from 'pages/events';
import Tasks from 'pages/tasks';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from 'shared/components/Navigation';
import HOST from 'shared/constants/config';
import useQuery from 'shared/hooks/useQuery';
import { Task } from 'shared/store/reducers/taskReducer';

interface Props {
  addMany: Function;
}

const AppRoutes: React.FC<Props> = ({ addMany }) => {
  const { loading, error, data } = useQuery('get', `${HOST}/tasks`, {
    email: 'y23hree@gmail.com',
    password: '123456',
  });

  useEffect(() => {
    if (data) {
      const newTasks: Task[] = [];
      data.forEach((task: any) => {
        newTasks.push({
          id: task.id,
          title: task.title,
          description: task.description,
          date: new Date(task.date),
          status: task.status,
          assignedTo: 'myself',
        });
      });
      addMany(newTasks);
    }
  }, [data]);

  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addMany: (payload: Task[]) => dispatch({ type: 'ADD_MANY_TASKS', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
