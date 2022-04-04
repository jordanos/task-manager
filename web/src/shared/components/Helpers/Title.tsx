import React from 'react';
import { colors } from 'shared/utils/Styles';
import { StyledTitle } from './Styles';

interface Props {
  style?: Object;
  decoration?: string;
  color?: string;
}

const Title: React.FC<Props> = ({ style, decoration, color, children }) => {
  return (
    <StyledTitle style={style} decoration={decoration} color={color}>
      {children}
    </StyledTitle>
  );
};

Title.defaultProps = {
  style: {},
  decoration: 'underline',
  color: colors.primary,
};

export default Title;
