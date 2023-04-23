import React from "react";
import { Box } from "@mui/material";

import BasePage from "./BasePage";
import SearchBar from "../components/SearchBar";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/28
 * This page will display all the search results. Part of this work we should include the
 * search and location inputs.
 */
const SearchResultsPage = () => {
  return (
    <BasePage>
      <Box mt={12} minWidth="100%">
        <SearchBar />
      </Box>
    </BasePage>
  );
};

export default SearchResultsPage;
