import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

import IconTextField from '../components/IconTextField';
import SearchButton from '../components/SearchButton';
import TrackerColumn from '../components/TrackerColumn';
import BasePage from './BasePage';

const TrackerPage = () => {
  const [search, setSearch] = useState('');
  const handleClick = () => {};
  const CHANGE_PLACEHOLDER_WIDTH = 630;
  return (
    <BasePage>
      <Box
        display="flex"
        flexDirection="column"
        minWidth="100%"
        paddingTop="6rem"
      >
        <Typography variant="pageTitle">Internship Tracker</Typography>
        <Grid container spacing={2} paddingY={2}>
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
        <Box
          display="flex"
          height="calc(100vh - 16rem)"
          mt={6}
          sx={{ flexGrow: 1 }}
        >
          <TrackerColumn category="Saved" />
          <Divider orientation="vertical" />
          <TrackerColumn category="Applied" />
          <Divider orientation="vertical" />
          <TrackerColumn category="Responded" />
          <Divider orientation="vertical" />
          <TrackerColumn category="Archived" />
        </Box>
      </Box>
    </BasePage>
  );
};

export default TrackerPage;
