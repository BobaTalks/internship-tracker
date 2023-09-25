import { Box, Typography } from '@mui/material';
import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <Box
      alignItems="center"
      bgcolor="error.light"
      padding="1rem 1.5rem"
      borderRadius="5px"
      mt=".5rem"
    >
      <Typography variant="body2" fontWeight="600" color="error.main">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
