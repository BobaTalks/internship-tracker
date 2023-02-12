import React from "react";
import { AppBar, Box, Button, Stack, useTheme } from "@mui/material";
import bobaTalksLogo from "../assets/bobatalks_wide.svg";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  const theme = useTheme();

  return (
    <AppBar sx={{ p: 2, bgcolor: theme.palette.background.paper }}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Box>
          <Button
            LinkComponent={RouterLink}
            rel="noopener noreferrer"
            target="_blank"
            to="https://bobatalks.com"
            variant="text"
          >
            <img src={bobaTalksLogo} alt="BobaTalks Logo" height="28" />
          </Button>
          <Box>{/* TODO: add nav links */}</Box>
        </Box>
        <Box>{/* TODO: Right Side Nav Items */}</Box>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
