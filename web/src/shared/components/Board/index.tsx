import React from 'react';
import Board from 'react-trello';
import CustomCard from 'shared/components/CustomCard';
import { colors, sizes } from 'shared/utils/Styles';
import { Header as LaneHeader } from '../CustomLane';

interface Props {
  data?: any;
}

const CustomBoard: React.FC<Props> = ({ data }) => {
  const components = {
    Card: CustomCard,
    LaneHeader: LaneHeader,
  };

  const laneStyle = {
    background: 'rgba(0,0,0,0.03)',
    width: `calc(${sizes.cardWidth} + 20px)`,
    maxHeight: '100%',
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

  return (
    <Board
      style={boardStyle}
      data={data}
      components={components}
      laneStyle={laneStyle}
    />
  );
};

export default CustomBoard;
