/* eslint-disable react/react-in-jsx-scope */
import { lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import EditTask from 'shared/components/Form/EditTask';
import Loader from 'shared/components/Loader';
import Modal from 'shared/components/Modal';
import { NavHeader } from 'shared/store/reducers/appReducer';
import { Task } from 'shared/store/reducers/taskReducer';

const CustomBoard = lazy(() => import('shared/components/Board'));

interface Props {
  tasks: Task[];
  modal: any;
  preEdit: Function;
  addTask: Function;
  editTask: Function;
  toggleView: Function;
  setNavHeader: Function;
  deleteTask: Function;
}

const Tasks: React.FC<Props> = ({
  tasks,
  modal,
  addTask,
  preEdit,
  editTask,
  toggleView,
  setNavHeader,
  deleteTask,
}) => {
  // sets nav to this page icon and title
  useEffect(() => {
    const payload = {
      title: 'Tasks',
      icon: (
        <svg
          width="20"
          height="27"
          viewBox="0 0 20 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.5 3.33333H13.3333C13.3333 1.49479 11.8385 0 10 0C8.16146 0 6.66667 1.49479 6.66667 3.33333H2.5C1.11979 3.33333 0 4.45312 0 5.83333V24.1667C0 25.5469 1.11979 26.6667 2.5 26.6667H17.5C18.8802 26.6667 20 25.5469 20 24.1667V5.83333C20 4.45312 18.8802 3.33333 17.5 3.33333ZM5 22.0833C4.30729 22.0833 3.75 21.526 3.75 20.8333C3.75 20.1406 4.30729 19.5833 5 19.5833C5.69271 19.5833 6.25 20.1406 6.25 20.8333C6.25 21.526 5.69271 22.0833 5 22.0833ZM5 17.0833C4.30729 17.0833 3.75 16.526 3.75 15.8333C3.75 15.1406 4.30729 14.5833 5 14.5833C5.69271 14.5833 6.25 15.1406 6.25 15.8333C6.25 16.526 5.69271 17.0833 5 17.0833ZM5 12.0833C4.30729 12.0833 3.75 11.526 3.75 10.8333C3.75 10.1406 4.30729 9.58333 5 9.58333C5.69271 9.58333 6.25 10.1406 6.25 10.8333C6.25 11.526 5.69271 12.0833 5 12.0833ZM10 2.08333C10.6927 2.08333 11.25 2.64062 11.25 3.33333C11.25 4.02604 10.6927 4.58333 10 4.58333C9.30729 4.58333 8.75 4.02604 8.75 3.33333C8.75 2.64062 9.30729 2.08333 10 2.08333ZM16.6667 21.25C16.6667 21.4792 16.4792 21.6667 16.25 21.6667H8.75C8.52083 21.6667 8.33333 21.4792 8.33333 21.25V20.4167C8.33333 20.1875 8.52083 20 8.75 20H16.25C16.4792 20 16.6667 20.1875 16.6667 20.4167V21.25ZM16.6667 16.25C16.6667 16.4792 16.4792 16.6667 16.25 16.6667H8.75C8.52083 16.6667 8.33333 16.4792 8.33333 16.25V15.4167C8.33333 15.1875 8.52083 15 8.75 15H16.25C16.4792 15 16.6667 15.1875 16.6667 15.4167V16.25ZM16.6667 11.25C16.6667 11.4792 16.4792 11.6667 16.25 11.6667H8.75C8.52083 11.6667 8.33333 11.4792 8.33333 11.25V10.4167C8.33333 10.1875 8.52083 10 8.75 10H16.25C16.4792 10 16.6667 10.1875 16.6667 10.4167V11.25Z"
            fill="currentColor"
          />
        </svg>
      ),
    };
    setNavHeader(payload);
  }, []);

  // handles when edited form is submited
  const handleEdit = (task: Task) => {
    editTask(task);
    toggleView();
  };

  return (
    <>
      <Modal model={modal} toggleView={toggleView}>
        <EditTask onSubmit={handleEdit} />
      </Modal>

      <Loader component={<CustomBoard />} />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return { tasks: state.task.tasks, modal: state.app.modal };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleView: () => dispatch({ type: 'TOGGLE_MODAL_VIEW', payload: {} }),
    addTask: (payload: Task) => dispatch({ type: 'ADD_TASK', payload }),
    editTask: (payload: any) => dispatch({ type: 'EDIT_TASK', payload }),
    preEdit: (payload: any) => dispatch({ type: 'PRE_EDIT', payload }),
    deleteTask: (payload: any) => dispatch({ type: 'DELETE_TASK', payload }),
    setNavHeader: (payload: NavHeader) =>
      dispatch({ type: 'SET_NAV_HEADER', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
