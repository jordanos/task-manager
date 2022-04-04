import React from 'react';
import CustomCard from 'shared/components/CustomCard';
import StyledWrapper from 'shared/components/Wrappers/Styles';

const InProgress: React.FC = () => {
  return (
    <StyledWrapper>
      <CustomCard
        onEdit={null}
        onClick={() => {}}
        onDelete={null}
        id="1"
        description=""
        title="New Task"
        date={new Date()}
      />
    </StyledWrapper>
  );
};

export default InProgress;
