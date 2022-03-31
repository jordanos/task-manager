import { zIndexValues } from 'shared/utils/Styles';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: ${zIndexValues.modal};
  background: rgba(4, 18, 88, 0.4);
`;

export default StyledContainer;
