import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../contexts/AuthContext';
import { auth } from '../utils/firebaseConfig';

const SignOutButton = () => {
  let navigate = useNavigate();
  const [, setAuthUser] = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setAuthUser(null);
        navigate('/signin');
      })
      .catch((error) => {
        // An error happened.
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
          mt: '10rem',
          height: '3rem',
          borderRadius: '10rem',
          width: '8rem',
          fontWeight: 600,
        }}
      >
        Sign Out
      </Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="Sign Out Modal"
        aria-describedby="Click the Sign Out button in the modal to sign out!"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'grey.main',
            borderRadius: '2rem',
            boxShadow: 10,
            p: '1.6rem 2.2rem',
          }}
        >
          <Stack direction="column" spacing={4}>
            <Typography variant="pageTitle">Sign Out</Typography>
            <Typography variant="body3" paddingBottom={4}>
              Are you sure you want to sign out?
            </Typography>
            <Stack direction="row" spacing={4}>
              <Button variant="redOutlined" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="redContained" onClick={handleSignOut}>
                Sign Out
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default SignOutButton;
