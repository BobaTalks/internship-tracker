import { Button } from '@mui/material';
import { signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';

// This is a test page - will be replaced by sign in / sign out
import SignOutButton from '../components/SignOutButton';
import { auth, provider } from '../utils/firebaseConfig';
import BasePage from './BasePage';
const TestPage = () => {
  const [userIn, setUserIn] = useState(false);

  const signInUser = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        setUserIn(true);
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserIn(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <BasePage>
      {userIn ? (
        <Button
          variant="rounded"
          color="thai"
          onClick={signOutUser}
          sx={{ mt: '10rem', height: '5rem', width: '8rem' }}
        >
          Sign Out
        </Button>
      ) : (
        <SignOutButton />
      )}
    </BasePage>
  );
};

export default TestPage;
