import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

import amazonLogo from '../assets/company_logos/amazon_logo.svg';
import appleLogo from '../assets/company_logos/apple_logo.svg';
import genericLogo from '../assets/company_logos/generic.svg';
import googleLogo from '../assets/company_logos/google_logo.svg';
import metaLogo from '../assets/company_logos/meta_logo.svg';
import microsoftLogo from '../assets/company_logos/microsoft_logo.svg';
import netflixLogo from '../assets/company_logos/netflix_logo.svg';

const InternshipCompanyInfo = (props) => {
  const getCompanyIcon = (company) => {
    let companyLowerCase = company.toLowerCase();
    switch (companyLowerCase) {
      case 'amazon':
        return amazonLogo;
      case 'apple':
        return appleLogo;
      case 'google':
        return googleLogo;
      case 'meta':
        return metaLogo;
      case 'microsoft':
        return microsoftLogo;
      case 'netflix':
        return netflixLogo;
      default:
        return genericLogo;
    }
  };

  return (
    <Box
      display="flex"
      maxWidth={false}
      sx={{
        maxWidth: 'fit-content',
      }}
    >
      {/* <Box
        component="img"
        src={getCompanyIcon(props.name)}
        sx={{
          width: '69px',
          height: '69px',
          marginTop: '0.25rem',
          borderRadius: '4px',
        }}
      ></Box> */}
      <Avatar
        src={getCompanyIcon(props.name)}
        variant="rounded"
        sx={{ width: '4.3rem', height: '4.3rem', marginTop: '0.25rem' }}
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
  );
};

export default InternshipCompanyInfo;
