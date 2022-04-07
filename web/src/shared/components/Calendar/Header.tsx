/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { MouseEventHandler } from 'react';
import NextIcon from 'shared/assets/icons/NextIcon';
import PrevIcon from 'shared/assets/icons/PrevIcon';
import StyledWrapper from '../Wrappers/Styles';

interface Props {
  onNext: MouseEventHandler;
  onPrev: MouseEventHandler;
}

const PrevNext: React.FC<Props> = ({ onNext, onPrev }) => {
  return (
    <StyledWrapper direction="row">
      <div onClick={onPrev}>
        <PrevIcon />
      </div>
      <div onClick={onNext}>
        <NextIcon />
      </div>
    </StyledWrapper>
  );
};

export default PrevNext;
