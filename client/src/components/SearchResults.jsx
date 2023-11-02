import { Stack, Typography } from '@mui/material';
import React from 'react';

import InternshipCard from './InternshipCard';

// TODO: look for the IDs of the user's saved internships in the database (currently is in the format of an array)
const MOCK_USER_SAVED_INTERNSHIPS = [2];

const SearchResults = ({ internships }) => {
  return (
    <Stack direction="column" spacing={5} paddingTop={5} paddingBottom={15}>
      <Typography variant="errorMessage">
        {internships.length} results
      </Typography>
      {internships.map((info, i) => {
        return (
          <InternshipCard
            isSaved={MOCK_USER_SAVED_INTERNSHIPS.includes(info.id)}
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
