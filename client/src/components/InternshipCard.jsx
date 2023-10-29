import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';

import InternshipCompanyInfo from './InternshipCompanyInfo';
import InternshipTag from './InternshipTag';
import JobDescription from './JobDescription';
import PostedOn from './PostedOn';
import SaveAndApply from './SaveAndApply';

const InternshipCard = ({
  isSaved,
  companyName,
  position,
  location,
  labels,
  datePosted,
  jobDesc,
  jobReqs,
  jobResp,
  jobLink,
}) => {
  const getLabelIcon = (filter) => {
    // returns the correct icon depending on the corresponding filter the tag is showing
    return <AccessTimeIcon />;
  };
  return (
    <Card sx={{ py: { xs: 1.5, md: 3 }, px: { xs: 2.5, md: 5 } }}>
      <CardContent>
        <Grid container direction="column">
          <Grid
            direction="row"
            container
            item
            spacing={3}
            justifyContent="space-between"
          >
            <Grid item sm={7} xs={12}>
              <InternshipCompanyInfo
                name={companyName}
                title={position}
                location={location}
              />
            </Grid>
            <Grid
              container
              spacing={2}
              item
              direction="row"
              sm={5}
              xs={12}
              alignItems="top"
              justifyContent={{ xs: 'left', sm: 'right' }}
            >
              {labels.map((label, i) => {
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
          </Grid>
          <Grid
            item
            mt={8}
            direction="row"
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <PostedOn date={datePosted} />
            <SaveAndApply link={jobLink} isSaved={isSaved} />
          </Grid>
          <Grid item mt={4}>
            <JobDescription
              description={jobDesc}
              requirements={jobReqs}
              responsibilities={jobResp}
              externalLink={jobLink}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;
