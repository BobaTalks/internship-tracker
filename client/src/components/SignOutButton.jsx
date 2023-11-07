import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';

import { auth } from '../utils/firebaseConfig';

const SignOutButton = () => {
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <Button
      variant="rounded"
      color="thai"
      onClick={signOutUser}
      sx={{ mt: '10rem', height: '3rem', width: '7rem', fontWeight: 600 }}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
