import React from "react";
import { Grid, Typography } from "@mui/material";

const JobDescription = (props) => {
  return (
    <Grid container direction="column" spacing={0}>
      <Grid item>
        <Typography variant="h5">Job description</Typography>
      </Grid>
      <Grid item container direction="row" marginTop={2}>
        <Typography variant="body1"> {props.description}</Typography>
      </Grid>
    </Grid>
  );
};
export default JobDescription;
