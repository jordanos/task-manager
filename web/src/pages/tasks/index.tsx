/* eslint-disable react/react-in-jsx-scope */
import { lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import TaskIcon from 'shared/assets/icons/TaskIcon';
import EditTask from 'shared/components/Form/EditTask';
import Loader from 'shared/components/Loader';
import Modal from 'shared/components/Modal';
import { NavHeader } from 'shared/store/reducers/appReducer';

const CustomBoard = lazy(() => import('shared/components/Board'));

interface Props {
  setNavHeader: Function;
}

const Tasks: React.FC<Props> = ({ setNavHeader }) => {
  // sets nav to this page icon and title
  useEffect(() => {
    const payload = {
      title: 'Tasks',
      icon: TaskIcon,
    };
    setNavHeader(payload);
  }, []);

  return (
    <>
      <Modal>
        <EditTask />
      </Modal>

      <Loader component={<CustomBoard />} />
    </>
  );
};

// redux states
const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setNavHeader: (payload: NavHeader) =>
      dispatch({ type: 'SET_NAV_HEADER', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
