import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Expand } from "@mui/icons-material";

const ExpandLess = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(180deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    if (isReadMore) setIsReadMore(!isReadMore);
  };
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    if (!isReadMore) {
      setExpanded(!expanded);
      setIsReadMore(!isReadMore);
    }
  };
  return (
    <p className="text">
      <Typography>{isReadMore ? text.slice(0, 150) : text}</Typography>
      <Button onClick={toggleReadMore} className="read-or-hide">
        {"Read more"}
      </Button>
      <ExpandLess expand={expanded} onClick={handleExpandClick}>
        <ExpandMoreIcon />
      </ExpandLess>
    </p>
  );
};

const JobDescription = (props) => {
  return (
    <Grid container direction="column" spacing={0}>
      <Grid item>
        <Typography variant="h5">Job description</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          <ReadMore>{props.description}</ReadMore>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default JobDescription;
