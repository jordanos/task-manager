import React from 'react';
import Form, { SubmitButton, TextInput } from '../Form';
import StyledWrapper from '../Wrappers/Styles';
import StyledContainer from './Styles';

const Modal: React.FC = () => {
  const onClick = () => {
    console.log('pressed');
  };

  return (
    <StyledContainer onClick={onClick}>
      <StyledWrapper
        direction="row"
        justify="center"
        align="center"
        style={{ height: '100%' }}>
        <Form onSubmit={() => {}}>
          <StyledWrapper className="form-row" align="start">
            <TextInput type="text" error={null}>
              Title
            </TextInput>
          </StyledWrapper>
          <StyledWrapper align="start" className="form-row">
            <TextInput type="text" error={null}>
              Description
            </TextInput>
          </StyledWrapper>
          <StyledWrapper
            direction="row"
            justify="space-between"
            align="start"
            className="form-row">
            <TextInput width="150px" type="text" error={null}>
              Date
            </TextInput>
            <TextInput width="150px" type="text" error={null}>
              Hour
            </TextInput>
          </StyledWrapper>
          <StyledWrapper style={{ marginTop: '20px' }} align="flex-end">
            Status: Pending
          </StyledWrapper>
          <StyledWrapper
            style={{ marginTop: '20px' }}
            align="flex-end"
            className="form-row">
            <SubmitButton type="submit">Save</SubmitButton>
          </StyledWrapper>
        </Form>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Modal;
