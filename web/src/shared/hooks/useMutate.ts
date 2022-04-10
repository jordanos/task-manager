import axios from 'axios';
import { getLocalToken } from 'shared/helpers/auth';
import { getError } from 'shared/helpers/ntw';
import useNtwStates from './useNtwStates';
import { ReqReturn } from './useQuery';

interface MutateReturn extends ReqReturn {
  mutate: Function;
}

const useMutate = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string
): MutateReturn => {
  const { loading, setLoading, error, setError, data, setData } =
    useNtwStates();

  const mutate = async (reqData: any, newUrl?: string) => {
    setLoading(true);
    try {
      const res: any = await axios({
        method,
        url: newUrl || url,
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

  return { loading, error, data, mutate };
};

export default useMutate;
