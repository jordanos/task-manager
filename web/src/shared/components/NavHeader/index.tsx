import React from 'react';
import { connect } from 'react-redux';
import StyledWrapper from '../Wrappers/Styles';
import StyledNav from './styles';

interface Props {
  navHeader: any;
}

const time = { date: '15 dec 2021', time: '10:30' };

const NavHeader: React.FC<Props> = ({ navHeader }) => {
  return (
    <StyledNav>
      <StyledWrapper direction="row">
        {navHeader.icon}
        <div
          style={{
            fontFamily: 'RobotoBold',
            fontSize: '30px',
            marginLeft: '15px',
          }}>
          {navHeader.title}
        </div>
      </StyledWrapper>
      {/* date */}
      <StyledWrapper style={{ fontSize: '14px' }}>
        <div>{time.date}</div>
        <div>{time.time}</div>
      </StyledWrapper>
    </StyledNav>
  );
};

const mapStateToProps = (state: any) => {
  return { navHeader: state.app.navHeader };
};

export default connect(mapStateToProps)(NavHeader);
