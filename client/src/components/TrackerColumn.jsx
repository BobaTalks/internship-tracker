import { Box, Typography } from '@mui/material';
import React from 'react';

import StrictModeDroppable from './StrictModeDroppable';

const TrackerColumn = ({ category, cards }) => {
  return (
    <Box display="flex" flexDirection="column" flex={1} height="100%">
      <Typography variant="h6" mx={6} mb={2}>
        {category}
      </Typography>
      <StrictModeDroppable cards={cards} category={category} />
    </Box>
  );
};

export default TrackerColumn;
