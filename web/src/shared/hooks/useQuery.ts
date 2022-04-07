import axios from 'axios';
import { useEffect, useState } from 'react';

type ReqReturn = {
  loading: boolean;
  error: { error: string } | null;
  data: any | null;
};

const useQuery = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  reqData: any = null
): ReqReturn => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const execute = async () => {
      setLoading(true);
      try {
        const res: any = await axios({
          method,
          url,
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

    execute();
  }, []);

  return { loading, error, data };
};

export default useQuery;
