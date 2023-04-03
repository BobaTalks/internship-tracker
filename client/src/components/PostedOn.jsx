import React from "react";
import { Typography } from "@mui/material";
import { format } from "date-fns";

//assuming the format of the props.date is YYYY-MM-DD
const PostedOn = (props) => {
  const postedDate = format(new Date(props.date), "M/d/yy");
  return (
    <Typography sx={{ fontFamily: "Poppins" }}>
      Posted on {postedDate}
    </Typography>
  );
};

export default PostedOn;
