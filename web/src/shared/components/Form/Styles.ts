import { colors, font } from 'shared/utils/Styles';
import styled from 'styled-components';

interface InputInterface {
  width?: string;
  height?: string;
}

const StyledForm = styled.form`
  & > .form-row {
    margin-bottom: 20px;
  }
`;

export const StyledInput = styled.input<InputInterface>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: white;
  border: 1px solid #c1ccdd;
  border-radius: 5px;
  padding: 1em 0.5em;
`;

export const StyledArea = styled.textarea<InputInterface>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: white;
  border: 1px solid #c1ccdd;
  border-radius: 2px;
  font-size: 0.75rem;
`;

export const StyledButton = styled.button`
  width: 105px;
  height: 28px;
  background: ${colors.backgroundDark};
  color: ${colors.backgroundLightest};
  ${font.bold}
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 2px;
`;

StyledInput.defaultProps = {
  width: '300px',
  height: '32px',
};

StyledArea.defaultProps = {
  width: '300px',
  height: '80px',
};

export default StyledForm;
