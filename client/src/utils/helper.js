import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import React from 'react';

const validEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const MIN_PASSWORD_LENGTH = 6;

export const isEmailValid = (email) => {
  return validEmail.test(email);
};

export const isPasswordValid = (password) => {
  return password.length >= MIN_PASSWORD_LENGTH;
};

export const addWhiteSpaceToString = (str) => {
  return str.replace(/\\n/g, '\n');
};

// returns the correct icon depending on the corresponding filter the tag is showing
export const getLabelIcon = (filter) => {
  switch (filter) {
    case 'semester':
      return <AccessTimeRoundedIcon />;
    case 'remote':
      return <WorkOutlineRoundedIcon />;
    case 'education':
      return <SchoolOutlinedIcon />;
    default:
      return <CheckCircleOutlineRoundedIcon />;
  }
};
