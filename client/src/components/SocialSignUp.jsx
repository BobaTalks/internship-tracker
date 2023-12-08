import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

import AuthContext from '../contexts/AuthContext';
import { auth, provider } from '../utils/firebaseConfig';

const SocialSignUp = ({ setShowErrorMessage }) => {
  let navigate = useNavigate();
  const [, setAuthUser] = useContext(AuthContext);

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
    <>
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
    </>
  );
};

export default SocialSignUp;
