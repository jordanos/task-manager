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

interface Props {
  component: any;
}

const Loader: React.FC<Props> = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

export default Loader;
