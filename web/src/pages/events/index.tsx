import Calendar from 'shared/components/Calendar';
import { StyledMainWrapper } from 'shared/components/Wrappers/Styles';

const Events = () => {
  return (
    <StyledMainWrapper direction="row" justify="flex-start" align="flex-start">
      <Calendar />
    </StyledMainWrapper>
  );
};

export default Events;
