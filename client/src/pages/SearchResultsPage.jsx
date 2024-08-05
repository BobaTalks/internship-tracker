import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import FiltersBar from '../components/FiltersBar';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import FilterContext from '../contexts/FilterContext';
import { MOCK_FILTER_DATA, MOCK_INTERNSHIP_DATA } from '../utils/mockData';
import BasePage from './BasePage';
/**
 * https://github.com/BobaTalks/internship-tracker/issues/28
 * This page will display all the search results. Part of this work we should include the
 * search and location inputs.
 */

const SearchResultsPage = () => {
  const [filterData, setFilterData] = useState(MOCK_FILTER_DATA);

  return (
    <FilterContext.Provider value={[filterData, setFilterData]}>
      <BasePage>
        <Stack spacing={2} minWidth="100%">
          <Typography variant="pageTitle" marginTop="6rem">
            Find Internships
          </Typography>
          <SearchBar />
          <FiltersBar />
          <SearchResults internships={MOCK_INTERNSHIP_DATA} />
        </Stack>
      </BasePage>
    </FilterContext.Provider>
  );
};

export default SearchResultsPage;
