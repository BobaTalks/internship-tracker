import { Box, Divider, Drawer, Grid, Stack } from '@mui/material';
import React from 'react';

import { getInternshipFromTrackedId, getLabelIcon } from '../utils/helper';
import InternshipCompanyInfo from './InternshipCompanyInfo';
import InternshipTag from './InternshipTag';
import Loading from './Loading';

const TrackerDrawer = ({ internship, isDrawerOpen, setIsDrawerOpen }) => {
  const internshipInfo = internship
    ? getInternshipFromTrackedId(internship.id)
    : null;

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      anchor="right"
    >
      <Box sx={{ width: { xs: '100vw', sm: '40rem' } }}>
        {internshipInfo ? (
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
        ) : (
          <Loading sx={{ bgcolor: 'grey.main' }} />
        )}
      </Box>
    </Drawer>
  );
};

export default TrackerDrawer;
