import SuitcaseIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocationIcon from '@mui/icons-material/FmdGoodOutlined';
import { Grid, useTheme } from '@mui/material';
import React, { useState } from 'react';

import IconTextField from './IconTextField';
import SearchButton from './SearchButton';
/**
 * https://github.com/BobaTalks/internship-tracker/issues/23
 * Search bar component should include the "what" and "where" inputs with a button to submit
 * When completed, this should be imported into appropriate pages.
 */
const SearchBar = ({ isNarrow }) => {
  const theme = useTheme();
  const [internship, setInternship] = useState('');
  const [location, setLocation] = useState('');

  const handleClick = () => {};
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        md={isNarrow ? 7 : 8}
        pr={2}
        sx={{
          [theme.breakpoints.down('md')]: {
            paddingBottom: '1rem',
          },
        }}
      >
        <IconTextField
          icon={<SuitcaseIcon htmlColor="black" />}
          placeholder="Search internship listings"
          value={internship}
          setValue={setInternship}
        />
      </Grid>
      <Grid item xs={9} md={isNarrow ? 4 : 3} pr={2}>
        <IconTextField
          icon={<LocationIcon htmlColor="black" />}
          placeholder="Location"
          value={location}
          setValue={setLocation}
        />
      </Grid>
      <Grid item xs={3} md={1}>
        <SearchButton handleClick={handleClick} />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
