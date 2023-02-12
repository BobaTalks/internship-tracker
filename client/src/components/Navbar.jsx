import React, { useEffect } from "react";
import { AppBar, Box, Link, Stack, useTheme } from "@mui/material";
import bobaTalksLogoPath from "../assets/bobatalks_wide.svg";

const NavBar = () => {
  const theme = useTheme();

  useEffect(() => {
    const image = new Image();
    image.src = bobaTalksLogoPath;
  }, []);

  return (
    <AppBar sx={{ p: 2, bgcolor: theme.palette.background.paper }}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Box>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://bobatalks.com"
            title="BobaTalk's Website"
          >
            <img src={bobaTalksLogoPath} alt="BobaTalk's Logo" height="28" />
          </Link>
          <Box>{/* TODO: add nav links */}</Box>
        </Box>
        <Box>{/* TODO: Right Side Nav Items */}</Box>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
