import React, { useState } from "react";
import {
  AppBar,
  Box,
  Grid,
  Link,
  Typography,
  MenuItem,
  Popover,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TrackerIcon from "../assets/tracker_icon.svg";
import AccountIcon from "../assets/account_icon.svg";
import LogoPath from "../assets/internship_tracker_logo.svg";

const pageNames = ["Find an internship", "About"];
const pageLinks = ["/search", "/about"];

const NavBar = ({ signedIn }) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar sx={{ p: 1, bgcolor: "brown.100" }}>
      <Grid container justifyContent="center">
        <Grid
          container
          item
          xl={8}
          lg={9}
          sm={10}
          xs={11}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link
            href="/"
            title="Internship Tracker Home Page"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <img src={LogoPath} alt="Internship Tracker Logo" height="32" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ p: 0, pr: 3 }}
            >
              <MenuIcon />
            </IconButton>
            <Popover
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                mt: 5,
              }}
              PaperProps={{
                sx: {
                  backgroundColor: "brown.100",
                  width: 300,
                  p: 1,
                },
              }}
            >
              {pageNames.map((name, i) => (
                <MenuItem
                  key={name}
                  onClick={handleCloseNavMenu}
                  bgcolor="black"
                >
                  <Link href={pageLinks[i]} underline="none" color="gray.800">
                    {name}
                  </Link>
                </MenuItem>
              ))}
            </Popover>
            <Link
              href="/"
              title="Internship Tracker Home Page"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            >
              <img src={LogoPath} alt="Internship Tracker Logo" height="32" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pageNames.map((name, i) => (
              <Button
                key={name}
                onClick={handleCloseNavMenu}
                href={pageLinks[i]}
                sx={{
                  ml: 3,
                  display: "block",
                }}
              >
                <Typography variant="navText">{name}</Typography>
              </Button>
            ))}
          </Box>
          {signedIn ? (
            <Box>
              <Button sx={{ p: 0 }}>
                <img src={TrackerIcon} alt="tracker" />
              </Button>
              <Button sx={{ p: 0 }}>
                <img src={AccountIcon} alt="account" />
              </Button>
            </Box>
          ) : (
            <Box>
              <Button>
                <Typography variant="navText">Sign In</Typography>
              </Button>
              <Button
                variant="rounded"
                color="thai"
                sx={{
                  ml: { sx: 1, sm: 2 },
                  padding: { sx: ".3rem .6rem", sm: ".6rem 1.3rem" },
                }}
              >
                <Typography
                  variant="navText"
                  color="white"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  Create an account
                </Typography>
                <Typography
                  variant="navText"
                  color="white"
                  sx={{ display: { xs: "flex", sm: "none" } }}
                >
                  Sign Up
                </Typography>
              </Button>
            </Box>
          )}
          {/* <Stack spacing={3} direction="row" alignItems="center">
            <Link href="/" title="Internship Tracker Home Page">
              <img src={LogoPath} alt="Internship Tracker Logo" height="32" />
            </Link>
            <Link href="/search" title="Find an internship">
              Find an internship
            </Link>
            <Link href="/about" title="About">
              About
            </Link>
          </Stack> */}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
