import React, { MouseEventHandler } from 'react';
import { Day } from '.';
import StyledWrapper from '../Wrappers/Styles';
import DayCard from './DayCard';
import PrevNext from './Header';
import { CalendarWrapper, StyledCalendar, StyledHeader } from './Styles';

interface Props {
  month: string;
  days: Day[];
  onNext: MouseEventHandler;
  onPrev: MouseEventHandler;
  onClick: Function;
}

const daysHeader = [
  'Monday',
  'Tuesday',
  'Wednsday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const CalendarUi: React.FC<Props> = (props) => {
  const { month, days, onNext, onPrev, onClick } = props;

  return (
    <StyledCalendar>
      <StyledWrapper align="flex-start" justify="flex-start">
        <StyledHeader>
          {month}
          <PrevNext onNext={onNext} onPrev={onPrev} />
        </StyledHeader>

        <CalendarWrapper>
          {/* {daysHeader.map((day) => (
            <div key={day} style={{ width: sizes.calendarDayWidth }}>
              {day}
            </div>
          ))} */}
          {days.map((day, i) => (
            <DayCard
              key={day.id}
              onClick={onClick}
              day={i + 1}
              active={i + 1 <= 31}
              events={day.events}
            />
          ))}
        </CalendarWrapper>
      </StyledWrapper>
    </StyledCalendar>
  );
};

export default CalendarUi;
