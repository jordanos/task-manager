import React from 'react';
import { Time } from 'shared/helpers/clock';
import { NavHeader } from 'shared/store/reducers/appReducer';
import StyledWrapper from '../Wrappers/Styles';
import StyledNav from './styles';

interface Props {
  navHeader: NavHeader;
  time: Time;
}

const NavUi: React.FC<Props> = ({ navHeader, time }) => {
  return (
    <StyledNav>
      <StyledWrapper direction="row">
        <navHeader.icon />
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
        <div>{time.date.toDateString()}</div>
        <div>{`${time.hour}:${time.minute}:${time.second} ${time.session}`}</div>
      </StyledWrapper>
    </StyledNav>
  );
};

export default NavUi;
