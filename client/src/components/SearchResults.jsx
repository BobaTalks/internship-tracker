import { Stack, Typography } from '@mui/material';
import React from 'react';

import InternshipCard from './InternshipCard';

/**
 * https://github.com/BobaTalks/internship-tracker/issues/49
 * Import and render InternshipCard for all internships in Internship[]. Will need mock
 * data or API available
 */
const SearchResults = ({ internships }) => {
  return (
    <Stack direction="column" spacing={5} paddingTop={5}>
      <Typography variant="errorMessage">
        {internships.length} results
      </Typography>
      {internships.map((info, i) => {
        return (
          <InternshipCard
            companyName={info.companyName}
            position={info.position}
            location={info.location}
            labels={info.labels}
            datePosted={info.datePosted}
            jobDesc={info.jobInfo.jobDesc}
            jobReqs={info.jobInfo.jobReqs}
            jobResp={info.jobInfo.jobResp}
            jobLink={info.jobInfo.jobLink}
            key={i}
          />
        );
      })}
    </Stack>
  );
};

export default SearchResults;
