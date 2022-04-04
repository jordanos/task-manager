import { mixin } from 'shared/utils/Styles';
import styled from 'styled-components';

interface Props {
  bg?: string;
  color?: string;
  radius?: string;
  padding?: string;
}

const StyledButton = styled.button<Props>`
  background: ${(props) => props.bg};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding};
  ${mixin.clickable}

  &:hover {
    background: ${(props) => mixin.lighten(props.bg, 0.1)};
  }

  &:active {
    background: ${(props) => mixin.darken(props.bg, 0.2)};
  }
`;

export default StyledButton;
