import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const Loading = ({ sx }) => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor="background.main"
      sx={sx}
    >
      <Typography variant="h5" color="tertiary.contrastText" mr={2}>
        Loading...
      </Typography>
      <CircularProgress sx={{ color: 'tertiary.contrastText' }} />
    </Box>
  );
};

export default Loading;
