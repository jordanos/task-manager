/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import EventsIcon from 'shared/assets/icons/EventsIcon';
import Calendar from 'shared/components/Calendar';
import { StyledMainWrapper } from 'shared/components/Wrappers/Styles';
import { NavHeader } from 'shared/store/reducers/appReducer';
import { sizes } from 'shared/utils/Styles';
import EventsWeek from './EventsWeek';

interface Props {
  setNavHeader: Function;
}

const Events: React.FC<Props> = ({ setNavHeader }) => {
  useEffect(() => {
    const payload = {
      title: 'Events',
      icon: EventsIcon,
    };
    setNavHeader(payload);
  }, []);

  return (
    <StyledMainWrapper
      style={{
        paddingTop: `calc(${sizes.navHeight} + 2em)`,
        paddingLeft: `calc(${sizes.navHeight} + 2em)`,
      }}
      direction="row"
      justify="flex-start"
      align="flex-start">
      <EventsWeek />
      <div className="spacing" style={{ width: '80px' }} />
      <Calendar />
    </StyledMainWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any): { setNavHeader: Function } => {
  return {
    setNavHeader: (payload: NavHeader) =>
      dispatch({ type: 'SET_NAV_HEADER', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
