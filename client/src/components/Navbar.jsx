import { AppBar, Box, Link, Stack } from "@mui/material";
import React, { useEffect } from "react";

import bobaTalksLogoPath from "../assets/bobatalks_wide.svg";

const NavBar = () => {
  useEffect(() => {
    const image = new Image();
    image.src = bobaTalksLogoPath;
  }, []);

  return (
    <AppBar sx={{ p: 2, bgcolor: "brown.100" }}>
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
        <Box>
          {/* TODO: Right Side Nav Items */}
          <Link
            rel="noopener noreferrer"
            target="_self"
            href="/search"
            title="Find an internship"
          >
            Find an internship
          </Link>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default NavBar;
