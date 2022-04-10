import { mixin } from 'shared/utils/Styles';
import styled from 'styled-components';

interface Props {
  outline?: boolean;
  bg?: string;
  color?: string;
  radius?: string;
  padding?: string;
}

const StyledButton = styled.button<Props>`
  max-height: 2em;
  background: ${(props) => !props.outline && props.bg};
  color: ${(props) => props.color};
  border: solid 1px ${(props) => (props.outline ? props.color : 'transparent')};
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
