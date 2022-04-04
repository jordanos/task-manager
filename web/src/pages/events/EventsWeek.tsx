import React from 'react';
import SimpleCard from 'shared/components/Helpers/SimpleCard';
import Title from 'shared/components/Helpers/Title';
import StyledWrapper from 'shared/components/Wrappers/Styles';

const EventsWeek: React.FC = () => {
  return (
    <StyledWrapper
      style={{ height: '100%' }}
      align="flex-start"
      justify="flex-start">
      <Title decoration="none">Events this week</Title>
      <SimpleCard style={{ marginBottom: '20px' }}>
        <Title decoration="none">08/01 - 19:00 - 20:00</Title>
        Sed vitae lobortis nulla, ut vulputate augue.
      </SimpleCard>
      <SimpleCard style={{ marginBottom: '20px' }}>
        <Title decoration="none">08/01 - 19:00 - 20:00</Title>
        Sed vitae lobortis nulla, ut vulputate augue.
      </SimpleCard>
    </StyledWrapper>
  );
};

export default EventsWeek;
