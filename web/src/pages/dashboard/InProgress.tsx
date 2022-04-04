import React from 'react';
import CustomCard from 'shared/components/CustomCard';
import Title from 'shared/components/Helpers/Title';
import StyledWrapper from 'shared/components/Wrappers/Styles';

const InProgress: React.FC = () => {
  return (
    <StyledWrapper
      style={{ height: '100%' }}
      align="flex-start"
      justify="flex-start">
      <Title>Tasks in progress</Title>
      <CustomCard
        onEdit={null}
        onClick={() => {}}
        onDelete={null}
        id="1"
        description={`Sed vitae lobortis nulla, ut vulputate augue. 
        Nullam mollis non ante et consequat. Cras quis dapibus augue. 
        Phasellus nec fermentum mauris. Aenean et eros ut erat gravida rhoncus a et velit.`}
        title="New Task"
        date={new Date()}
      />
      <CustomCard
        onEdit={null}
        onClick={() => {}}
        onDelete={null}
        id="1"
        description={`Sed vitae lobortis nulla, ut vulputate augue. 
        Nullam mollis non ante et consequat. Cras quis dapibus augue. 
        Phasellus nec fermentum mauris. Aenean et eros ut erat gravida rhoncus a et velit.`}
        title="New Task"
        date={new Date()}
      />
    </StyledWrapper>
  );
};

export default InProgress;
