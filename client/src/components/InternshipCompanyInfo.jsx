import React, { useState } from "react";
import { Box, Avatar, Typography, useTheme } from "@mui/material";

const InternshipCompanyInfo = (props) => {
  let theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        maxWidth={false}
        sx={{
          maxWidth: "fit-content",
        }}
      >
        <Avatar sx={{ width: 69, height: 69 }} variant="rounded"></Avatar>
        <Box sx={{ paddingLeft: "1rem", marginTop: "-0.5rem" }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.info.main,
              fontWeight: "600",
            }}
          >
            {props.name}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>
            {props.title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1rem" }}>
            {props.location}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default InternshipCompanyInfo;
