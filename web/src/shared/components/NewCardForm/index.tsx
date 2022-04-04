import React, { MouseEventHandler, useState } from 'react';
import { Task } from 'shared/store/reducers/taskReducer';
import NewCardFormUi from './presentation';

interface PropsInterface {
  onCancel: MouseEventHandler;
  onAdd: Function;
}

const initTask: Task = {
  id: '',
  title: '',
  description: '',
  date: new Date(),
  status: 'todo',
  assignedTo: 'myself',
};

const NewCardForm: React.FC<PropsInterface> = ({ onCancel, onAdd }) => {
  const [task, setTask] = useState(initTask);

  const updateTask = (field: string, value: any) => {
    setTask((prevState) => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = () => {
    onAdd({ ...task, id: `${Date.now()}` });
  };

  return (
    <NewCardFormUi
      task={task}
      updateTask={updateTask}
      handleSubmit={handleSubmit}
      onCancel={onCancel}
    />
  );
};

export default NewCardForm;
