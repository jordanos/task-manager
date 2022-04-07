import React from 'react';
import { connect } from 'react-redux';
import { Task } from 'shared/store/reducers/taskReducer';
import EventsWeekUi from './EventsWeekUi';

interface Props {
  tasks: Task[];
}

const EventsWeek: React.FC<Props> = ({ tasks }) => {
  const getThisWeek = (): Task[] => {
    const date = new Date();
    const filteredTasks = tasks.filter(
      (task) =>
        task.status === 'todo' &&
        task.date.getMonth() === date.getMonth() &&
        task.date.getDate() - date.getDate() < 7
    );
    const sorted = filteredTasks.sort((a, b) => {
      if (a.date.getTime() > b.date.getTime()) return 1;
      if (b.date.getTime() > a.date.getTime()) return -1;
      return 0;
    });
    return sorted;
  };

  return <EventsWeekUi eventsThisWeek={getThisWeek().reverse()} />;
};

const mapStateToProps = (state: any): { tasks: Task[] } => {
  return { tasks: state.task.tasks };
};

export default connect(mapStateToProps)(EventsWeek);
