import Loader from 'pages/Loader';
import React, { lazy } from 'react';
import Spinner from 'shared/components/Spinner';
import { data } from './data';

const CustomBoard = lazy(() => import('shared/components/Board'));

export const Fallback = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Spinner />
    </div>
  );
};

const Tasks = () => {
  return <Loader component={<CustomBoard data={data} />} />;
};

export default Tasks;
