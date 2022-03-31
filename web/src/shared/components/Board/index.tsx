import React from 'react';
import Board from 'react-trello';
import CustomCard from 'shared/components/CustomCard';
import { color, sizes } from 'shared/utils/Styles';
import { Header as LaneHeader } from '../CustomLane';
import StyledBoard from './Style';

interface Props {
  data?: any;
}

const components = {
  Card: CustomCard,
  LaneHeader: LaneHeader,
};

const boardStyle = {
  background: color.backgroundMedium,
  position: 'fixed',

  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 0,

  paddingLeft: '100px',
  paddingTop: '80px',
};

const laneStyle = {
  background: 'rgba(0,0,0,0.03)',
  width: `calc(${sizes.cardWidth} + 20px)`,
  maxHeight: '100%',
  scrollbarColor: `${color.primary} transparent`,
};

const CustomBoard: React.FC<Props> = ({ data }) => {
  return (
    <StyledBoard>
      <Board
        data={data}
        components={components}
        style={boardStyle}
        laneStyle={laneStyle}
      />
    </StyledBoard>
  );
};

export default CustomBoard;
