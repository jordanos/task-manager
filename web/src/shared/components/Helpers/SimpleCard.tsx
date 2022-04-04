import React from 'react';
import { StyledCard } from './Styles';

interface Props {
  style?: Object;
}

const SimpleCard: React.FC<Props> = ({ style, children }) => {
  return <StyledCard style={style}>{children}</StyledCard>;
};

SimpleCard.defaultProps = {
  style: {},
};

export default SimpleCard;
