import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';

import InternshipCompanyInfo from './InternshipCompanyInfo';
import InternshipTag from './InternshipTag';
import JobDescription from './JobDescription';
import PostedOn from './PostedOn';
/**
 * https://github.com/BobaTalks/internship-tracker/issues/25
 * Component for the internship card. should take an Internship as props
 *
 */

const InternshipCard = ({
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
    <Card>
      <CardContent>
        <Grid container direction="column">
          <Grid
            direction="row"
            container
            item
            spacing={3}
            justifyContent="space-between"
          >
            <Grid item xs={7}>
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
              xs={5}
              alignItems="top"
              justifyContent="right"
            >
              {labels.map((label, i) => {
                return (
                  <InternshipTag
                    label={label.name}
                    icon={getLabelIcon(label.filter)}
                    key={i}
                  />
                );
              })}
            </Grid>
          </Grid>
          <Grid container item direction="row" mt={8}>
            <Grid item>
              <PostedOn date={datePosted} />
            </Grid>
          </Grid>
          <Grid container item direction="row" mt={8}>
            <Grid item>
              <JobDescription
                description={jobDesc}
                requirements={jobReqs}
                responsibilities={jobResp}
                externalLink={jobLink}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;
