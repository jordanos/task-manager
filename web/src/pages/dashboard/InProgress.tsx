import React from 'react';
import { connect } from 'react-redux';
import { Task } from 'shared/store/reducers/taskReducer';
import InProgressUi from './InProgressUi';

interface Props {
  tasks: Task[];
}

const InProgress: React.FC<Props> = ({ tasks }) => {
  // const getProgress = (tasks: Task[]): tasks: Task[]=> {}
  return (
    <InProgressUi tasks={tasks.filter((task) => task.status === 'progress')} />
  );
};

const mapStateToProps = (state: any): { tasks: Task[] } => {
  return { tasks: state.task.tasks };
};

export default connect(mapStateToProps)(InProgress);
