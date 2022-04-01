import { font } from 'shared/utils/Styles';
import styled from 'styled-components';

interface Props {
  color?: string;
  background?: string;
}

export const StyledHeader = styled.div<Props>`
  color: ${(props) => props.color};
  ${font.bold};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  background: ${(props) => props.background && props.background};
`;

StyledHeader.defaultProps = {
  color: 'black',
};
