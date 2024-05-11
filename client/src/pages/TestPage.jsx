import { Box } from '@mui/material';
import React from 'react';

import TrackerCard from '../components/TrackerCard';
import TrackerDrawer from '../components/TrackerDrawer';
import TrackerContext from '../contexts/TrackerContext';
import BasePage from './BasePage';

// This is a test page - you can test any components you wish here

const TestPage = () => {
  return (
    <BasePage>
      <Box mt="10rem">
        <Stack gap={3}>
          {trackedInternships.map((internship) => (
            <TrackerCard
              key={internship.id}
              id={internship.internshipId}
              dateAdded={internship.dateAdded}
              appliedDate={internship.appliedDate}
            />
          ))}
        </Stack>
      </Box>
      <TrackerDrawer internship={trackedInternships[3]} />
    </BasePage>
  );
};

export default TestPage;
