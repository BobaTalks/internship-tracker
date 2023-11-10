import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';

// This is a test page - will be replaced by sign in / sign out
import SignOutButton from '../components/SignOutButton';
import AuthContext from '../contexts/AuthContext';
import { auth, provider } from '../utils/firebaseConfig';
import BasePage from './BasePage';

const TestPage = () => {
  const [userIn, setUserIn] = useContext(AuthContext);

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

  return (
    <BasePage>
      {userIn ? (
        <SignOutButton />
      ) : (
        <Button
          variant="rounded"
          color="thai"
          onClick={signInUser}
          sx={{ mt: '10rem', height: '3rem', width: '8rem' }}
        >
          Sign In
        </Button>
      )}
    </BasePage>
  );
};

export default TestPage;
