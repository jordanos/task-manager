import React, { lazy } from 'react';
import Loader from 'shared/components/Loader';
import { data } from './data';

const CustomBoard = lazy(() => import('shared/components/Board'));

const Tasks = () => {
  return <Loader component={<CustomBoard data={data} />} />;
};

export default Tasks;
