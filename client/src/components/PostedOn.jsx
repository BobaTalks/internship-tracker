import React from "react";
import { Typography } from "@mui/material";
import { format } from "date-fns";
import { useTheme } from "@emotion/react";

//assuming the format of the props.date is YYYY-MM-DD
const PostedOn = (props) => {
  const postedDate = format(new Date(props.date), "M/d/yy");
  let theme = useTheme();
  return (
    <p
      style={{
        color: theme.palette.text.primary.main,
        fontSize: theme.fontSize,
      }}
    >
      Posted on {postedDate}
    </p>
  );
};

export default PostedOn;
