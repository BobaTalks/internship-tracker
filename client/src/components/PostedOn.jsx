import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";

//assuming the format of the props.date is YYYY-MM-DD
const PostedOn = (props) => {
  const theme = useTheme();
  return <Typography variant="body1"> Posted on {props.date}</Typography>;
};

export default PostedOn;
