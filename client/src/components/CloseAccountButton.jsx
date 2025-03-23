import { Button } from '@mui/material';
import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';
import { closeUserAccount } from '../utils/api';
import { auth } from '../utils/firebaseConfig';
import ConfirmActionModal from './ConfirmActionModal';

const CloseAccountButton = () => {
  let navigate = useNavigate();
  const [, setAuthUser] = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCloseAccount = async () => {
    try {
      await closeUserAccount();
      signOut(auth).then(() => {
        setAuthUser(null);
        navigate('/signin');
      });
    } catch {
      setErrorMessage(
        'There was an error closing your account. Please try again later'
      );
    }
  };
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Button
        variant="transparent"
        onClick={handleOpenModal}
        sx={{
          height: '3rem',
          borderRadius: '10rem',
          textDecoration: 'underline',
          textTransform: 'none',
          fontWeight: 600,
          color: 'error.main',
        }}
      >
        Close my account
      </Button>
      <ConfirmActionModal
        isOpen={openModal}
        modalOnClose={handleCloseModal}
        title="Close Account"
        textContent="Warning! You are about to delete your account. Your information will be erased and any saved applications or progress will be permanently deleted. If you wish to use this tracker again, you will need to create a new account. \n \nIf you wish to proceed, please continue below."
        primaryButtonOnClick={handleCloseAccount}
        secondaryButtonOnClick={handleCloseModal}
        primaryButtonText="Nevermind, leave my account open"
        secondaryButtonText="Close my account permanently"
        isButtonStacked
        errorMessage={errorMessage}
      />
    </>
  );
};

export default CloseAccountButton;
