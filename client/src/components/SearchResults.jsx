import { Pagination, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import InternshipCard from './InternshipCard';

// TODO: look for the IDs of the user's saved internships in the database (currently is in the format of an array)
const MOCK_USER_SAVED_INTERNSHIPS = [2];

const SearchResults = ({ internships }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
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
      {internships.slice((page - 1) * 10, page * 10).map((info, i) => {
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
            key={(page - 1) * 10 + i}
          />
        );
      })}
      {internships.length <= 10 ? null : (
        <Pagination
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: '1rem',
          }}
          count={Math.ceil(internships.length / 10)}
          page={page}
          size="large"
          color="primary"
          onChange={handlePageChange}
        />
      )}
    </Stack>
  );
};

export default SearchResults;
