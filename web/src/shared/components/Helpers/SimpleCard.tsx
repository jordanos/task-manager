import React from 'react';
import { StyledCard, StyledDesc } from './Styles';
import Title from './Title';

interface Props {
  style?: Object;
}

const SimpleCard: React.FC<Props> = ({ style, children }) => {
  return <StyledCard style={style}>{children}</StyledCard>;
};

export const EventsFallback: React.FC = () => {
  return (
    <SimpleCard style={{ marginLeft: '20px' }}>
      <Title decoration="none">You have got no events for this period</Title>
      <StyledDesc>
        Please consider adding tasks(todo items) using the tasks page.
      </StyledDesc>
    </SimpleCard>
  );
};

SimpleCard.defaultProps = {
  style: {},
};

export default SimpleCard;
