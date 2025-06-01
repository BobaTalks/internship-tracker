import { Box, Card, Skeleton, Typography } from '@mui/material';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

import { getInternshipById, getTrackerInfoById } from '../utils/api';
import InternshipCompanyInfo from './InternshipCompanyInfo';

const TrackerCard = ({ trackerId, provided, cardOnClick }) => {
  const dayjs = require('dayjs');
  const relativeTime = require('dayjs/plugin/relativeTime');
  dayjs.extend(relativeTime);

  const [trackerInfo, setTrackerInfo] = useState(null);
  const [internshipInfo, setInternshipInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const trackerData = await getTrackerInfoById(trackerId);
      setTrackerInfo(trackerData);

      if (trackerData) {
        const internshipData = await getInternshipById(
          trackerData.internshipId
        );
        setInternshipInfo(internshipData);
      }
    };
    fetchData();
  }, [trackerId]);

  return (
    <Card
      sx={{ p: '1rem', borderRadius: 3, width: '95%', mb: 5 }}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onClick={() => cardOnClick(trackerId)}
    >
      {internshipInfo ? (
        <>
          <InternshipCompanyInfo
            name={internshipInfo.companyName}
            title={internshipInfo.position}
            location={internshipInfo.location}
            isTracker={true}
          />
          <Box display="flex" flexDirection="column" paddingY={1.5}>
            {internshipInfo.datePosted && (
              <Typography variant="body3">
                Posted:{' '}
                {format(new Date(internshipInfo.datePosted), 'LLLL d, y')}
              </Typography>
            )}
            <Typography variant="body3">
              Applied:
              {trackerInfo.appliedDate
                ? format(new Date(trackerInfo.appliedDate), 'LLLL d, y')
                : 'No'}
            </Typography>
          </Box>
          <Typography variant="body2" textAlign="right">
            Added {dayjs(trackerInfo.dateAdded).fromNow()}
          </Typography>
        </>
      ) : (
        <>
          <Skeleton variant="rectangular" height="3rem" />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="80%" />
          </Box>
        </>
      )}
    </Card>
  );
};

export default TrackerCard;
