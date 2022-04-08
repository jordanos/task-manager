import React from 'react';
import { colors } from 'shared/utils/Styles';
import StyledWrapper from '../Wrappers/Styles';
import { StyledInput } from './Styles';

interface InputInterface {
  name: string;
  type: string;
  error?: null | string;
  placeholer?: string;
  width?: string;
  value?: any;
  onChange: Function;
}

const TextInput: React.FC<InputInterface> = ({
  name,
  type,
  error,
  placeholer,
  width,
  value,
  onChange,
  children,
}) => {
  return (
    <StyledWrapper align="flex-start">
      <label
        htmlFor={name}
        style={{ color: `${colors.textLight}`, fontSize: '14px' }}>
        {children}
      </label>
      <StyledInput
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        width={width}
        placeholder={placeholer}
      />
      {error !== '' && (
        <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>
      )}
    </StyledWrapper>
  );
};

TextInput.defaultProps = {
  error: null,
  placeholer: 'Placeholder',
  width: '300px',
  value: '',
};

export default TextInput;
