import React from 'react';
import { colors } from 'shared/utils/Styles';
import StyledWrapper from '../Wrappers/Styles';
import { StyledArea } from './Styles';

interface Props {
  name: string;

  error?: null | string;
  placeholder?: string;

  value?: string;
  onChange: Function;
}

const TextArea: React.FC<Props> = ({
  name,
  error,
  placeholder,
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
      <StyledArea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        rows={20}
      />
      {error && <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>}
    </StyledWrapper>
  );
};

TextArea.defaultProps = {
  error: null,
  placeholder: 'Placeholder',
  value: '',
};

export default TextArea;
