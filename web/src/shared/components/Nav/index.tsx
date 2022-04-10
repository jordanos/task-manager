import React from 'react';
import { connect } from 'react-redux';
import useCurrentTime from 'shared/hooks/useCurrentTime';
import { NavHeader } from 'shared/store/reducers/appReducer';
import { UserState } from 'shared/store/reducers/userReducer';
import NavUi from './NavUi';

interface Props {
  navHeader: NavHeader;
  user: UserState;
  logoutUser: Function;
  deleteTasks: Function;
}

const Nav: React.FC<Props> = (props) => {
  const { navHeader, user, logoutUser, deleteTasks } = props;
  const time = useCurrentTime();
  return (
    <NavUi
      navHeader={navHeader}
      user={user}
      logoutUser={logoutUser}
      time={time}
      deleteTasks={deleteTasks}
    />
  );
};

const mapStateToProps = (state: any) => {
  return { navHeader: state.app.navHeader, user: state.user };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logoutUser: () => dispatch({ type: 'SET_LOGOUT', payload: {} }),
    deleteTasks: () => dispatch({ type: 'DELETE_ALL_TASK', payload: {} }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
