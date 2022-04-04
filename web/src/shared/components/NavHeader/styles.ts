import { colors, sizes, zIndexValues } from 'shared/utils/Styles';
import styled from 'styled-components';

const StyledNav = styled.nav`
  color: ${colors.primary};
  background: ${colors.backgroundLightest};
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
  z-index: ${zIndexValues.navHeader};
`;

export default StyledNav;
