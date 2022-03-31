import { colors, sizes, zIndexValues } from 'shared/utils/Styles';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  width: ${sizes.navHeight};
  color: ${colors.primary};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background: ${colors.backgroundLightest};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  z-index: ${zIndexValues.sidebar};
`;

export const StyledItem = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background: ${colors.backgroundLight};
  }
`;

export default StyledSidebar;
