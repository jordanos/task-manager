import React, { FormEventHandler, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Task } from 'shared/store/reducers/taskReducer';
import EditTaskUi from './EditTaskUi';

interface Props {
  editableTask: Task;
  editTask: Function;
  toggleView: Function;
}

const EditTask: React.FC<Props> = ({ editableTask, editTask, toggleView }) => {
  const [task, setTask] = useState(editableTask);

  const updateData = (field: string, value: any) => {
    setTask((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => setTask(editableTask), [editableTask]);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    editTask(task);
    toggleView();
  };

  return (
    <EditTaskUi
      task={task}
      updateData={updateData}
      handleSubmit={handleSubmit}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTask);
