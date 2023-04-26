import React from "react";
import { Grid, Stack } from "@mui/material";

import BasePage from "./BasePage";
import HomePageContent from "../components/HomePageContent";
import SearchBar from "../components/SearchBar";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/24
 * Will need to include the background styles for the HomePage per design spec
 */
const HomePage = (props) => {
  return (
    <BasePage>
      <Stack spacing={5}>
        <HomePageContent />
        <Grid container justifyContent="center">
          <Grid item lg={8} md={9} xs={11}>
            <SearchBar isNarrow />
          </Grid>
        </Grid>
      </Stack>
    </BasePage>
  );
};

export default HomePage;
