import React, { FormEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterIcon from 'shared/assets/icons/RegisterIcon';
import HOST from 'shared/constants/config';
import useError from 'shared/hooks/useError';
import useForm from 'shared/hooks/useForm';
import useMutate from 'shared/hooks/useMutate';
import { NavHeader } from 'shared/store/reducers/appReducer';
import { initUserInput, UserInput } from './Login';
import RegisterUi from './RegisterUi';

interface Props {
  setNavHeader: Function;
  setError: Function;
}

const Register: React.FC<Props> = (props) => {
  const { setNavHeader, setError } = props;
  useEffect(() => {
    const payload: NavHeader = {
      title: 'Register',
      icon: RegisterIcon,
    };
    setNavHeader(payload);
  }, []);

  const { inputError, inputData, updateError, updateData } =
    useForm<UserInput>(initUserInput);

  const { loading, error, data, mutate } = useMutate('post', `${HOST}/users`);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputData.name === '') {
      updateError('name', 'username is required');
      return;
    }
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
      navigate('/login');
    }
  }, [data]);

  return (
    <RegisterUi
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
