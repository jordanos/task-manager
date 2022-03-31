import { color, sizes, zIndexValues } from 'shared/utils/Styles';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  width: ${sizes.navHeight};
  color: ${color.primary};
  position: fixed;
  left: 0;
  top: 0;
  right: o;
  bottom: 0;
  background: ${color.backgroundLightest};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  z-index: ${zIndexValues.navLeft};
`;

export const StyledItem = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background: ${color.backgroundLight};
  }
`;

export default StyledSidebar;
