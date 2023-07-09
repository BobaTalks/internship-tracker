import { Box, Link, Stack, Typography } from '@mui/material';
import React from 'react';

import BackgroundShapes from '../components/BackgroundShapes';
import BasePage from './BasePage';

const ErrorPage = () => {
  return (
    <BasePage>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Stack
          sx={{
            zIndex: 1,
            width: { xs: '100%', sm: '80%', md: '60%', lg: '50%', xl: '40%' },
          }}
        >
          <Typography
            sx={{ fontSize: { xs: '2.5rem', sm: '3rem' }, fontWeight: '800' }}
          >
            Page Not Found!
          </Typography>
          <Typography variant="errorMessage">Error code: 404</Typography>
          <Typography variant="errorMessage" my={3}>
            We’re sorry we couldn’t find the page you’re looking for, we’re
            working hard to fix it and make it available to you again.
          </Typography>
          <Typography variant="errorMessage">
            Feel free to continue browsing our website:
          </Typography>
          <Link href="/" variant="errorMessage">
            Go to Homepage
          </Link>
        </Stack>
        <BackgroundShapes />
      </Box>
    </BasePage>
  );
};

export default ErrorPage;
