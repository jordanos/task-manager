import { colors, font, mixin, sizes } from 'shared/utils/Styles';
import styled from 'styled-components';

export const StyledCard = styled.div`
  width: ${sizes.cardWidth};
  background: ${colors.backgroundLightest};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 10px 11px;
  padding-bottom: 0;
  margin-bottom: 20px;
  ${mixin.clickable}

  & > div {
    margin-bottom: 10px;
  }
`;

export const StyledTitle = styled.div`
  ${font.bold}
  white-space: normal;
`;

export const StyledDesc = styled.div`
  ${font.regular}
  white-space: normal;
`;
