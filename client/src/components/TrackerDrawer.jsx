import { Box, Divider, Drawer, Grid, Stack } from '@mui/material';
import React from 'react';

import { getInternshipFromTrackedId, getLabelIcon } from '../utils/helper';
import InternshipCompanyInfo from './InternshipCompanyInfo';
import InternshipTag from './InternshipTag';

const TrackerDrawer = ({ internship }) => {
  const internshipInfo = getInternshipFromTrackedId(internship.id);

  return (
    <Drawer open={true} anchor="right">
      <Box sx={{ width: { xs: '100vw', sm: '40rem' } }}>
        <Stack>
          <Box height="3rem" />
          <Divider />
          <Box m={6}>
            <InternshipCompanyInfo
              name={internshipInfo.companyName}
              title={internshipInfo.position}
              location={internshipInfo.location}
              isTracker={false}
            />
            <Grid container direction="row" spacing={2} my={3}>
              {internshipInfo.labels.map((label, i) => {
                return (
                  <Grid item key={i}>
                    <InternshipTag
                      label={label.name}
                      icon={getLabelIcon(label.filter)}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default TrackerDrawer;
