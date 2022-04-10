import { useState } from 'react';

interface Return {
  loading: boolean;
  error: { error: any; id: string };
  data: any;
  setLoading: Function;
  setError: Function;
  setData: Function;
}

const useNtwStates = (): Return => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: null, id: '' });
  const [data, setData] = useState(null);

  return { loading, setLoading, error, setError, data, setData };
};

export default useNtwStates;
