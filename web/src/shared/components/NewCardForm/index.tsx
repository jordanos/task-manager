import React, { FormEvent, MouseEventHandler, useEffect } from 'react';
import HOST from 'shared/constants/config';
import useForm from 'shared/hooks/useForm';
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
  assignedTo: '622de5fed3f42ebf99d1b5de',
};

const NewCardForm: React.FC<PropsInterface> = ({ onCancel, onAdd }) => {
  const { inputError, updateError, inputData, updateData } =
    useForm<Task>(initTask);

  const { loading, error, data, mutate } = useMutate('post', `${HOST}/tasks`);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputData.title === '') {
      updateError('title', 'title is required');
      return;
    }
    if (inputData.description === '') {
      updateError('description', 'description is required');
      return;
    }

    mutate({
      ...inputData,
      date: inputData.date.toString(),
    });
  };

  useEffect(() => {
    if (data) {
      onAdd({
        ...data,
        date: new Date(data.date),
      });
    }
  }, [data]);

  return (
    <NewCardFormUi
      task={inputData}
      updateTask={updateData}
      handleSubmit={handleSubmit}
      onCancel={onCancel}
      loading={loading}
      error={inputError}
    />
  );
};

export default NewCardForm;
