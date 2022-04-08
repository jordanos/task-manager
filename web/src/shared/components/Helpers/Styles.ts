import { colors, zIndexValues } from 'shared/utils/Styles';
import styled from 'styled-components';

interface TitleProps {
  decoration?: string;
  color?: string;
}

export const StyledTitle = styled.h4<TitleProps>`
  text-decoration: ${(props) => props.decoration};
  color: ${(props) => props.color};
  margin-bottom: 1em;
`;

export const StyledDesc = styled.div`
  max-width: 200px;

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledCard = styled.div`
  width: 240px;
  height: 100px;
  background: ${colors.backgroundLightest};
  color: black;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(251, 134, 148, 0.2);
  border-radius: 10px;
  padding: 15px;
`;

export const StyledLoading = styled.div`
  background: rgba(4, 18, 88, 0.1);
  position: fixed;
  z-index: ${zIndexValues.loading};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
