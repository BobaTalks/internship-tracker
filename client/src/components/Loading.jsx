import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      bgcolor="brown.50"
    >
      <Typography variant="h5" color="brown.300" mr={2}>
        Loading...
      </Typography>
      <CircularProgress sx={{ color: "brown.300" }} />
    </Box>
  );
};

export default Loading;
