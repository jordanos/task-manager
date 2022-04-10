import axios from 'axios';
import { useEffect } from 'react';
import { getLocalToken } from 'shared/helpers/auth';
import { getError } from 'shared/helpers/ntw';
import useNtwStates from './useNtwStates';

export interface ReqReturn {
  loading: boolean;
  error: { error: any; id: string };
  data: any | null;
}

const useQuery = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  reqData: any = null
): ReqReturn => {
  const { loading, setLoading, error, setError, data, setData } =
    useNtwStates();

  useEffect(() => {
    const execute = async () => {
      setLoading(true);
      try {
        const res: any = await axios({
          method,
          url,
          data: reqData,
          headers: {
            Authorization: getLocalToken(),
          },
        });
        setLoading(false);
        setData(res.data.data);
      } catch (e: any) {
        setLoading(false);
        setError(getError(e));
      }
    };

    execute();
  }, []);

  return { loading, error, data };
};

export default useQuery;
