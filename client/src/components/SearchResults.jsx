import { Pagination, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import InternshipCard from './InternshipCard';

/**
 * https://github.com/BobaTalks/internship-tracker/issues/49
 * Import and render InternshipCard for all internships in Internship[]. Will need mock
 * data or API available
 */
const SearchResults = ({ internships }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack
      direction="column"
      width="100%"
      spacing={5}
      paddingTop={5}
      paddingBottom={15}
    >
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
      <Pagination
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: '1rem',
        }}
        count={10}
        page={page}
        size="large"
        color="primary"
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default SearchResults;
