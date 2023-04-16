import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";

const InternshipTag = (props) => {
  let theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        maxWidth={false}
        sx={{
          borderRadius: "0.5rem",
          padding: "0.5rem 1rem",
          bgcolor: theme.palette.blue.lighter,
          color: theme.palette.text.primary,
          border: 1,
          maxWidth: "fit-content",
        }}
      >
        <props.icon />
        <Box sx={{ padding: "0rem 0.25rem" }}>{props.label}</Box>
      </Box>
    </>
  );
};

export default InternshipTag;
