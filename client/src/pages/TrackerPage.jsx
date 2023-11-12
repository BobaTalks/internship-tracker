import { Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import IconTextField from '../components/IconTextField';
import SearchButton from '../components/SearchButton';
import BasePage from './BasePage';

const TrackerPage = () => {
  const [search, setSearch] = useState('');
  const handleClick = () => {};
  const CHANGE_PLACEHOLDER_WIDTH = 630;
  return (
    <BasePage>
      <Stack minWidth="100%" gap={2}>
        <Typography variant="pageTitle" marginTop="6rem">
          Internship Tracker
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs>
            <IconTextField
              icon={null}
              placeholder={
                window.innerWidth <= CHANGE_PLACEHOLDER_WIDTH
                  ? 'Search internships'
                  : 'Search in saved and tracked internships'
              }
              value={search}
              setValue={setSearch}
            />
          </Grid>
          <Grid item xs={3} sm={2} md={1}>
            <SearchButton handleClick={handleClick} />
          </Grid>
        </Grid>
      </Stack>
    </BasePage>
  );
};

export default TrackerPage;
