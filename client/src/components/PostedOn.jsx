import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";

//assuming the format of the props.date is YYYY-MM-DD
const PostedOn = (props) => {
  const theme = useTheme();
  return (
    <Typography
      variant="body1"
      sx={{
        [theme.breakpoints.down("md")]: {
          fontSize: "0.5rem",
          lineHeight: "1.5rem",
          marginTop: "8rem",
        },
      }}
    >
      Posted on {props.date}
    </Typography>
    /*
    <p
      style={{
        color: theme.palette.text.primary.main,
        fontSize: theme.fontSize,
      }}
    >
      Posted on {props.date}
    </p>*/
  );
};

export default PostedOn;
