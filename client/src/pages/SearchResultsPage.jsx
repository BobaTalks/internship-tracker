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

const MOCK_INTERNSHIP_DATA = [
  {
    id: 1,
    companyName: 'Netflix',
    position: 'Product Design Intern - Experience Design',
    location: 'Los Gatos, CA',
    datePosted: new Date('May 15, 2024'),
    labels: [
      {
        name: 'summer 24',
        filter: 'semester',
      },
    ],
    jobInfo: {
      jobDesc:
        'Lorem ipsum dolor sit amet consectetur. Nulla sit integer nec arcu tortor ac lectus morbi non. Quam aenean tincidunt blandit amet magna enim sed pharetra habitasse. At nec neque suspendisse feugiat eros. Ante a arcu donec sodales ut amet luctus mauris. Felis eu mauris fringilla mauris. Viverra ante iaculis gravida a amet cursus facilisis scelerisque. Leo sit nulla sit vel nibh amet justo aliquam. Risus ullamcorper vitae amet ornare adipiscing vulputate dapibus diam ultrices. Arcu malesuada dui integer non. Aliquet non tortor adipiscing laoreet leo ac pretium fusce nisi.',
      jobReqs:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.',
      jobResp:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut. ',
      jobLink: 'https://jobs.netflix.com/',
    },
  },
  {
    id: 2,
    companyName: 'Apple',
    position: 'Software Engineer',
    location: 'Cupertino, CA',
    datePosted: new Date('June 1, 2024'),
    labels: [
      {
        name: 'summer 24',
        filter: 'semester',
      },
      {
        name: 'hybrid',
        filter: 'remote',
      },
      {
        name: 'recent graduate',
        filter: 'education',
      },
    ],
    jobInfo: {
      jobDesc:
        'Lorem ipsum dolor sit amet consectetur. Nulla sit integer nec arcu tortor ac lectus morbi non. Quam aenean tincidunt blandit amet magna enim sed pharetra habitasse. At nec neque suspendisse feugiat eros. Ante a arcu donec sodales ut amet luctus mauris. Felis eu mauris fringilla mauris. Viverra ante iaculis gravida a amet cursus facilisis scelerisque. Leo sit nulla sit vel nibh amet justo aliquam. Risus ullamcorper vitae amet ornare adipiscing vulputate dapibus diam ultrices. Arcu malesuada dui integer non. Aliquet non tortor adipiscing laoreet leo ac pretium fusce nisi.',
      jobReqs:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.',
      jobResp:
        'Vitae consectetur egestas ullamcorper orci pulvinar mattis commodo et morbi.\n Varius mi massa mi sed cursus mattis. Viverra pharetra vel et neque non ut. ',
      jobLink: 'https://www.apple.com/careers/ca/',
    },
  },
];

const allNotChecked = (data) => {
  let isThereChecked = false;
  Object.entries(data).forEach(([key, value]) => {
    console.log(value);
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

    console.log(filterData);

    let newInternshipData = [...MOCK_INTERNSHIP_DATA];
    console.log('new internship data before: ');
    for (let i = 0; i < newInternshipData.length; i++) {
      console.log(newInternshipData[i]);
    }
    let internshipsRemoved = 0;
    MOCK_INTERNSHIP_DATA.forEach((internship, index) => {
      console.log('assessing internship ' + index);
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
            console.log('removing internship');
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
    console.log('new internship data after: ');
    setDisplayedInternships(newInternshipData);
    for (let i = 0; i < newInternshipData.length; i++) {
      console.log(newInternshipData[i]);
    }
  }, [filterData]);

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
