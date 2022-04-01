import React from 'react';
import { connect } from 'react-redux';
import Board from 'react-trello';
import CustomCard from 'shared/components/CustomCard';
import { colors, sizes } from 'shared/utils/Styles';
import { Header as LaneHeader } from '../CustomLane';

interface props {
  controller: Function;
  tasks?: [];
}

const components = {
  Card: CustomCard,
  LaneHeader: LaneHeader,
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

const CustomBoard: React.FC<props> = ({ controller, tasks }) => {
  return (
    <Board
      style={boardStyle}
      data={controller(tasks)}
      components={components}
      laneStyle={laneStyle}
      editable={true}
    />
  );
};

const mapStateToProps = (state: any) => {
  return { tasks: state.task.tasks };
};

export default connect(mapStateToProps)(CustomBoard);
