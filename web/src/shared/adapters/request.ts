import axios from 'axios';
import { useEffect, useState } from 'react';

type ReqReturn = {
  loading: boolean;
  error: any | null;
  data: any | null;
};

// This function servs as an adapter between axios methods and states
const Request = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  reqData: any = null
): ReqReturn => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const execute = async () => {
      try {
        const res: any = await axios({
          method,
          url,
          data: reqData,
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzA0OGRkYTc1MzU1ZGYwZTU5ZWU1ZSIsImlhdCI6MTY0OTE2OTE3NSwiZXhwIjoyNTEzMDgyNzc1fQ.qdC9ScW-eM9d_h_L5L_1ESaAPrsjY-AIZ1CXvjNiWL0',
          },
        });
        setLoading(false);
        if (res.status >= 400) throw new Error(res.error);
        setData(res.data);
      } catch (e: any) {
        setError(e);
      }
    };

    execute();
  }, [method, url, reqData]);

  return { loading, error, data };
};

export default Request;
