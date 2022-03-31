import { color, font } from 'shared/utils/Styles';
import styled, { css } from 'styled-components';

interface Props {
  active: boolean;
  header?: string;
}

export const StyledCalendar = styled.div`
  width: 798px;
  background: rgba(251, 134, 148, 0.2);
  border-radius: 10px;
`;

export const StyledDay = styled.div<Props>`
  width: 114px;
  ${(props) =>
    props.header
      ? css`
          height: 20px;
          color: black;
          background: transparent;
        `
      : css`
          height: 90px;
          color: ${props.active ? 'black' : color.textLight};
          background: ${color.backgroundLightest};
          border: 1px solid #e7e8ea;
          box-sizing: border-box;
          transition: all ease-in 200ms;
          &:hover {
            background: ${color.backgroundLight};
          }
        `}
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: ${color.primary};
  ${font.bold};
  font-size: 34px;
`;

export const CalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  direction: row;
  align: flex-start;
  justify: flex-start;
`;

export default StyledCalendar;
