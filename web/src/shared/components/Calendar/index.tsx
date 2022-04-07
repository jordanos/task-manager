import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Task } from 'shared/store/reducers/taskReducer';
import CalendarUi from './CalendarUi';

export type Day = {
  events: number;
  id: number;
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const initDays: Day[] = new Array(35).fill({ events: 0, id: Date.now() });

interface Props {
  tasks: Task[];
}

const Calendar: React.FC<Props> = ({ tasks }) => {
  const [days, setDays] = useState(initDays);
  const [month, setMonth] = useState(new Date().getMonth());

  const updateDays = () => {
    const filteredTasks = tasks.filter(
      (task) => task.status === 'todo' && task.date.getMonth() === month
    );

    const newDays = [...initDays];
    filteredTasks.forEach((task) => {
      newDays[task.date.getDate() - 1] = {
        ...newDays[task.date.getDate() - 1],
        events: newDays[task.date.getDate() - 1].events + 1,
      };
    });

    setDays(newDays);
  };

  useEffect(() => updateDays(), [month]);

  const prevNext = (comand: string): void => {
    switch (comand) {
      case 'prev':
        if (month === 0) {
          setMonth(11);
          return;
        }
        setMonth((prevValue) => prevValue - 1);
        return;
      case 'next':
        if (month === 11) {
          setMonth(0);
          return;
        }
        setMonth((prevValue) => prevValue + 1);
        return;
      default:
        console.log('Unknown comand');
    }
  };

  return (
    <CalendarUi
      month={months[month]}
      days={days}
      onNext={() => prevNext('next')}
      onPrev={() => prevNext('prev')}
      onClick={(d: number) => {
        alert('feature in development');
      }}
    />
  );
};

// redux states
const mapStateToProps = (state: any) => {
  return { tasks: state.task.tasks };
};

export default connect(mapStateToProps)(Calendar);
