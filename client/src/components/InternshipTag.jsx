import { Box, Typography } from '@mui/material';
import React from 'react';

const InternshipTag = (props) => {
  const icon = props.icon;

  return (
    <Box
      display="flex"
      maxWidth={false}
      sx={{
        borderRadius: '0.5rem',
        padding: '0.5rem 1rem',
        bgcolor: 'secondary.light',
        border: 1,
        borderColor: 'text.main',
        maxWidth: 'fit-content',
        height: 'fit-content',
        textTransform: 'uppercase',
      }}
    >
      {icon}
      <Box sx={{ padding: '0rem 0.25rem' }}>
        <Typography variant="body3">{props.label}</Typography>
      </Box>
    </Box>
  );
};

export default InternshipTag;
