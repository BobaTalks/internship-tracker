import React from "react";
import { Box, Container, Slider, useTheme } from "@mui/material";
import { Typography } from "@mui/material";
//import { useTheme } from "@emotion/react";

const JobDescription = (props) => {
const theme = useTheme();
  return (
    <p style={{ color: theme.palette.text.primary.main }}>
      {props.description}
    </p>
  );
};
export default JobDescription;

    )
}*/