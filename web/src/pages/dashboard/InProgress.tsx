import React from 'react';
import CustomCard from 'shared/components/CustomCard';
import StyledWrapper from 'shared/components/Wrappers/Styles';

const InProgress: React.FC = () => {
  return (
    <StyledWrapper>
      <CustomCard onEdit={null} onClick={() => {}} id="1" title="New Task" />
      <CustomCard onEdit={null} onClick={() => {}} id="1" title="New Task" />
      <CustomCard onEdit={null} onClick={() => {}} id="1" title="New Task" />
    </StyledWrapper>
  );
};

export default InProgress;
