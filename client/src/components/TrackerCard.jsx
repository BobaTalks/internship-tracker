import { Box, Card, Typography } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';

import { MOCK_INTERNSHIP_DATA } from '../utils/mockData';
import InternshipCompanyInfo from './InternshipCompanyInfo';

const TrackerCard = ({ id, dateAdded, appliedDate }) => {
  const dayjs = require('dayjs');
  const relativeTime = require('dayjs/plugin/relativeTime');
  dayjs.extend(relativeTime);

  const internshipInfo = MOCK_INTERNSHIP_DATA.find((internship) => {
    return internship.id === id;
  });

  return (
    <Card sx={{ p: '1rem', borderRadius: 3, width: '18rem' }}>
      <InternshipCompanyInfo
        name={internshipInfo.companyName}
        title={internshipInfo.position}
        location={internshipInfo.location}
        isTracker={true}
      />
      <Box display="flex" flexDirection="column" paddingY={1.5}>
        {internshipInfo.datePosted && (
          <Typography variant="body3">
            Posted: {format(internshipInfo.datePosted, 'LLLL d, y')}
          </Typography>
        )}
        <Typography variant="body3">
          Applied: {appliedDate ? format(appliedDate, 'LLLL d, y') : 'No'}
        </Typography>
      </Box>
      <Typography variant="body2" textAlign="right">
        Added {dayjs(dateAdded).fromNow()}
      </Typography>
    </Card>
  );
};

export default TrackerCard;
