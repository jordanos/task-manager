import React, { MouseEventHandler } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Time } from 'shared/helpers/clock';
import { NavHeader } from 'shared/store/reducers/appReducer';
import { colors } from 'shared/utils/Styles';
import Button from '../Button';
import StyledWrapper from '../Wrappers/Styles';
import StyledNav from './styles';

interface Props {
  navHeader: NavHeader;
  time: Time;
  user: any;
}

const NavUi: React.FC<Props> = (props) => {
  const { navHeader, time, user } = props;
  const navigate = useNavigate();

  const handleClick: MouseEventHandler = () => {
    navigate('/login');
  };

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
      <StyledWrapper direction="row">
        <Button
          outline
          color={colors.primary}
          bg={colors.borderLightest}
          onClick={handleClick}
          loading={false}>
          {user.token && user.token !== '' ? 'Logout' : 'Login'}
        </Button>

        <StyledWrapper style={{ marginLeft: '2em', fontSize: '14px' }}>
          <div>{time.date.toDateString()}</div>
          <div>{`${time.hour}:${time.minute}:${time.second} ${time.session}`}</div>
        </StyledWrapper>
      </StyledWrapper>
    </StyledNav>
  );
};

const mapStateToProps = (state: any) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(NavUi);
