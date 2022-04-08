import React, { MouseEventHandler } from 'react';
import Spinner from '../Spinner';
import StyledButton from './Styles';

interface Props {
  outline?: boolean;
  bg?: string;
  color?: string;
  radius?: string;
  onClick?: MouseEventHandler;
  padding?: string;
  style?: any;
  type?: 'button' | 'submit' | 'reset';
  loading: boolean;
}

const Button: React.FC<Props> = ({
  outline,
  bg,
  color,
  radius,
  onClick,
  style,
  type,
  padding,
  loading,
  children,
}) => {
  return (
    <StyledButton
      outline={outline}
      disabled={loading}
      type={type}
      onClick={onClick}
      bg={loading ? 'transparent' : bg}
      color={color}
      radius={radius}
      padding={padding}
      style={style}>
      {loading ? <Spinner size={24} /> : children}
    </StyledButton>
  );
};

Button.defaultProps = {
  outline: false,
  bg: 'white',
  color: 'black',
  radius: '5px',
  onClick: () => {},
  style: {},
  padding: '0.5em 2em',
  type: 'button',
};

export default Button;
