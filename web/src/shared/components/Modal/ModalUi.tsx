import React from 'react';
import { zIndexValues } from 'shared/utils/Styles';
import StyledModal from './Styles';

interface Props {
  toggleView: Function;
  modal: any;
}

const ModalUi: React.FC<Props> = ({ modal, toggleView, children }) => {
  return (
    <>
      {/* modal background */}
      <StyledModal
        className="modal-bg"
        active={modal.active}
        onClick={() => toggleView()}
      />
      {/* actual modal */}
      <div
        style={{
          position: 'relative',
          left: '30%',
          top: `20%`,
          width: '100px',
          display: modal.active ? 'block' : 'none',
          zIndex: zIndexValues.modal,
        }}>
        {children}
      </div>
    </>
  );
};

export default ModalUi;
