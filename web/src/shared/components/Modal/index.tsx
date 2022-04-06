import React from 'react';
import { connect } from 'react-redux';
import ModalUi from './ModalUi';

interface Props {
  toggleView: Function;
  modal: any;
}

const Modal: React.FC<Props> = ({ modal, toggleView, children }) => {
  return (
    <ModalUi modal={modal} toggleView={toggleView}>
      {children}
    </ModalUi>
  );
};

const mapStateToProps = (state: any) => {
  return { modal: state.app.modal };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleView: () => dispatch({ type: 'TOGGLE_MODAL_VIEW', payload: {} }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
