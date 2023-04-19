import React from "react";
import { Stack, Typography } from "@mui/material";

import BasePage from "./BasePage";
import PostedOn from "../components/PostedOn";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/28
 * This page will display all the search results. Part of this work we should include the
 * search and location inputs.
 */

const mockData = "02/14/2003";

const SearchResultsPage = () => {
  return (
    <BasePage>
      <Stack spacing={2}>
        <Typography variant="pageTitle" marginTop="6rem">
          Find Internships
        </Typography>
        <PostedOn date={mockData} />
      </Stack>
    </BasePage>
  );
};

export default SearchResultsPage;
