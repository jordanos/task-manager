import { colors, font, sizes } from 'shared/utils/Styles';
import styled from 'styled-components';

interface PropsDay {
  active: boolean;
}

export const StyledCalendar = styled.div`
  width: 798px;
  background: rgba(251, 134, 148, 0.2);
  border-radius: 10px;
`;

export const StyledDay = styled.div<PropsDay>`
  width: ${sizes.calendarDayWidth};
  height: 90px;
  color: ${(props) => (props.active ? 'black' : colors.textLight)};
  background: ${colors.backgroundLightest};
  border: 1px solid #e7e8ea;
  box-sizing: border-box;
  transition: all ease-in 200ms;
  &:hover {
    background: ${colors.backgroundLight};
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: ${colors.primary};
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
