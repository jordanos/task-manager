import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Board from 'react-trello';
import BoardController from 'shared/components/Board/BoardController';
import { Task } from 'shared/store/reducers/taskReducer';
import { boardStyle, components, laneStyle } from './boardCustomization';

interface PropsInterface {
  tasks: Task[];
  addTask: Function;
  preEdit: Function;
  toggleView: Function;
  deleteTask: Function;
  moveTask: Function;
}

const CustomBoard: React.FC<PropsInterface> = (props) => {
  const { tasks, addTask, preEdit, toggleView, deleteTask, moveTask } = props;

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

  return (
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
      ) => from !== to && moveTask({ id, status: to })}
      onCardAdd={(task: Task) => {
        addTask(task);
      }}
    />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomBoard);
