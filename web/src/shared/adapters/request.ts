import axios from 'axios';
import { useEffect, useState } from 'react';

interface ReturnInterface {
  loading: boolean;
  error: any | null;
  data: any | null;
}

// This function servs as an adapter between axios methods and states
const Request = (
  method: 'get' | 'post' | 'put' | 'delete',
  url: string,
  reqData: any = null
): ReturnInterface => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const execute = async () => {
      try {
        const res: any = await axios({ method, url, data: reqData });
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
