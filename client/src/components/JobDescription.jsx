import React, { useState } from "react";
import { Grid, Typography, Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Link as RouterLink } from "react-router-dom";

const JobDescription = (props) => {
  const [isExpanded, setIsReadMore] = useState(false);
  const toggle = () => {
    setIsReadMore(!isExpanded);
  };
  const centered = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "5vh",
  };
  const ReadMore = ({ children }) => {
    return (
      <Grid container direction="column" spacing={1}>
        <Grid item marginBottom={2}>
          <Typography>{children.description}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Requirements</Typography>
        </Grid>
        <Grid item marginBottom={2}>
          <Typography style={{ whiteSpace: "pre-line" }}>
            {children.requirements}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Responsibilities</Typography>
        </Grid>
        <Grid item style={{ whiteSpace: "pre-line" }}>
          <Typography>{children.responsibilities}</Typography>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h5">Job description</Typography>
      </Grid>
      <Grid item>
        <Typography>
          {isExpanded ? (
            <ReadMore>{props}</ReadMore>
          ) : (
            props.description.slice(0, 410)
          )}
        </Typography>
      </Grid>
      <Grid item>
        {!isExpanded && (
          <Link component="button" size="large" onClick={toggle}>
            <Typography variant="MuiLink" fontWeight={"bold"}>
              Read More
            </Typography>
          </Link>
        )}
      </Grid>
      <Grid item>
        {isExpanded && (
          <div style={centered}>
            <IconButton onClick={toggle} variant={"MuiButton"}>
              <KeyboardArrowUpOutlinedIcon />
            </IconButton>
          </div>
        )}
      </Grid>
      <Grid item>
        {isExpanded && (
          <div style={centered}>
            <Link
              component={RouterLink}
              to={props.externalLink}
              target="_blank"
              rel="noreferrer"
            >
              <Typography variant="MuiLink" fontWeight={"bold"}>
                Continue to external listing to read full description
              </Typography>
            </Link>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default JobDescription;
