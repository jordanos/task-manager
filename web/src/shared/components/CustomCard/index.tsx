/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEventHandler, useEffect } from 'react';
import HOST from 'shared/constants/config';
import useMutate from 'shared/hooks/useMutate';
import { Task } from 'shared/store/reducers/taskReducer';
import CustomCardUi from './CustomCardUi';

interface Props {
  onEdit: Function | null;
  onDelete: Function | null;
  onClick: MouseEventHandler;
  task: Task;
}

const CustomCard: React.FC<Props> = (props) => {
  const { onEdit, onClick, onDelete, task } = props;

  const { loading, error, data, mutate } = useMutate('delete', ``);

  const handleDelete = () => {
    mutate(
      {
        ...task,
        assignedTo: '622de5fed3f42ebf99d1b5de',
        date: task.date.toString(),
      },
      `${HOST}/tasks/${task.id}`
    );
  };

  useEffect(() => {
    if (data) {
      if (onDelete) onDelete(task);
    }
  }, [data]);

  return (
    <>
      {task && (
        <CustomCardUi
          onEdit={onEdit}
          onDelete={onDelete ? handleDelete : onDelete}
          onClick={onClick}
          task={task}
          loading={loading}
        />
      )}
    </>
  );
};

export default CustomCard;
