import React from "react";
import { Box } from "@mui/material";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/25
 * Component for the internship card. should take an Internship as props
 *
 */
const InternshipCard = () => {
  return (
    <Box
      bgcolor="gray.50"
      borderRadius="2rem"
      padding="2rem"
      sx={{ boxShadow: "0px 3px 3px 0px #00000033" }}
    />
  );
};

export default InternshipCard;
