import { Box, Typography } from '@mui/material';
import React from 'react';

const ErrorMessage = ({ message, sx }) => {
  return (
    <Box
      alignItems="center"
      bgcolor="error.light"
      padding="1rem 1.5rem"
      borderRadius="5px"
      mt=".5rem"
      sx={sx}
    >
      <Typography variant="body2" fontWeight="600" color="error.main">
        {message}
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
