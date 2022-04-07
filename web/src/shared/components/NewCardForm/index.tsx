import React, {
  FormEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import HOST from 'shared/constants/config';
import useMutate from 'shared/hooks/useMutate';
import { Task } from 'shared/store/reducers/taskReducer';
import NewCardFormUi from './NewCardFormUi';

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
  const { loading, error, data, mutate } = useMutate('post', `${HOST}/tasks`);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutate({
      ...task,
      assignedTo: '622de5fed3f42ebf99d1b5de',
      date: task.date.toString(),
    });
  };

  useEffect(() => {
    if (data) {
      onAdd({
        id: data.id,
        title: data.title,
        description: data.deacription,
        status: data.status,
        date: new Date(data.date),
        assignedTo: 'myself',
      });
    }
  }, [data]);

  return (
    <NewCardFormUi
      task={task}
      updateTask={updateTask}
      handleSubmit={handleSubmit}
      onCancel={onCancel}
      loading={loading}
    />
  );
};

export default NewCardForm;
