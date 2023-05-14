import React from "react";
import { Box } from "@mui/material";

const InternshipTag = (props) => {
  const Icon = props.icon;

  return (
    <Box
      display="flex"
      maxWidth={false}
      sx={{
        borderRadius: "0.5rem",
        padding: "0.5rem 1rem",
        bgcolor: "secondary.light",
        border: 1,
        borderColor: "text.main",
        maxWidth: "fit-content",
      }}
    >
      <Icon />
      <Box sx={{ padding: "0rem 0.25rem" }}>{props.label}</Box>
    </Box>
  );
};

export default InternshipTag;
