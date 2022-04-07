import React from 'react';
import { connect } from 'react-redux';
import useCurrentTime from 'shared/hooks/useCurrentTime';
import { NavHeader } from 'shared/store/reducers/appReducer';
import NavUi from './NavUi';

interface Props {
  navHeader: NavHeader;
}

const Nav: React.FC<Props> = ({ navHeader }) => {
  const time = useCurrentTime();
  return <NavUi navHeader={navHeader} time={time} />;
};

const mapStateToProps = (state: any) => {
  return { navHeader: state.app.navHeader };
};

export default connect(mapStateToProps)(Nav);
