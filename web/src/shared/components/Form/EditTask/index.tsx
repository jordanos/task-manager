import React, { FormEvent, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import HOST from 'shared/constants/config';
import useError from 'shared/hooks/useError';
import useMutate from 'shared/hooks/useMutate';
import { Task } from 'shared/store/reducers/taskReducer';
import EditTaskUi from './EditTaskUi';

interface Props {
  editableTask: Task;
  editTask: Function;
  toggleView: Function;
  setError: Function;
}

const EditTask: React.FC<Props> = (props) => {
  const { editableTask, editTask, toggleView, setError } = props;

  const [task, setTask] = useState(editableTask);

  const updateData = (field: string, value: any) => {
    setTask((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => setTask(editableTask), [editableTask]);

  const { loading, error, data, mutate } = useMutate(
    'put',
    `${HOST}/tasks/${task.id}`
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    mutate({
      ...task,
      assignedTo: '622de5fed3f42ebf99d1b5de',
      date: task.date.toString(),
    });
  };

  useError(error, setError);

  useEffect(() => {
    if (data) {
      const newTask = {
        ...data,
        date: new Date(data.date),
      };
      editTask(newTask);
      toggleView();
    }
  }, [data]);

  return (
    <EditTaskUi
      task={task}
      updateData={updateData}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};

const mapStateToProps = (state: any) => {
  return { editableTask: state.task.editableTask };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleView: () => dispatch({ type: 'TOGGLE_MODAL_VIEW', payload: {} }),
    editTask: (payload: any) => dispatch({ type: 'EDIT_TASK', payload }),
    setError: (payload: any) => dispatch({ type: 'SET_ERROR', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
