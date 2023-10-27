import { Grid, Typography } from '@mui/material';
import React from 'react';

import AuthComponent from '../components/AuthComponent';
import BasePage from './BasePage';

const SignUpPage = () => {
  return (
    <BasePage>
      <AuthComponent isSignInPage={false} />
    </BasePage>
  );
};

export default SignUpPage;
