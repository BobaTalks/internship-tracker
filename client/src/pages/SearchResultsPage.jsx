import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import FiltersBar from '../components/FiltersBar';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import FilterContext from '../contexts/FilterContext';
import { getFilterData, getInternships } from '../utils/api';
import { filterInternships } from '../utils/filter';
import BasePage from './BasePage';
/**
 * https://github.com/BobaTalks/internship-tracker/issues/28
 * This page will display all the search results. Part of this work we should include the
 * search and location inputs.
 */

const SearchResultsPage = () => {
  const [filterData, setFilterData] = useState({});
  const [displayedInternships, setDisplayedInternships] = useState([]);

  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        const filterData = await getFilterData();
        setFilterData(filterData);
      } catch (error) {
        console.error('Could not fetch filter data: ', error);
      }
    };

    fetchFilterData();
  }, []);

  // Handles filtering whenever applied filters are changed
  useEffect(() => {
    const fetchDisplayedInternships = async () => {
      try {
        const internships = await getInternships();
        setDisplayedInternships(
          internships.filter(filterInternships(filterData))
        );
      } catch (error) {
        console.error('Could not fetch internships: ', error);
      }
    };

    fetchDisplayedInternships();
  }, [filterData]);

  return (
    <FilterContext.Provider value={[filterData, setFilterData]}>
      <BasePage>
        <Stack spacing={2} minWidth="100%">
          <Typography variant="pageTitle">Find Internships</Typography>
          <SearchBar />
          <FiltersBar displayedInternships={displayedInternships} />
          <SearchResults internships={displayedInternships} />
        </Stack>
      </BasePage>
    </FilterContext.Provider>
  );
};

export default SearchResultsPage;
