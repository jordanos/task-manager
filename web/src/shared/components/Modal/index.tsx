import React from 'react';
import { connect } from 'react-redux';
import ModalPresentation from './presentation';

interface Props {
  toggleView: Function;
  modal: any;
}

const Modal: React.FC<Props> = ({ modal, toggleView, children }) => {
  return (
    <ModalPresentation modal={modal} toggleView={toggleView}>
      {children}
    </ModalPresentation>
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
