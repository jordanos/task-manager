import React, { lazy } from 'react';
import Loader from 'shared/components/Loader';
import BaseStyles from './BaseStyles';
import './fontStyles.css';
import NormalizeStyles from './NormalizeStyles';

const AppRoutes = lazy(() => import('./AppRoutes'));
const Init = lazy(() => import('./Init'));

const App: React.FC = () => {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Loader>
        <Init />
        <AppRoutes />
      </Loader>
    </>
  );
};

export default App;
