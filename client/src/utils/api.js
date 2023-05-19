// File to contain methods to return data from API calls
import axios from "axios";
import { BASE_URL } from "./constants";
/**
 * Get internships with given search options. Returns a promise that resolves to
 * Internship[]
 *
 * @param {*} searchOptions - shape to be determined by backend
 * @return {Promise<Internship[]>}
 */
export const getSearchInternships = async (searchOptions) => {
  const url = BASE_URL;

  if (!searchOptions) {
    const response = await axios
      .get(`${url}/jobs`, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    const response = await axios
      .get(`${url}/jobs`, {
        headers: { "Content-Type": "application/json" },
        params: {
          title: searchOptions["title"],
          location: searchOptions["location"],
        },
      })
      .then(() => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
  const url = "";
  const options = {};

  return [
    // Fill out mock data here
  ];
  // return axios.get(url, options);
};
