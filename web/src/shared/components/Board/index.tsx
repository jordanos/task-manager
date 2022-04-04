import React from 'react';
import { connect } from 'react-redux';
import Board from 'react-trello';
import BoardController from 'shared/components/Board/BoardController';
import CustomCard from 'shared/components/CustomCard';
import { Task } from 'shared/store/reducers/taskReducer';
import { colors, sizes } from 'shared/utils/Styles';
import AddCardLink from '../CustomAddCard';
import LaneHeader from '../CustomLane';
import NewCardForm from '../NewCardForm';

interface PropsInterface {
  tasks: Task[];
  addTask: Function;
  preEdit: Function;
  toggleView: Function;
  deleteTask: Function;
}

const components = {
  Card: CustomCard,
  LaneHeader,
  AddCardLink,
  NewCardForm,
};

const laneStyle = {
  background: 'rgba(0,0,0,0.03)',
  width: `calc(${sizes.cardWidth} + 20px)`,
  maxHeight: `calc(100vh - calc(${sizes.navHeight} + 50px))`,
  scrollbarColor: `${colors.primary} transparent`,
};

const boardStyle = {
  background: `${colors.backgroundMedium}`,
  position: 'fixed',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  paddingLeft: '100px',
  paddingTop: '80px',
};

const CustomBoard: React.FC<PropsInterface> = (props) => {
  const { tasks, addTask, preEdit, toggleView, deleteTask } = props;

  const onEdit = (task: Task) => {
    preEdit(task);
    toggleView();
  };

  const onDelete = (task: Task) => {
    deleteTask(task);
  };

  // init board object to control bard data
  const controller = new BoardController(tasks, onEdit, onDelete);

  return (
    <Board
      style={boardStyle}
      data={controller.getBoard()}
      components={components}
      laneStyle={laneStyle}
      editable
      onCardAdd={(task: Task) => {
        addTask({ ...task, assignedTo: 'myself' });
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
    deleteTask: (payload: any) => dispatch({ type: 'DELETE_TASK', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomBoard);
