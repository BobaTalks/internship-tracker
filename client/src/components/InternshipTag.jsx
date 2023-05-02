import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";

const InternshipTag = (props) => {
  const theme = useTheme();
  const Icon = props.icon;

  return (
    <Box
      display="flex"
      maxWidth={false}
      sx={{
        borderRadius: "0.5rem",
        padding: "0.5rem 1rem",
        bgcolor: "blue.50",
        color: "gray.800",
        border: 1,
        borderColor: "gray.800",
        maxWidth: "fit-content",
      }}
    >
      <Icon />
      <Box sx={{ padding: "0rem 0.25rem" }}>{props.label}</Box>
    </Box>
  );
};

export default InternshipTag;
