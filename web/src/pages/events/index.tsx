/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import EventsIcon from 'shared/assets/icons/EventsIcon';
import Calendar from 'shared/components/Calendar';
import { StyledMainWrapper } from 'shared/components/Wrappers/Styles';
import { NavHeader } from 'shared/store/reducers/appReducer';

interface Props {
  dispatch: any;
}

const Events: React.FC<Props> = ({ dispatch }) => {
  const payload = {
    title: 'Events',
    icon: EventsIcon,
  };
  dispatch.setNavHeader(payload);
  useEffect(() => {}, []);

  return (
    <StyledMainWrapper direction="row" justify="flex-start" align="flex-start">
      <Calendar />
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

export default connect(mapStateToProps, mapDispatchToProps)(Events);
