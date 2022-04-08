import axios from 'axios';
import { useState } from 'react';

type MutateReturn = {
  loading: boolean;
  error: { error: string } | null;
  data: any | null;
  mutate: Function;
};

const useMutate = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string
): MutateReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const mutate = async (reqData: any, newUrl?: string) => {
    setLoading(true);
    try {
      const res: any = await axios({
        method,
        url: newUrl || url,
        data: reqData,
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzA0OGRkYTc1MzU1ZGYwZTU5ZWU1ZSIsImlhdCI6MTY0OTM0OTI4NCwiZXhwIjoyNTEzMjYyODg0fQ.IHh7sgSYoqVeaqRAVgm7O-_ZRiITacBQyGCMmWn0mCI`,
        },
      });
      if (res.status >= 400) throw new Error(res.error);
      setLoading(false);
      setData(res.data.data);
    } catch (e: any) {
      setLoading(false);
      setError(e);
    }
  };

  return { loading, error, data, mutate };
};

export default useMutate;
