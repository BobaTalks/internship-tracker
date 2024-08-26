import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import React from 'react';

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
