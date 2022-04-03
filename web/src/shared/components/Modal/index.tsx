import React from 'react';
import { zIndexValues } from 'shared/utils/Styles';
import StyledContainer from './Styles';

interface Props {
  toggleView: Function;
  model: any;
}

const Modal: React.FC<Props> = ({ model, toggleView, children }) => {
  return (
    <>
      {/* modal background */}
      <StyledContainer
        className="modal-bg"
        active={model.active}
        onClick={() => toggleView()}
      />
      {/* actual modal */}
      <div
        style={{
          position: 'relative',
          left: '30%',
          top: `20%`,
          width: '100px',
          display: model.active ? 'block' : 'none',
          zIndex: zIndexValues.modal,
        }}>
        {children}
      </div>
    </>
  );
};

export default Modal;
