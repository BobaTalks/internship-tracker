import React from "react";
import { Stack, Typography } from "@mui/material";
import { format } from "date-fns";

import BasePage from "./BasePage";
import PostedOn from "../components/PostedOn";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/28
 * This page will display all the search results. Part of this work we should include the
 * search and location inputs.
 */

const mockData = "02/14/2003";

const SearchResultsPage = (props) => {
  const postedDate = format(new Date(mockData), "M/d/yy");
  return (
    <BasePage>
      <Stack spacing={2}>
        <Typography variant="pageTitle" marginTop="6rem">
          Find Internships
        </Typography>
        <PostedOn date={postedDate} />
      </Stack>
    </BasePage>
  );
};

export default SearchResultsPage;
