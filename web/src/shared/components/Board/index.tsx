import BoardController from 'pages/tasks/BoardController';
import React from 'react';
import Board from 'react-trello';
import CustomCard from 'shared/components/CustomCard';
import { Task } from 'shared/store/reducers/taskReducer';
import { colors, sizes } from 'shared/utils/Styles';
import AddCardLink from '../CustomAddCard';
import LaneHeader from '../CustomLane';
import NewCardForm from '../NewCardForm';

interface PropsInterface {
  tasks: Task[];
  controller: BoardController;
  addTask: Function;
  onEdit: Function;
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

const CustomBoard: React.FC<PropsInterface> = ({
  tasks,
  controller,
  addTask,
  onEdit,
}) => {
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

export default CustomBoard;
