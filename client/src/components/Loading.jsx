import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor="background.main"
    >
      <Typography variant="h5" color="tertiary.contrastText" mr={2}>
        Loading...
      </Typography>
      <CircularProgress sx={{ color: "tertiary.contrastText" }} />
    </Box>
  );
};

export default Loading;
