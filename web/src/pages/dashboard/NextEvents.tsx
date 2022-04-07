import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Task } from 'shared/store/reducers/taskReducer';
import NextEventsUi from './NextEventsUi';

interface Props {
  tasks: Task[];
}

const initTasks: Task[] = [];

const NextEvents: React.FC<Props> = ({ tasks }) => {
  const [nextEvents, setNextEvents] = useState(initTasks);
  const [eventsThisMonth, setEventsThisMonth] = useState(initTasks);

  const sortTasks = (unsorted: Task[]): Task[] => {
    const sorted = unsorted.sort((a, b) => {
      if (a.date.getTime() > b.date.getTime()) return 1;
      if (b.date.getTime() > a.date.getTime()) return -1;
      return 0;
    });
    return sorted;
  };

  const getThisMonth = (): Task[] => {
    const date = new Date();
    const filteredTasks = tasks.filter(
      (task) =>
        task.status === 'todo' && task.date.getMonth() === date.getMonth()
    );
    const sorted = sortTasks(filteredTasks);
    return sorted;
  };

  const getEventsThisMonth = (): Task[] => {
    const thisMonthTasks = getThisMonth();

    if (thisMonthTasks.length > 3) {
      const randomlyPicked: Task[] = [];
      let pickIndex = thisMonthTasks.length - 1;
      // get three tasks randomly picked from this month tasks
      for (let i = 0; i < 3; i += 1) {
        randomlyPicked.push(thisMonthTasks[pickIndex]);
        // divide by 2 to get equaly distant(by date) tasks
        pickIndex = Math.floor(pickIndex / 2);
      }
      return randomlyPicked;
    }
    return thisMonthTasks;
  };

  useEffect(() => {
    setNextEvents(tasks);
    setEventsThisMonth(getEventsThisMonth());
  }, [tasks]);

  return (
    <NextEventsUi nextEvents={nextEvents} eventsThisMonth={eventsThisMonth} />
  );
};

const mapStateToProps = (state: any): { tasks: Task[] } => {
  return { tasks: state.task.tasks };
};

export default connect(mapStateToProps)(NextEvents);
