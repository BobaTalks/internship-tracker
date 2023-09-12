import { Grid, Typography } from '@mui/material';
import React from 'react';

import AuthComponent from '../components/AuthComponent';
import BasePage from './BasePage';

const SignInPage = () => {
  return (
    <BasePage>
      <Grid
        container
        justifyContent="center"
        mt={10}
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={12} sm={9} md={7} lg={5}>
          <Typography variant="pageTitle">Sign In</Typography>
          <AuthComponent />
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default SignInPage;
