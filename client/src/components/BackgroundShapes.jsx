import { Box, useTheme } from '@mui/material';
import React from 'react';

import blobShape from '../assets/milk_tea_blob.svg';
import circleShape from '../assets/milk_tea_circle.svg';
import noodleShape from '../assets/milk_tea_noodle.svg';

const BackgroundShapes = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        sx={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          [theme.breakpoints.down('md')]: {
            width: '70%',
          },
        }}
        src={blobShape}
      />
      <Box
        component="img"
        sx={{
          position: 'absolute',
          bottom: '35%',
          left: '15%',
          [theme.breakpoints.down('md')]: {
            width: '50%',
          },
        }}
        src={circleShape}
      />
      <Box
        component="img"
        sx={{
          position: 'absolute',
          top: '0',
          right: '0',
          [theme.breakpoints.down('md')]: {
            width: '70%',
          },
        }}
        src={noodleShape}
      />
    </Box>
  );
};

export default BackgroundShapes;
