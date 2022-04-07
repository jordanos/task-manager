import React from 'react';
import SimpleCard, {
  EventsFallback,
} from 'shared/components/Helpers/SimpleCard';
import { StyledDesc } from 'shared/components/Helpers/Styles';
import Title from 'shared/components/Helpers/Title';
import StyledWrapper from 'shared/components/Wrappers/Styles';
import { Task } from 'shared/store/reducers/taskReducer';

interface Props {
  nextEvents: Task[];
  eventsThisMonth: Task[];
}

const NextEventsUi: React.FC<Props> = ({ nextEvents, eventsThisMonth }) => {
  return (
    <StyledWrapper
      style={{ height: '100%' }}
      align="flex-start"
      justify="flex-start">
      <Title>Next events</Title>
      <StyledWrapper
        style={{
          //   width: `700px`,
          marginBottom: '3em',
        }}
        direction="row"
        justify="flex-start">
        {nextEvents.map(
          (task, index) =>
            index < 3 && (
              <SimpleCard key={task.id} style={{ marginLeft: '20px' }}>
                <Title decoration="none">{task.date.toDateString()}</Title>
                <StyledDesc>{task.title}</StyledDesc>
              </SimpleCard>
            )
        )}
        {nextEvents.length === 0 && <EventsFallback />}
      </StyledWrapper>

      <Title>Events this month</Title>
      <StyledWrapper
        style={{
          width: `700px`,
          marginBottom: '2em',
        }}
        direction="row"
        justify="flex-start">
        {eventsThisMonth.map(
          (task, index) =>
            index < 3 && (
              <SimpleCard key={task.id} style={{ marginLeft: '20px' }}>
                <Title decoration="none">{task.date.toDateString()}</Title>
                <StyledDesc>{task.title}</StyledDesc>
              </SimpleCard>
            )
        )}
        {eventsThisMonth.length === 0 && <EventsFallback />}
      </StyledWrapper>
    </StyledWrapper>
  );
};

export default NextEventsUi;
