import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Board from 'react-trello';
import BoardController from 'shared/components/Board/BoardController';
import HOST from 'shared/constants/config';
import useError from 'shared/hooks/useError';
import useMutate from 'shared/hooks/useMutate';
import { Task } from 'shared/store/reducers/taskReducer';
import Loading from '../Helpers/Loading';
import Spinner from '../Spinner';
import { boardStyle, components, laneStyle } from './boardCustomization';

interface PropsInterface {
  tasks: Task[];
  addTask: Function;
  preEdit: Function;
  toggleView: Function;
  deleteTask: Function;
  moveTask: Function;
  setError: Function;
}

const CustomBoard: React.FC<PropsInterface> = (props) => {
  const {
    tasks,
    addTask,
    preEdit,
    toggleView,
    deleteTask,
    moveTask,
    setError,
  } = props;

  const onEdit = (task: Task) => {
    preEdit(task);
    toggleView();
  };

  const onDelete = (task: Task) => {
    deleteTask(task);
  };

  // init board object to control board data
  const [controller, setController] = useState(
    new BoardController(tasks, onEdit, onDelete)
  );

  useEffect(
    () => setController(new BoardController(tasks, onEdit, onDelete)),
    [tasks]
  );

  const { loading, error, data, mutate } = useMutate('put', ``);

  const handleMove = (id: string, status: Task['status']) => {
    moveTask({ id, status });
    const task = tasks.filter((t) => t.id === id);
    mutate({ ...task[0], status }, `${HOST}/tasks/${id}`);
  };

  useError(error, setError);

  return (
    <>
      {loading && (
        <Loading>
          <Spinner />
        </Loading>
      )}
      <Board
        style={boardStyle}
        data={controller.getBoard()}
        components={components}
        laneStyle={laneStyle}
        editable
        onCardMoveAcrossLanes={(
          from: string,
          to: string,
          id: string,
          index: number
        ) => from !== to && handleMove(id, to as Task['status'])}
        onCardAdd={(task: Task) => {
          addTask(task);
        }}
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { tasks: state.task.tasks };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleView: () => dispatch({ type: 'TOGGLE_MODAL_VIEW', payload: {} }),
    addTask: (payload: Task) => dispatch({ type: 'ADD_TASK', payload }),
    editTask: (payload: any) => dispatch({ type: 'EDIT_TASK', payload }),
    preEdit: (payload: any) => dispatch({ type: 'PRE_EDIT', payload }),
    moveTask: (payload: { id: string; status: Task['status'] }) =>
      dispatch({ type: 'MOVE_TASK', payload }),
    deleteTask: (payload: any) => dispatch({ type: 'DELETE_TASK', payload }),
    setError: (payload: any) => dispatch({ type: 'SET_ERROR', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomBoard);
