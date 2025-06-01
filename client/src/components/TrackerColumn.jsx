import { Box, Typography } from '@mui/material';
import React from 'react';

import StrictModeDroppable from './StrictModeDroppable';

const TrackerColumn = ({ category, trackerIds, cardOnClick }) => {
  return (
    <Box display="flex" flexDirection="column" flex={1} height="100%">
      <Typography variant="h6" mx={6} mb={2}>
        {category}
      </Typography>
      <StrictModeDroppable
        trackerIds={trackerIds}
        category={category}
        cardOnClick={cardOnClick}
      />
    </Box>
  );
};

export default TrackerColumn;
