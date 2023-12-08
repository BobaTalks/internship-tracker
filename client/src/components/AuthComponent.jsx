import {
  Box,
  Card,
  Checkbox,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

import ErrorMessage from './ErrorMessage';
import HiddenTextComponent from './HiddenTextComponent';
import SignInButton from './SignInButton';
import SignUpButton from './SignUpButton';
import SocialSignUp from './SocialSignUp';

const AuthComponent = ({ isSignInPage }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(() => {
    return secureLocalStorage.getItem('email') && isSignInPage
      ? secureLocalStorage.getItem('email')
      : '';
  });
  const [password, setPassword] = useState(() => {
    return secureLocalStorage.getItem('password') && isSignInPage
      ? secureLocalStorage.getItem('password')
      : '';
  });
  const [rememberMe, setRememberMe] = useState(() => {
    return secureLocalStorage.getItem('rememberMe') && isSignInPage
      ? secureLocalStorage.getItem('rememberMe')
      : false;
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setShowErrorMessage('');
  };
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleCheckbox = (event) => {
    setRememberMe(event.target.checked);
  };

  return (
    <Grid
      container
      justifyContent="center"
      mt={10}
      alignItems="center"
      spacing={0}
    >
      <Grid item xs={12} sm={9} md={7} lg={5}>
        <Typography variant="pageTitle">
          {isSignInPage ? 'Sign In' : 'Sign Up'}
        </Typography>
        <Card sx={{ mt: 2 }}>
          <Stack direction="column" spacing={4}>
            {!isSignInPage && (
              <Stack direction="row" spacing={4}>
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={handleFirstName}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={handleLastName}
                />
              </Stack>
            )}
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={handleEmail}
            />
            <Box margin={0}>
              <HiddenTextComponent
                label="Password"
                hiddenPassword={password}
                setHiddenPassword={setPassword}
                setShowErrorMessage={setShowErrorMessage}
              />
              {isSignInPage ? (
                <Stack
                  mt={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Checkbox
                      checked={rememberMe}
                      onChange={handleCheckbox}
                      inputProps={{ 'aria-label': 'controlled' }}
                      size="small"
                      sx={{ paddingLeft: 0 }}
                    />
                    <Typography variant="body2">Remember Me</Typography>
                  </Stack>
                  <Link target="_blank" underline="none">
                    <Typography
                      variant="body2"
                      fontWeight="600"
                      color="secondary.dark"
                    >
                      Forgot Password?
                    </Typography>
                  </Link>
                </Stack>
              ) : (
                <Box mt={4}>
                  <HiddenTextComponent
                    label="Confirm Password"
                    hiddenPassword={confirmPassword}
                    setHiddenPassword={setConfirmPassword}
                    setShowErrorMessage={setShowErrorMessage}
                  />
                </Box>
              )}
              {showErrorMessage ? (
                <ErrorMessage message={showErrorMessage} />
              ) : null}
            </Box>
            {isSignInPage ? (
              <SignInButton
                email={email}
                rememberMe={rememberMe}
                password={password}
                setShowErrorMessage={setShowErrorMessage}
              />
            ) : (
              <SignUpButton
                firstName={firstName}
                lastName={lastName}
                email={email}
                password={password}
                rememberMe={rememberMe}
                confirmPassword={confirmPassword}
                setShowErrorMessage={setShowErrorMessage}
              />
            )}
            <Divider sx={{ fontSize: '0.9rem', color: 'text.main' }}>
              or continue with
            </Divider>
            <SocialSignUp setShowErrorMessage={setShowErrorMessage} />
            <Typography variant="body2" textAlign="center">
              {isSignInPage ? 'New to Bobatalks?' : 'Already have an account?'}
              <Link
                component={RouterLink}
                to={isSignInPage ? '/signup' : '/signin'}
                ml={1}
              >
                {isSignInPage ? 'Sign up here!' : 'Sign in here!'}
              </Link>
            </Typography>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AuthComponent;
