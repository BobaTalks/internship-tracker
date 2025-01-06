// File to contain methods to return data from API calls
import axios from 'axios';

import { test_url } from './constants';
import { MOCK_INTERNSHIP_DATA, MOCK_TRACKER_DATA } from './mockData';
const url = process.env.BASE_URL || test_url;

/**
 * Get internships with given search options. Returns a promise that resolves to
 * Internship[]
 *
 * @param {*} searchOptions - shape to be determined by backend
 * @return {Promise<Internship[]>}
 */
export const getSearchInternships = async (searchOptions) => {
  const hasSearchOptions = Object.keys(searchOptions).length;
  const params = hasSearchOptions > 0 ? { ...searchOptions } : {};

  const response = await axios.get(`${url}/jobs`, {
    headers: { 'Content-Type': 'application/json' },
    params: params,
  });
  return response;
};

// TODO: replace with database query once backend is completed

export const getInternshipById = (id) =>
  MOCK_INTERNSHIP_DATA.find((mockInternship) => {
    return mockInternship.id === id;
  });

export const getTrackerInfoById = (id) =>
  MOCK_TRACKER_DATA.find((trackedInternship) => trackedInternship.id === id);

export const addNote = (trackerId, message) => {
  // TODO: add note with "message" as text to tracked internship with id "trackerId" (add date to note in backend)
};
