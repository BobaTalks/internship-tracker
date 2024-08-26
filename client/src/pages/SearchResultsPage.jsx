import { Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

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

const allNotChecked = (data) => {
  let isThereChecked = false;
  Object.entries(data).forEach(([key, value]) => {
    if (value.checked) {
      isThereChecked = true;
    }
  });
  return !isThereChecked;
};

const SearchResultsPage = () => {
  const [filterData, setFilterData] = useState(MOCK_FILTER_DATA);
  const [displayedInternships, setDisplayedInternships] =
    useState(MOCK_INTERNSHIP_DATA);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    let newInternshipData = [...MOCK_INTERNSHIP_DATA];
    let internshipsRemoved = 0;
    MOCK_INTERNSHIP_DATA.forEach((internship, index) => {
      for (const [key, value] of Object.entries(filterData)) {
        if (allNotChecked(value.data)) {
          continue;
        }
        if (key === 'remote') {
          if (
            !(
              (value.data.onsite.checked === true &&
                internship.labels.find((label) => {
                  return label.filter === 'remote' && label.name === 'onsite';
                })) ||
              (value.data.hybrid.checked === true &&
                internship.labels.find((label) => {
                  return label.filter === 'remote' && label.name === 'hybrid';
                })) ||
              (value.data.remote.checked === true &&
                internship.labels.find((label) => {
                  return label.filter === 'remote' && label.name === 'remote';
                }))
            )
          ) {
            newInternshipData.splice(index - internshipsRemoved, 1);
            internshipsRemoved++;
            break;
          }
        } else if (key === 'company') {
          if (
            value.data[internship.companyName.toLowerCase()].checked === false
          ) {
            newInternshipData.splice(index - internshipsRemoved, 1);
            internshipsRemoved++;
            break;
          }
        } else if (key === 'education') {
          if (
            !(
              (value.data.currentStudent.checked === true &&
                internship.labels.find((label) => {
                  return (
                    label.filter === 'education' &&
                    label.name === 'current student'
                  );
                })) ||
              (value.data.recentGraduate.checked === true &&
                internship.labels.find((label) => {
                  return (
                    label.filter === 'education' &&
                    label.name === 'recent graduate'
                  );
                }))
            )
          ) {
            newInternshipData.splice(index - internshipsRemoved, 1);
            internshipsRemoved++;
            break;
          }
        } else if (key === 'semester') {
          if (
            !(
              (value.data.spring2023.checked === true &&
                internship.labels.find((label) => {
                  return (
                    label.filter === 'semester' && label.name === 'spring 23'
                  );
                })) ||
              (value.data.summer2023.checked === true &&
                internship.labels.find((label) => {
                  return (
                    label.filter === 'semester' && label.name === 'summer 23'
                  );
                })) ||
              (value.data.fall2023.checked === true &&
                internship.labels.find((label) => {
                  return (
                    label.filter === 'semester' && label.name === 'fall 23'
                  );
                })) ||
              (value.data.spring2024.checked === true &&
                internship.labels.find((label) => {
                  return (
                    label.filter === 'semester' && label.name === 'spring 24'
                  );
                })) ||
              (value.data.summer2024.checked === true &&
                internship.labels.find((label) => {
                  return (
                    label.filter === 'semester' && label.name === 'summer 24'
                  );
                }))
            )
          ) {
            newInternshipData.splice(index - internshipsRemoved, 1);
            internshipsRemoved++;
            break;
          }
        } else if (key === 'datePosted') {
          if (value.data.anyTime.checked === true) {
            continue;
          }
          const date = internship.datePosted;
          const currDate = new Date();
          const diffTime = Math.abs(currDate - date);
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

          if (value.data.pastMonth.checked === true && diffDays > 31) {
            newInternshipData.splice(index - internshipsRemoved, 1);
            internshipsRemoved++;
            break;
          } else if (value.data.pastWeek.checked === true && diffDays > 7) {
            newInternshipData.splice(index - internshipsRemoved, 1);
            internshipsRemoved++;
            break;
          } else if (value.data.pastDay.checked === true && diffDays > 1) {
            newInternshipData.splice(index - internshipsRemoved, 1);
            internshipsRemoved++;
            break;
          }
        }
      }
    });
    setDisplayedInternships(newInternshipData);
  }, [filterData, initialRender]);

  return (
    <FilterContext.Provider value={[filterData, setFilterData]}>
      <BasePage>
        <Stack spacing={2} minWidth="100%">
          <Typography variant="pageTitle" marginTop="6rem">
            Find Internships
          </Typography>
          <SearchBar />
          <FiltersBar />
          <SearchResults internships={displayedInternships} />
        </Stack>
      </BasePage>
    </FilterContext.Provider>
  );
};

export default SearchResultsPage;
