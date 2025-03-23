import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React from 'react';

import { addWhiteSpaceToString } from '../utils/helper';
import ErrorMessage from './ErrorMessage';

const ConfirmActionModal = ({
  isOpen,
  modalOnClose,
  title,
  textContent,
  primaryButtonOnClick,
  secondaryButtonOnClick,
  primaryButtonText,
  secondaryButtonText,
  isButtonStacked = false,
  errorMessage = null,
  width = null,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={modalOnClose}
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
          width: width ?? { xs: '95%', sm: '80%', md: '50%' },
        }}
      >
        <Stack direction="column" spacing={4}>
          <Typography variant="pageTitle">{title}</Typography>
          <Typography
            variant="body3"
            paddingBottom={4}
            sx={{ whiteSpace: 'pre-wrap' }}
          >
            {addWhiteSpaceToString(textContent)}
          </Typography>
          {errorMessage && <ErrorMessage message={errorMessage} />}
          <Stack
            direction={isButtonStacked ? 'column' : 'row'}
            spacing={4}
            justifyContent="space-between"
          >
            <Button
              variant="redOutlined"
              fullWidth
              onClick={secondaryButtonOnClick}
            >
              {primaryButtonText}
            </Button>
            <Button
              variant="redContained"
              fullWidth
              onClick={primaryButtonOnClick}
            >
              {secondaryButtonText}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ConfirmActionModal;
