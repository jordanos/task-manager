import React, { MouseEventHandler } from 'react';
import StyledButton from './Styles';

interface Props {
  bg?: string;
  color?: string;
  radius?: string;
  onClick?: MouseEventHandler;
  padding?: string;
  style?: any;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({
  bg,
  color,
  radius,
  onClick,
  style,
  type,
  padding,
  children,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      bg={bg}
      color={color}
      radius={radius}
      padding={padding}
      style={style}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  bg: 'white',
  color: 'black',
  radius: '5px',
  onClick: () => {},
  style: {},
  padding: '0.5em 2em',
  type: 'button',
};

export default Button;
