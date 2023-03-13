// File to contain methods to return data from API calls
import axios from "axios";

/**
 * Get internships with given search options. Returns a promise that resolves to
 * Internship[]
 *
 * @param {*} searchOptions - shape to be determined by backend
 * @return {Promise<Internship[]>}
 */
export const getSearchInternships = (searchOptions) => {
  const url = "";
  const options = {};

  return axios.get(url, options);
};

/**
 * Post to backend to save internship to account of logged in user
 *
 * @param {string} internshipId
 * @return {*}
 */
export const postSaveInternship = (internshipId) => {
  const url = "";
  const options = {};

  return axios.post(url, options);
};

/**
 * Fetch user internships to be organized by swimlane categories. Internship data for this
 * page will have to be determined
 *
 * @return {Promise<UserInternship[]>}
 */
export const getUserInternships = () => {
  const url = "";
  const options = {};

  return axios.get(url, options);
};
