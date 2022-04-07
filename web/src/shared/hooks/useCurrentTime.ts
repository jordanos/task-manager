import { useEffect, useState } from 'react';
import getTime, { Time } from 'shared/helpers/clock';

const useCurrentTime = (): Time => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 1000);

    // cleanup
    return () => clearInterval(interval);
  }, []);

  return time;
};

export default useCurrentTime;
