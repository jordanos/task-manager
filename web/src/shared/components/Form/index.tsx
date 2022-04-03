import React, { FormEventHandler } from 'react';
import StyledForm from './Styles';

interface FormInterface {
  onSubmit: FormEventHandler;
  style?: any;
}

const Form: React.FC<FormInterface> = ({ style, onSubmit, children }) => {
  return (
    <StyledForm style={style} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};

Form.defaultProps = {
  style: {},
};

export default Form;
