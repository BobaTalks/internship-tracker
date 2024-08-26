import { Box, Card, Typography } from '@mui/material';
import { format } from 'date-fns';
import React, { useMemo } from 'react';

import { getInternshipFromTrackedId } from '../utils/helper';
import InternshipCompanyInfo from './InternshipCompanyInfo';

const TrackerCard = ({ id, dateAdded, appliedDate, provided, cardOnClick }) => {
  const dayjs = require('dayjs');
  const relativeTime = require('dayjs/plugin/relativeTime');
  dayjs.extend(relativeTime);

  const internshipInfo = useMemo(() => getInternshipFromTrackedId(id), [id]);

  return (
    <Card
      sx={{ p: '1rem', borderRadius: 3, width: '95%', mb: 5 }}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onClick={() => cardOnClick(internshipInfo)}
    >
      <InternshipCompanyInfo
        name={internshipInfo.companyName}
        title={internshipInfo.position}
        location={internshipInfo.location}
        isTracker={true}
      />
      <Box display="flex" flexDirection="column" paddingY={1.5}>
        {internshipInfo.datePosted && (
          <Typography variant="body3">
            Posted: {format(new Date(internshipInfo.datePosted), 'LLLL d, y')}
          </Typography>
        )}
        <Typography variant="body3">
          Applied:
          {appliedDate ? format(new Date(appliedDate), 'LLLL d, y') : 'No'}
        </Typography>
      </Box>
      <Typography variant="body2" textAlign="right">
        Added {dayjs(dateAdded).fromNow()}
      </Typography>
    </Card>
  );
};

export default TrackerCard;
