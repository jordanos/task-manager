import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import DashboardIcon from 'shared/assets/icons/DashboardIcon';
import StyledWrapper, {
  StyledMainWrapper,
} from 'shared/components/Wrappers/Styles';
import { NavHeader } from 'shared/store/reducers/appReducer';
import DashboardHeader from './DashboardHeader';
import InProgress from './InProgress';
import NextEvents from './NextEvents';

interface Props {
  dispatch: any;
}

const Dashboard: React.FC<Props> = ({ dispatch }) => {
  useEffect(() => {
    const payload = {
      title: 'Dashboard',
      icon: DashboardIcon,
    };
    dispatch.setNavHeader(payload);
  }, []);

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

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch: {
      setNavHeader: (payload: NavHeader) =>
        dispatch({ type: 'SET_NAV_HEADER', payload }),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
