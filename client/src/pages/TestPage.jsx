import { Box, Stack } from '@mui/material';
import React, { useContext } from 'react';

import TrackerCard from '../components/TrackerCard';
import TrackerContext from '../contexts/TrackerContext';
import BasePage from './BasePage';

// This is a test page - you can test any components you wish here

const TestPage = () => {
  const [trackedInternships] = useContext(TrackerContext);
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
    </BasePage>
  );
};

export default TestPage;
