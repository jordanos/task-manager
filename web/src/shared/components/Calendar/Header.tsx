import React from 'react';
import NextIcon from 'shared/assets/icons/NextIcon';
import PrevIcon from 'shared/assets/icons/PrevIcon';
import StyledWrapper from '../Wrappers/Styles';

interface PreveNextInterface {
  onClickHandler: Function;
}

const PrevNext: React.FC<PreveNextInterface> = ({ onClickHandler }) => {
  return (
    <StyledWrapper direction="row">
      <PrevIcon />
      <NextIcon />
    </StyledWrapper>
  );
};

export default PrevNext;
