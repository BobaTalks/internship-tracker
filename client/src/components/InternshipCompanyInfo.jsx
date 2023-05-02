import React, { useState } from "react";
import { Box, Avatar, Typography, useTheme } from "@mui/material";

const InternshipCompanyInfo = (props) => {
  const theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        maxWidth={false}
        sx={{
          maxWidth: "fit-content",
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: "69px",
            height: "69px",
            marginTop: "0.25rem",
          }}
        />
        <Box sx={{ paddingLeft: "1rem", marginTop: "-0.25rem" }}>
          <Typography
            variant="h5"
            sx={{
              color: "blue.100",
              fontWeight: "600",
              lineHeight: "2.25rem",
            }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: "1.5rem",
              marginTop: "-0.25rem",
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            {props.location}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default InternshipCompanyInfo;
