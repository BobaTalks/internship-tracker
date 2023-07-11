import { Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import FiltersBar from '../components/FiltersBar';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import FilterContext from '../contexts/FilterContext';
import BasePage from './BasePage';
/**
 * https://github.com/BobaTalks/internship-tracker/issues/28
 * This page will display all the search results. Part of this work we should include the
 * search and location inputs.
 */

const MOCK_FILTER_DATA = {
  remote: {
    filterName: 'Remote',
    data: {
      onsite: {
        label: 'On-site',
        count: 4,
        checked: false,
      },
      remote: {
        label: 'Remote',
        count: 5,
        checked: false,
      },
      hybrid: {
        label: 'Hybrid',
        count: 12,
        checked: false,
      },
    },
  },
  company: {
    filterName: 'Company',
    data: {
      meta: {
        label: 'Meta',
        count: 4,
        checked: false,
      },
      amazon: {
        label: 'Amazon',
        count: 5,
        checked: false,
      },
      netflix: {
        label: 'Netflix',
        count: 15,
        checked: false,
      },
      google: {
        label: 'Google',
        count: 12,
        checked: false,
      },
      apple: {
        label: 'Apple',
        count: 2,
        checked: false,
      },
    },
  },
  education: {
    filterName: 'Education',
    data: {
      currentStudent: {
        label: 'Current student',
        count: 4,
        checked: false,
      },
      recentGraduate: {
        label: 'Recent graduate',
        count: 5,
        checked: false,
      },
    },
  },
  semester: {
    filterName: 'Semester',
    data: {
      spring2023: {
        label: 'Spring 2023',
        count: 4,
        checked: false,
      },
      summer2023: {
        label: 'Summer 2023',
        count: 5,
        checked: false,
      },
      fall2023: {
        label: 'Fall 2023',
        count: 10,
        checked: false,
      },
      spring2024: {
        label: 'Spring 2024',
        count: 23,
        checked: false,
      },
      summer2024: {
        label: 'Summer 2024',
        count: 8,
        checked: false,
      },
    },
  },
  datePosted: {
    filterName: 'Date posted',
    data: {
      anyTime: {
        label: 'Any time',
        count: 3,
        checked: false,
      },
      pastDay: {
        label: 'Past 24 hours',
        count: 2,
        checked: false,
      },
      pastWeek: {
        label: 'Past week',
        count: 21,
        checked: false,
      },
      pastMonth: {
        label: 'Past month',
        count: 12,
        checked: false,
      },
    },
  },
};

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
          <SearchResults />
        </Stack>
      </BasePage>
    </FilterContext.Provider>
  );
};

export default SearchResultsPage;
