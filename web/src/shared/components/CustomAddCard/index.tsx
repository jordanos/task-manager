/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import StyledWrapper from '../Wrappers/Styles';

interface Props {
  onClick: Function;
}

const addIcon = (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="30" rx="15" fill="#F7CB65" />
    <path
      d="M23.7429 12.8143H17.1857V6.25713C17.1857 5.45251 16.5332 4.79999 15.7286 4.79999H14.2714C13.4668 4.79999 12.8143 5.45251 12.8143 6.25713V12.8143H6.25716C5.45255 12.8143 4.80002 13.4668 4.80002 14.2714V15.7286C4.80002 16.5332 5.45255 17.1857 6.25716 17.1857H12.8143V23.7428C12.8143 24.5475 13.4668 25.2 14.2714 25.2H15.7286C16.5332 25.2 17.1857 24.5475 17.1857 23.7428V17.1857H23.7429C24.5475 17.1857 25.2 16.5332 25.2 15.7286V14.2714C25.2 13.4668 24.5475 12.8143 23.7429 12.8143Z"
      fill="currentColor"
    />
  </svg>
);

const AddCardLink: React.FC<Props> = ({ onClick }) => {
  return (
    <StyledWrapper
      style={{
        width: '100%',
      }}>
      <div onClick={() => onClick()}>{addIcon}</div>
    </StyledWrapper>
  );
};

export default AddCardLink;
