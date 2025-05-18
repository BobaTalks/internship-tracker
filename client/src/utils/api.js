// File to contain methods to return data from API calls
import axios from 'axios';

import { test_url } from './constants';
import {
  mockFilterData,
  mockInternshipData,
  mockSignedInUser,
  mockTrackerColumnData,
  mockTrackerData,
} from './mockData';
const url = process.env.BASE_URL || test_url;

/** EXAMPLE
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
 * Fetch all internships
 * @returns all internships
 */
export const getInternships = async () => {
  return mockInternshipData;
};

/**
 * Fetch filters, including the label, options, count, and checked status
 * @returns filter data
 */
export const getFilterData = async () => {
  return mockFilterData;
};

/**
 * Fetch an internship by id
 * @param internshipId internship id
 * @returns internship
 */
export const getInternshipById = async (internshipId) => {
  const internship = mockInternshipData.find((mockInternship) => {
    return mockInternship.id === internshipId;
  });
  if (internship) return internship;
  throw new Error(`No internship associated with id: ${internshipId}.`);
};

/**
 * Update label of a tracked internship
 * @param trackedInternshipId tracked internship id
 * @param newLabel the updated label of the tracked internship
 * @returns updated tracked internship
 */
export const updateTrackedInternshipLabel = async (
  trackedInternshipId,
  newLabel
) => {
  const internshipIndex = mockTrackerData.findIndex(
    (mockInternship) => mockInternship.id === trackedInternshipId
  );

  if (internshipIndex === -1) {
    throw new Error(
      `No tracked internship associated with id: ${trackedInternshipId}.`
    );
  }
  mockTrackerData[internshipIndex].label = newLabel;

  return mockTrackerData[internshipIndex];
};

/**
 * Update tracker ids order in a column
 * @param columnLabel unique label of column
 * @param newOrder updated array of tracker ids in the new order
 */
export const updateTrackerColumnOrder = async (columnLabel, newOrder) => {
  const column = mockTrackerColumnData.find((col) => col.label === columnLabel);
  if (!column) throw new Error(`No column with label: ${columnLabel}`);
  column.orderedTrackerIds = [...newOrder];
};

/**
 * Remove a tracked internship from the internship tracker
 * @param trackedInternshipId tracked internship id
 */
export const deleteTrackedInternshipById = async (trackedInternshipId) => {
  const index = mockTrackerData.findIndex(
    (trackedInternship) => trackedInternship.id === trackedInternshipId
  );
  if (index === -1) {
    throw new Error(
      `No tracked internship found with id: ${trackedInternshipId}`
    );
  }

  mockTrackerData.splice(index, 1);
};

/**
 * Fetch tracked internship by id
 * @param trackedInternshipId tracked internship id
 * @returns tracked internship
 */
export const getTrackerInfoById = async (trackedInternshipId) => {
  const trackedInternship = mockTrackerData.find(
    (trackedInternship) => trackedInternship.id === trackedInternshipId
  );
  if (trackedInternship) return trackedInternship;
  throw new Error(
    `No tracked internship associated with id: ${trackedInternshipId}.`
  );
};

/**
 * Fetch column names and items for the tracker
 * @returns tracker columns
 */
export const getTrackerColumnData = async () => {
  return mockTrackerColumnData;
};

/**
 * Create a note in a tracked internship
 * @param trackedInternshipId tracked internship id
 * @param message the message in the new note
 * @returns newly-created note
 */
export const addNote = async (trackedInternshipId, message) => {
  const newNote = {
    date: Date.now(),
    message: message,
  };
  const trackedInternship = mockTrackerData.find(
    (trackedInternship) => trackedInternship.id === trackedInternshipId
  );
  if (!trackedInternship)
    throw new Error(
      `No tracked internship associated with id: ${trackedInternshipId}.`
    );

  mockTrackerData.map((trackedInternship) =>
    trackedInternship.id === trackedInternshipId
      ? { ...trackedInternship, notes: [...trackedInternship.notes, newNote] }
      : trackedInternship
  );
  return newNote;
};

/**
 * Fetch user account information to be displayed on account settings page
 * @returns user
 */
export const getUserAccountInfo = async () => {
  return mockSignedInUser;
};

/**
 * Update user's first and last name in the database
 * @param firstName user's updated first name
 * @param fistName user's updated last name
 */
export const updateUserName = async (firstName, lastName) => {
  mockSignedInUser.firstName = firstName;
  mockSignedInUser.lastName = lastName;
};

/**
 * Update user's email in the database
 * @param email user's updated email
 */
export const updateUserEmail = async (email) => {
  mockSignedInUser.email = email;
};

/**
 * Update user's password in the database
 * @param password user's updated password
 */
export const updateUserPassword = async (password) => {
  mockSignedInUser.password = password;
};

/**
 * Closes the current user's account
 */
export const closeUserAccount = async () => {};
