import React, { useState } from "react";
import { Grid, Typography, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Link as RouterLink } from "react-router-dom";

const JobDescription = (props) => {
  const [readMore, setReadMore] = useState(false);
  const toggle = () => {
    setReadMore(!readMore);
  };
  const centered = {
    display: "flex",
    justifyContent: "center",
    height: "3vh",
  };
  const FullDescription = () => (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <Typography>{props.description}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" marginBottom={3}>
          Requirements
        </Typography>
        <Typography style={{ whiteSpace: "pre-line" }}>
          {props.requirements}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h5" marginBottom={3}>
          Responsibilities
        </Typography>
        <Typography style={{ whiteSpace: "pre-line" }}>
          {props.responsibilities}
        </Typography>
      </Grid>
      <Grid item sx={centered}>
        <IconButton display="flex" onClick={toggle}>
          <KeyboardArrowUpOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item sx={centered}>
        <Link
          component={RouterLink}
          to={props.externalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography size="small" fontWeight={"bold"}>
            Continue to external listing to read full description
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
  return (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <Typography variant="h5" marginBottom={3}>
          Job description
        </Typography>
        {readMore ? (
          <FullDescription />
        ) : (
          <Typography>{props.description.slice(0, 450) + "..."}</Typography>
        )}
        {!readMore && (
          <Link component="button" onClick={toggle}>
            <Typography fontWeight={"bold"} size="small" marginTop={3}>
              Read More
            </Typography>
          </Link>
        )}
      </Grid>
    </Grid>
  );
};

export default JobDescription;
