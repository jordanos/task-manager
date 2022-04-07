import React from 'react';
import ReactTooltip from 'react-tooltip';
import { colors } from 'shared/utils/Styles';
import { StyledDay } from './Styles';

interface Props {
  day: number;
  active: boolean;
  events: number;
  onClick: Function;
}

const DayCard: React.FC<Props> = ({ day, active, events, onClick }) => {
  return (
    <StyledDay
      data-tip
      data-for={`tooltip-day${day}`}
      onClick={events > 0 ? () => onClick(day) : () => {}}
      active={active}>
      {day}
      {events > 0 && (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '2em',
          }}>
          <h5
            style={{
              width: '18px',
              height: '18px',
              background: colors.danger,
              color: colors.backgroundLightest,
              borderRadius: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {events}
          </h5>
        </div>
      )}
      <ReactTooltip id={`tooltip-day${day}`} place="top" effect="solid">
        You have got {events} todo&apos;s at this day
      </ReactTooltip>
    </StyledDay>
  );
};

export default DayCard;
