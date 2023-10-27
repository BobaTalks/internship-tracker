import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

import AuthContext from '../contexts/AuthContext';
import { auth, provider } from '../utils/firebaseConfig';
import ErrorMessage from './ErrorMessage';

const AuthComponent = ({ isSignInPage }) => {
  let navigate = useNavigate();

  const [, setAuthUser] = useContext(AuthContext);
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
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(() => {
    return secureLocalStorage.getItem('rememberMe') && isSignInPage
      ? secureLocalStorage.getItem('rememberMe')
      : false;
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState('');
  const MIN_PASSWORD_LENGTH = 6;

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setShowErrorMessage('');
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    setShowErrorMessage('');
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setShowErrorMessage('');
  };
  const handleCheckbox = (event) => {
    setRememberMe(event.target.checked);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSignIn = () => {
    const validEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validEmail.test(email) || password.length < MIN_PASSWORD_LENGTH) {
      setShowErrorMessage(
        'Incorrect email or password. All passwords must be at least 6 characters.'
      );
    } else if (rememberMe) {
      secureLocalStorage.setItem('email', email);
      secureLocalStorage.setItem('password', password);
      secureLocalStorage.setItem('rememberMe', rememberMe);
    }
  };
  const googleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setAuthUser(result.user.email);
        // TODO: add code to store or check user in database
        secureLocalStorage.setItem('email', result.user.email);
        navigate('/search');
      })
      .catch(() => {
        setShowErrorMessage(
          'Something went wrong with Google sign up. Please try again.'
        );
      });
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
            {isSignInPage ? null : (
              <Stack direction="row" spacing={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </Stack>
            )}
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={handleEmail}
            />
            <Box margin={0}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={handlePassword}
                  value={password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
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
                <FormControl fullWidth variant="outlined" sx={{ mt: 4, mb: 2 }}>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Confirm Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    onChange={handleConfirmPassword}
                    value={confirmPassword}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                  />
                </FormControl>
              )}
              {showErrorMessage ? (
                <ErrorMessage message={showErrorMessage} />
              ) : null}
            </Box>
            <Button variant="rounded" color="primary" onClick={handleSignIn}>
              <Typography variant="errorMessage" p={1.5}>
                Sign In
              </Typography>
            </Button>
            <Divider sx={{ fontSize: '0.9rem', color: 'text.main' }}>
              or continue with
            </Divider>
            <Button
              variant="social"
              startIcon={
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  marginRight="0.3rem"
                  padding={0}
                >
                  <FcGoogle size={25} />
                </Box>
              }
              onClick={googleSignUp}
            >
              Sign up with Google
            </Button>
            <Button
              variant="social"
              startIcon={
                <LinkedInIcon
                  sx={{
                    transform: 'scale(1.2)',
                    color: 'icons.linkedin',
                    marginRight: '0.3rem',
                  }}
                />
              }
            >
              Sign up with LinkedIn
            </Button>
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
