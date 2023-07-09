// File to contain methods to return data from API calls
import axios from 'axios';

import { test_url } from './constants';
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

/**
 * Post to backend to save internship to account of logged in user
 *
 * @param {string} internshipId
 * @return {*}
 */
export const postSaveInternship = (internshipId) => {
  const url = '';
  const options = {};

  return [
    // Fill out mock data here
  ];

  // return axios.post(url, options);
};

/**
 * Fetch user internships to be organized by swimlane categories. Internship data for this
 * page will have to be determined
 *
 * @return {Promise<UserInternship[]>}
 */
export const getUserInternships = () => {
  const url = '';
  const options = {};

  return [
    // Fill out mock data here
  ];
  // return axios.get(url, options);
};
