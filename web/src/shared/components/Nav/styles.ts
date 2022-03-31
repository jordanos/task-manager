import { color, sizes } from 'shared/utils/Styles';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  color: ${color.primary};
  background: ${color.backgroundLightest};
  height: ${sizes.navHeight};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
