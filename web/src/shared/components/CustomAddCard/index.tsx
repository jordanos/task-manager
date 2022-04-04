/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import AddIcon from 'shared/assets/icons/AddIcon';
import StyledWrapper from '../Wrappers/Styles';

interface Props {
  onClick: Function;
}

const AddCardLink: React.FC<Props> = ({ onClick }) => {
  return (
    <StyledWrapper
      style={{
        width: '100%',
      }}>
      <div onClick={() => onClick()}>
        <AddIcon />
      </div>
    </StyledWrapper>
  );
};

export default AddCardLink;
