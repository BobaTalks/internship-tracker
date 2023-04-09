import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";

import BasePage from "./BasePage";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/24
 * Will need to include the background styles for the HomePage per design spec
 */
const HomePage = (props) => {
  const theme = useTheme();
  return (
    <BasePage>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ height: "100vh" }}
        spacing={0}
      >
        <Grid item>
          <Typography
            variant="title"
            sx={{
              [theme.breakpoints.down("sm")]: {
                fontSize: "3rem",
                lineHeight: "3rem",
              },
            }}
          >
            Personalized internship tracking made easy.
          </Typography>
        </Grid>
        <Grid item container direction="row" marginTop={2}>
          <Grid item sm={7} xs={12}>
            <Typography
              variant="body1"
              sx={{
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1rem",
                },
              }}
            >
              Track when internships open for the company of your choice. Find
              internships for all the roles you want. Manually track/update your
              application statuses.
            </Typography>
          </Grid>
          <Grid item sm={5}></Grid>
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default HomePage;
