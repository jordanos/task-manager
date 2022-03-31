import React from 'react';
import AppRoutes from './AppRoutes';
import BaseStyles from './BaseStyles';
import './fontStyles.css';
import NormalizeStyles from './NormalizeStyles';

const App: React.FC = () => {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <AppRoutes />
    </>
  );
};

export default App;
