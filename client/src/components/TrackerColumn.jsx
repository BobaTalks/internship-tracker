import { Box, Typography } from '@mui/material';
import React from 'react';

const TrackerColumn = ({ category }) => {
  return (
    <Box display="flex" flexDirection="column" flex={1} mx={1} height="100%">
      <Typography variant="h6" mx={6} mb={2}>
        {category}
      </Typography>
      <Box
        overflow="hidden"
        mx={4}
        sx={{
          '&:hover': {
            overflowY: 'auto',
          },
          '&::-webkit-scrollbar': {
            width: '.2rem',
            background: '#FAF0E7',
          },
          '&::-webkit-scrollbar-track': {
            background: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#e6d8cc',
            borderRadius: '1rem',
          },
        }}
      ></Box>
    </Box>
  );
};

export default TrackerColumn;
