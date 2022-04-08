import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from 'shared/components/Helpers/Loading';
import Spinner from 'shared/components/Spinner';
import HOST from 'shared/constants/config';
import useError from 'shared/hooks/useError';
import useQuery from 'shared/hooks/useQuery';
import { NtwState } from 'shared/store/reducers/appReducer';
import { Task } from 'shared/store/reducers/taskReducer';

interface Props {
  ntwState: NtwState;
  addMany: Function;
  setError: Function;
}

const Init: React.FC<Props> = (props) => {
  const { addMany, ntwState, setError } = props;

  const { loading, error, data } = useQuery('get', `${HOST}/tasks`);

  useEffect(() => {
    if (data) {
      const newTasks: Task[] = [];
      data.forEach((task: any) => {
        newTasks.push({
          ...task,
          date: new Date(task.date),
        });
      });
      addMany(newTasks);
    }
  }, [data]);

  useEffect(() => {
    if (ntwState.error) {
      toast(`${ntwState.error}`);
    }
  }, [ntwState.error]);

  useError(error, setError);

  return (
    <>
      {loading && (
        <Loading>
          <Spinner />
        </Loading>
      )}

      <ToastContainer position="bottom-left" />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { ntwState: state.app.ntwState };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addMany: (payload: Task[]) => dispatch({ type: 'ADD_MANY_TASKS', payload }),
    setError: (payload: any) => dispatch({ type: 'SET_ERROR', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Init);
