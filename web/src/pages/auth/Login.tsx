import React, { FormEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginIcon from 'shared/assets/icons/LoginIcon';
import HOST from 'shared/constants/config';
import useError from 'shared/hooks/useError';
import useForm from 'shared/hooks/useForm';
import useMutate from 'shared/hooks/useMutate';
import { NavHeader } from 'shared/store/reducers/appReducer';
import LoginUi from './LoginUi';

export type UserInput = {
  name: string;
  email: string;
  password: string;
};

export const initUserInput: UserInput = {
  name: '',
  email: '',
  password: '',
};

interface Props {
  setNavHeader: Function;
  setError: Function;
  setUser: Function;
}

const Login: React.FC<Props> = (props) => {
  const { setNavHeader, setError, setUser } = props;
  useEffect(() => {
    const payload: NavHeader = {
      title: 'Login',
      icon: LoginIcon,
    };
    setNavHeader(payload);
  }, []);

  const { inputError, inputData, updateError, updateData } =
    useForm<UserInput>(initUserInput);

  const { loading, error, data, mutate } = useMutate(
    'post',
    `${HOST}/auth/login`
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputData.email === '') {
      updateError('email', 'Email is required');
      return;
    }
    if (inputData.password === '') {
      updateError('password', 'Password is required');
      return;
    }

    mutate(inputData);
  };

  useError(error, setError);

  const navigate = useNavigate();
  useEffect(() => {
    if (data) {
      console.log('data', data);
      setUser({ email: inputData.email, token: data.token });
      navigate('/dashboard');
    }
  }, [data]);

  return (
    <LoginUi
      error={inputError}
      data={inputData}
      updateData={updateData}
      loading={loading}
      handleSubmit={handleSubmit}
    />
  );
};

// redux states
const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setNavHeader: (payload: NavHeader) =>
      dispatch({ type: 'SET_NAV_HEADER', payload }),
    setError: (payload: any) => dispatch({ type: 'SET_ERROR', payload }),
    setUser: (payload: any) => dispatch({ type: 'SET_USER', payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
