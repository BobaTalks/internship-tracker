import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

import AuthContext from '../contexts/AuthContext';
import { isEmailValid } from '../utils/helper';

const SignInButton = ({ email, rememberMe, password, setShowErrorMessage }) => {
  let navigate = useNavigate();
  const [, setAuthUser] = useContext(AuthContext);

  const handleSignIn = () => {
    if (!isEmailValid) {
      setShowErrorMessage('Incorrect email or password. Please try again.');
      return;
    } else if (rememberMe) {
      secureLocalStorage.setItem('email', email);
      secureLocalStorage.setItem('password', password);
      secureLocalStorage.setItem('rememberMe', rememberMe);
    }
    setAuthUser(email);
    navigate('/search');
    // TODO: check that user is in database
  };
  return (
    <Button variant="rounded" color="primary" onClick={handleSignIn}>
      <Typography variant="errorMessage" p={1.5}>
        {'Sign In'}
      </Typography>
    </Button>
  );
};

export default SignInButton;
