import { font } from 'shared/utils/Styles';
import styled from 'styled-components';

interface Props {
  color?: string;
}

export const StyledHeader = styled.div<Props>`
  color: ${(props) => props.color};
  ${font.bold};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0;
`;

StyledHeader.defaultProps = {
  color: 'black',
};
