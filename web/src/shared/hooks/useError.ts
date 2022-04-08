import { useEffect } from 'react';

const useError = (error: any, setError: Function) => {
  useEffect(() => {
    if (error) setError(error);
  }, [error]);
};

export default useError;
