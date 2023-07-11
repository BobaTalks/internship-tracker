import { Grid, Stack } from '@mui/material';
import React from 'react';

import BackgroundShapes from '../components/BackgroundShapes';
import HomePageContent from '../components/HomePageContent';
import SearchBar from '../components/SearchBar';
import BasePage from './BasePage';

/**
 * https://github.com/BobaTalks/internship-tracker/issues/24
 * Will need to include the background styles for the HomePage per design spec
 */
const HomePage = (props) => {
  return (
    <BasePage>
      <BackgroundShapes />
      <Stack spacing={5} sx={{ zIndex: 0 }} minWidth="100%">
        <HomePageContent />
        <Grid container justifyContent="center">
          <Grid item lg={8} md={9} xs={11}>
            <SearchBar isNarrow />
          </Grid>
        </Grid>
      </Stack>
    </BasePage>
  );
};

export default HomePage;
