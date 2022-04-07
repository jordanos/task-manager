import React from 'react';
import SimpleCard, {
  EventsFallback,
} from 'shared/components/Helpers/SimpleCard';
import { StyledDesc } from 'shared/components/Helpers/Styles';
import Title from 'shared/components/Helpers/Title';
import StyledWrapper from 'shared/components/Wrappers/Styles';
import { Task } from 'shared/store/reducers/taskReducer';

interface Props {
  eventsThisWeek: Task[];
}

const EventsWeekUi: React.FC<Props> = ({ eventsThisWeek }) => {
  return (
    <StyledWrapper align="flex-start" justify="flex-start">
      <Title decoration="none">Events this week</Title>
      {eventsThisWeek.map(
        (task, index) =>
          index < 4 && (
            <SimpleCard key={task.id} style={{ marginBottom: '1em' }}>
              <Title decoration="none">{task.date.toDateString()}</Title>
              <StyledDesc>{task.title}</StyledDesc>
            </SimpleCard>
          )
      )}
      {eventsThisWeek.length === 0 && <EventsFallback />}
    </StyledWrapper>
  );
};

export default EventsWeekUi;
