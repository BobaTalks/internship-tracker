import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

const InternshipCompanyInfo = (props) => {
  return (
    <>
      <Box
        display="flex"
        maxWidth={false}
        sx={{
          maxWidth: 'fit-content',
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: '69px',
            height: '69px',
            marginTop: '0.25rem',
          }}
        />
        <Box sx={{ paddingLeft: '1rem', marginTop: '-0.25rem' }}>
          <Typography
            variant="h5"
            sx={{
              color: 'secondary.dark',
              fontWeight: '600',
              lineHeight: '2.25rem',
            }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1rem',
              lineHeight: '1.5rem',
              marginTop: '-0.25rem',
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1rem',
              lineHeight: '1.5rem',
            }}
          >
            {props.location}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default InternshipCompanyInfo;
