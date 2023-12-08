import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

import AuthContext from '../contexts/AuthContext';

const SignUpButton = ({
  firstName,
  lastName,
  email,
  password,
  rememberMe,
  confirmPassword,
  setShowErrorMessage,
}) => {
  let navigate = useNavigate();
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const MIN_PASSWORD_LENGTH = 6;
  const [, setAuthUser] = useContext(AuthContext);

  const handleSignUp = () => {
    if (!firstName || !lastName) {
      setShowErrorMessage(
        'Fields cannot be empty. Please fill out missing fields.'
      );
    } else if (!validEmail.test(email)) {
      setShowErrorMessage('Your email is invalid.');
    } else if (password.length < MIN_PASSWORD_LENGTH) {
      setShowErrorMessage('Your password must be at least 6 characters long');
    } else if (password !== confirmPassword) {
      setShowErrorMessage(
        'Your password and confirmation password must match.'
      );
    } else {
      secureLocalStorage.setItem('email', email);
      secureLocalStorage.setItem('password', password);
      secureLocalStorage.setItem('rememberMe', rememberMe);
      setAuthUser(email);
      navigate('/search');
    }
    // TODO: add user to database
  };
  return (
    <Button variant="rounded" color="primary" onClick={handleSignUp}>
      <Typography variant="errorMessage" p={1.5}>
        {'Sign In'}
      </Typography>
    </Button>
  );
};

export default SignUpButton;
