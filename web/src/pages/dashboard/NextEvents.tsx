import React from 'react';
import SimpleCard from 'shared/components/Helpers/SimpleCard';
import Title from 'shared/components/Helpers/Title';
import StyledWrapper from 'shared/components/Wrappers/Styles';

const NextEvents: React.FC = () => {
  return (
    <StyledWrapper
      style={{ height: '100%' }}
      align="flex-start"
      justify="flex-start">
      <Title>Next events</Title>
      <StyledWrapper
        style={{
          width: `700px`,
          marginBottom: '2em',
        }}
        direction="row"
        justify="flex-start">
        <SimpleCard style={{ marginLeft: '20px' }}>
          <Title decoration="none">08/01 - 19:00 - 20:00</Title>
          Sed vitae lobortis nulla, ut vulputate augue.
        </SimpleCard>
        <SimpleCard style={{ marginLeft: '20px' }}>
          <Title decoration="none">08/01 - 19:00 - 20:00</Title>
          Sed vitae lobortis nulla, ut vulputate augue.
        </SimpleCard>
      </StyledWrapper>

      <Title>Events this month</Title>
      <StyledWrapper
        style={{
          width: `700px`,
          marginBottom: '2em',
        }}
        direction="row"
        justify="flex-start">
        <SimpleCard style={{ marginLeft: '20px' }}>
          <Title decoration="none">08/01 - 19:00 - 20:00</Title>
          Sed vitae lobortis nulla, ut vulputate augue.
        </SimpleCard>
        <SimpleCard style={{ marginLeft: '20px' }}>
          <Title decoration="none">08/01 - 19:00 - 20:00</Title>
          Sed vitae lobortis nulla, ut vulputate augue.
        </SimpleCard>
      </StyledWrapper>
    </StyledWrapper>
  );
};

export default NextEvents;
