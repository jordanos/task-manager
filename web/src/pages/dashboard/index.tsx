import React from 'react';
import StyledWrapper, {
  StyledMainWrapper,
} from 'shared/components/Wrappers/Styles';
import DashboardHeader from './DashboardHeader';
import InProgress from './InProgress';
import NextEvents from './NextEvents';

const Dashboard = () => {
  return (
    <StyledMainWrapper direction="column" justify="start" align="start">
      <DashboardHeader />
      <StyledWrapper
        style={{ paddingLeft: '30px', paddingTop: '30px' }}
        direction="row"
        justify="flex-start">
        <InProgress />
        <NextEvents />
      </StyledWrapper>
    </StyledMainWrapper>
  );
};

export default Dashboard;
