import React from 'react';
import StyledWrapper from '../Wrappers/Styles';
import PrevNext from './Header';
import {
  CalendarWrapper,
  StyledCalendar,
  StyledDay,
  StyledHeader,
} from './Styles';

interface DayInterface {
  day: number;
  active: boolean;
  header?: string | undefined;
}

const DayCard: React.FC<DayInterface> = ({ header, day, active }) => {
  return (
    <StyledDay active={active} header={header}>
      {header && header}
      {!header && day}
    </StyledDay>
  );
};

const Calendar: React.FC = () => {
  const days = Array(35).fill(0);
  const daysHeader = [
    'Monday',
    'Tuesday',
    'Wednsday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  return (
    <StyledCalendar>
      <StyledWrapper align="flex-start" justify="flex-start">
        {/* whole calendar */}

        <StyledHeader>
          March 31
          <PrevNext onClickHandler={() => {}} />
        </StyledHeader>

        <CalendarWrapper>
          {daysHeader.map((day) => (
            <DayCard header={day} active day={0} />
          ))}
          {days.map((item, i) => (
            <DayCard day={i + 1} active={i + 1 <= 31} />
          ))}
        </CalendarWrapper>
      </StyledWrapper>
    </StyledCalendar>
  );
};

DayCard.defaultProps = {
  header: undefined,
};

export default Calendar;