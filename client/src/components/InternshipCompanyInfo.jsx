import { Avatar, Box, Stack, Typography } from '@mui/material';
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
      <Avatar
        src={getCompanyIcon(props.name)}
        variant="rounded"
        sx={{
          width: props.isTracker ? '2.4rem' : '4rem',
          height: props.isTracker ? '2.4rem' : '4rem',
          marginTop: props.isTracker ? null : '0.25rem',
        }}
      />
      <Box
        sx={{
          paddingLeft: props.isTracker ? 0 : '1rem',
          marginTop: '-0.25rem',
        }}
      >
        <Stack
          sx={{
            paddingLeft: '1rem',
            marginTop: props.isTracker ? null : '-0.25rem',
          }}
        >
          <Typography
            variant={props.isTracker ? 'subtitle' : 'h5'}
            sx={{
              color: props.isTracker ? null : 'secondary.dark',
              fontWeight: '600',
              lineHeight: props.isTracker ? '1.5rem' : '2.25rem',
            }}
          >
            {props.name}
          </Typography>
          <Typography
            noWrap={props.isTracker}
            width={props.isTracker ? '12rem' : null}
            variant={props.isTracker ? 'body3' : 'body4'}
          >
            {props.title}
          </Typography>
          {!props.isTracker && (
            <Typography variant="body4">{props.location}</Typography>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default InternshipCompanyInfo;
