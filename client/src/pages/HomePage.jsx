import { Container, Grid, Typography } from "@mui/material";
import React from "react";

import BasePage from "./BasePage";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/24
 * Will need to include the background styles for the HomePage per design spec
 */
const HomePage = (props) => {
  return (
    <BasePage>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
        spacing={2}
        margin={3}
      >
        <Grid item>
          <Typography variant="title">
            Personalized internship tracking made easy.
          </Typography>
        </Grid>
        <Grid item container direction="row">
          <Grid item xs={7}>
            <Typography variant="body1">
              Track when internships open for the company of your choice. Find
              internships for all the roles you want. Manually track/update your
              application statuses.
            </Typography>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default HomePage;
