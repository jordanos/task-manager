import React from 'react';
import { Header } from 'shared/components/CustomLane';
import StyledWrapper from 'shared/components/Wrappers/Styles';

const DashboardHeader = () => {
  return (
    <StyledWrapper
      style={{ width: '100%', marginTop: '30px' }}
      direction="row"
      justify="space-around">
      <Header type="todo" title="ToDo 10" background="white" />
      <Header type="progress" title="In progress 10" background="white" />
      <Header type="done" title="Done today 10" background="white" />
      <Header type="done" title="Done this week 10" background="white" />
      <Header type="done" title="Done this month 10" background="white" />
    </StyledWrapper>
  );
};

export default DashboardHeader;
