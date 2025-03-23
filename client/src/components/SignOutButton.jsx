import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';
import { auth } from '../utils/firebaseConfig';
import ConfirmActionModal from './ConfirmActionModal';

const SignOutButton = () => {
  let navigate = useNavigate();
  const [, setAuthUser] = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setAuthUser(null);
        navigate('/signin');
      })
      .catch(() => {
        setErrorMessage(
          'There was a problem signing you out. Please try again later.'
        );
      });
  };
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <Button
        variant="rounded"
        color="thai"
        onClick={handleOpenModal}
        sx={{
          height: '3rem',
          borderRadius: '10rem',
          width: '8rem',
          fontWeight: 600,
        }}
      >
        Sign Out
      </Button>
      <ConfirmActionModal
        isOpen={openModal}
        modalOnClose={handleCloseModal}
        title="Sign Out"
        textContent="Are you sure you want to sign out?"
        primaryButtonOnClick={handleSignOut}
        secondaryButtonOnClick={handleCloseModal}
        primaryButtonText="Cancel"
        secondaryButtonText="Sign Out"
        errorMessage={errorMessage}
        width="26rem"
      />
    </>
  );
};

export default SignOutButton;
