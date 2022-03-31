import React, { FormEventHandler } from 'react';
import { colors } from 'shared/utils/Styles';
import StyledWrapper from '../Wrappers/Styles';
import StyledForm, { StyledButton, StyledInput } from './Styles';

interface FormInterface {
  onSubmit: FormEventHandler;
}

interface InputInterface {
  type: string;
  error?: null | string;
  placeholer?: string;
  width?: string;
}

interface ButtonInterface {
  type: 'submit' | 'button' | 'reset' | undefined;
}

const Form: React.FC<FormInterface> = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export const TextInput: React.FC<InputInterface> = ({
  type,
  error,
  placeholer,
  width,
  children,
}) => {
  return (
    <StyledWrapper align="flex-start">
      <label style={{ color: `${colors.textLight}`, fontSize: '14px' }}>
        {children}
      </label>
      <StyledInput width={width} placeholder={placeholer} />
      {error && <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>}
    </StyledWrapper>
  );
};

export const SubmitButton: React.FC<ButtonInterface> = ({
  type = 'submit',
  children,
}) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

TextInput.defaultProps = {
  error: null,
  placeholer: 'Placeholder',
  width: '300px',
};

export default Form;
