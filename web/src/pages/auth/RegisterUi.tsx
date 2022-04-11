import React, { FormEventHandler } from 'react';
import { Link } from 'react-router-dom';
import Button from 'shared/components/Button';
import Form from 'shared/components/Form';
import TextInput from 'shared/components/Form/TextInput';
import { StyledMainWrapper } from 'shared/components/Wrappers/Styles';
import { colors } from 'shared/utils/Styles';
import { UserInput } from './Login';
import StyledAuth from './Styles';

interface Props {
  error: UserInput;
  data: UserInput;
  loading: boolean;
  updateData: Function;
  handleSubmit: FormEventHandler;
}

const RegisterUi: React.FC<Props> = (props) => {
  const { error, data, loading, updateData, handleSubmit } = props;

  return (
    <StyledMainWrapper align="center" justify="center">
      <StyledAuth>
        <Form
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onSubmit={handleSubmit}>
          <div className="form-row">
            <TextInput
              name="name"
              type="name"
              error={error.name}
              value={data.name}
              onChange={updateData}
              placeholder="abebe">
              Username
            </TextInput>
          </div>
          <div className="form-row">
            <TextInput
              name="email"
              type="email"
              error={error.email}
              value={data.email}
              onChange={updateData}
              placeholder="abebe@xyz.com">
              Email
            </TextInput>
          </div>
          <div className="form-row">
            <TextInput
              name="password"
              type="password"
              error={error.password}
              value={data.password}
              onChange={updateData}
              placeholder="123456">
              Password
            </TextInput>
          </div>
          <div
            style={{
              color: colors.textPrimary,
              fontWeight: 700,
              margin: '1em 0',
            }}
            className="form-row">
            <Button
              bg={colors.backgroundDark}
              color={colors.backgroundLightest}
              type="submit"
              loading={loading}>
              Register
            </Button>
          </div>
          <div
            style={{
              color: colors.textPrimary,
              fontWeight: 700,
              margin: '1em 0',
            }}
            className="form-row">
            <Link to="/login">Already have an acount? Login</Link>
          </div>
        </Form>
      </StyledAuth>
    </StyledMainWrapper>
  );
};

export default RegisterUi;
