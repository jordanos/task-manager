import React, { useEffect } from 'react';
import HOST from 'shared/constants/config';
import { Time } from 'shared/helpers/clock';
import useMutate from 'shared/hooks/useMutate';
import { NavHeader } from 'shared/store/reducers/appReducer';
import Button from '../Button';
import StyledWrapper from '../Wrappers/Styles';
import StyledNav from './styles';

interface Props {
  navHeader: NavHeader;
  time: Time;
}

const NavUi: React.FC<Props> = ({ navHeader, time }) => {
  const { loading, error, data, mutate } = useMutate(
    'post',
    `${HOST}/auth/login`
  );

  useEffect(() => {
    if (loading) {
      console.log('loading');
    }
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  }, [loading, error, data]);

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
      <Button
        onClick={() =>
          mutate({
            email: 'y23hree@gmail.com',
            password: '123456',
          })
        }
        loading={loading}>
        Login
      </Button>
      <StyledWrapper style={{ fontSize: '14px' }}>
        <div>{time.date.toDateString()}</div>
        <div>{`${time.hour}:${time.minute}:${time.second} ${time.session}`}</div>
      </StyledWrapper>
    </StyledNav>
  );
};

export default NavUi;
