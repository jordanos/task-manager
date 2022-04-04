import { sizes } from 'shared/utils/Styles';
import styled from 'styled-components';

interface Props {
  direction?: string;
  justify?: string;
  align?: string;
}

const StyledWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`;

export const StyledMainWrapper = styled(StyledWrapper)<Props>`
  width: 100%;
  height: 100%;
  padding-left: ${sizes.navHeight};
  padding-top: ${sizes.navHeight};
  overflow-x: hidden;
`;

StyledWrapper.defaultProps = {
  direction: 'column',
  justify: 'center',
  align: 'center',
};

export default StyledWrapper;
