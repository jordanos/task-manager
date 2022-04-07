import React from 'react';
import CustomCard from 'shared/components/CustomCard';
import Title from 'shared/components/Helpers/Title';
import StyledWrapper from 'shared/components/Wrappers/Styles';
import { Task } from 'shared/store/reducers/taskReducer';

interface Props {
  tasks: Task[];
}

const fallbackTask: Task = {
  id: 'fallback-progress',
  title: 'You have no tasks in this section',
  description:
    'Please add some tasks to this section in the tasks page, to see them show up in here.',
  date: new Date(),
  status: 'progress',
  assignedTo: 'myself',
};

const InProgressUi: React.FC<Props> = ({ tasks }) => {
  return (
    <StyledWrapper
      style={{ height: '100%' }}
      align="flex-start"
      justify="flex-start">
      <Title>Tasks in progress</Title>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <CustomCard
            key={task.id}
            onEdit={null}
            onClick={() => {}}
            onDelete={null}
            task={task}
          />
        ))
      ) : (
        <CustomCard
          key={fallbackTask.id}
          onEdit={null}
          onClick={() => {}}
          onDelete={null}
          task={fallbackTask}
        />
      )}
    </StyledWrapper>
  );
};

export default InProgressUi;
