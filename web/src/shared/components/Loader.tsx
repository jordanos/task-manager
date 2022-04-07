import React, { Suspense } from 'react';
import Spinner from 'shared/components/Spinner';

export const Loading = () => {
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
        zIndex: 5,
      }}>
      <Spinner />
    </div>
  );
};

const Loader: React.FC = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default Loader;
