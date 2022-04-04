import React from 'react';
import LaneHeader from 'shared/components/CustomLane';
import StyledWrapper from 'shared/components/Wrappers/Styles';

const DashboardHeader = () => {
  return (
    <StyledWrapper
      style={{ width: '100%', marginTop: '30px' }}
      direction="row"
      justify="space-around">
      <LaneHeader type="todo" title="ToDo 10" background="white" />
      <LaneHeader type="progress" title="In progress 10" background="white" />
      <LaneHeader type="done" title="Done today 10" background="white" />
      <LaneHeader type="done" title="Done this week 10" background="white" />
      <LaneHeader type="done" title="Done this month 10" background="white" />
    </StyledWrapper>
  );
};

export default DashboardHeader;
