import React from 'react';
import { StyledLoading } from './Styles';

const Loading: React.FC = ({ children }) => {
  return <StyledLoading>{children}</StyledLoading>;
};

export default Loading;
