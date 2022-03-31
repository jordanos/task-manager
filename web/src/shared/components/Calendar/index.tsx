import React from 'react';
import StyledWrapper from '../Wrappers/Styles';
import StyledCalendar, {
  CalendarWrapper,
  StyledDay,
  StyledHeader,
} from './Styles';

interface DayInterface {
  day?: number;
  active: boolean;
  header?: string;
}

const DayCard: React.FC<DayInterface> = ({ header, day, active, children }) => {
  return (
    <StyledDay active={active} header={header}>
      {header ? header : day}
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
          {'March 31'}
          <StyledWrapper direction="row">
            {/* prev */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="0.5"
                y="0.5"
                width="29"
                height="29"
                rx="3.5"
                fill="white"
                stroke="#E7E8EA"
              />
              <path
                d="M18.7326 22.3972L17.8937 23.2361C17.5384 23.5913 16.964 23.5913 16.6126 23.2361L9.26641 15.8937C8.9112 15.5384 8.9112 14.964 9.26641 14.6126L16.6126 7.26641C16.9678 6.9112 17.5422 6.9112 17.8937 7.26641L18.7326 8.10533C19.0916 8.46433 19.084 9.05006 18.7175 9.4015L14.1639 13.7397L12.4826 15.1262L14.1639 16.7628L18.7175 21.101C19.0878 21.4524 19.0954 22.0382 18.7326 22.3972Z"
                fill="currentColor"
              />
            </svg>
            {/* next */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                x="-0.5"
                y="0.5"
                width="29"
                height="29"
                rx="3.5"
                transform="matrix(-1 0 0 1 29 0)"
                fill="white"
                stroke="#E7E8EA"
              />
              <path
                d="M11.2674 22.3972L12.1063 23.2361C12.4616 23.5913 13.036 23.5913 13.3874 23.2361L20.7336 15.8937C21.0888 15.5384 21.0888 14.964 20.7336 14.6126L13.3874 7.26641C13.0322 6.9112 12.4578 6.9112 12.1063 7.26641L11.2674 8.10533C10.9084 8.46433 10.916 9.05006 11.2825 9.4015L15.8361 13.7397L17.5174 15.1262L15.8361 16.7628L11.2825 21.101C10.9122 21.4524 10.9046 22.0382 11.2674 22.3972Z"
                fill="currentColor"
              />
            </svg>
          </StyledWrapper>
        </StyledHeader>

        <CalendarWrapper>
          {daysHeader.map((day) => (
            <DayCard header={day} active={true} />
          ))}
          {days.map((item, i) => (
            <DayCard day={i + 1} active={i + 1 <= 31 ? true : false} />
          ))}
        </CalendarWrapper>
      </StyledWrapper>
    </StyledCalendar>
  );
};
export default Calendar;
