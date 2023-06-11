import React from "react";
import { Grid, Stack, Typography, Box, useTheme } from "@mui/material";

import BasePage from "./BasePage";
import BackgroundShapes from "../components/BackgroundShapes";
import HomePageContent from "../components/HomePageContent";
import SearchBar from "../components/SearchBar";

import metaLogo from "../assets/meta_logo.svg";
import microsoftLogo from "../assets/microsoft_logo.svg";
import amazonLogo from "../assets/amazon_logo.svg";
import appleLogo from "../assets/apple_logo.svg";
import googleLogo from "../assets/google_logo.svg";

const companyURLs = [
  microsoftLogo,
  metaLogo,
  amazonLogo,
  googleLogo,
  appleLogo,
];

const HomePage = (props) => {
  const theme = useTheme();

  return (
    <BasePage>
      <BackgroundShapes />
      <Stack
        spacing={5}
        sx={{ zIndex: 0, marginBottom: "30px" }}
        minWidth="100%"
      >
        <HomePageContent />
        <Grid container justifyContent="center">
          <Grid item lg={8} md={9} xs={11}>
            <SearchBar isNarrow />
          </Grid>
        </Grid>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "1000",
            fontSize: "1rem",
          }}
        >
          This Internship Tracker is currently tracking
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          columns={{ xs: 2, sm: 5 }}
          sx={{
            alignSelf: "center",
            width: "520px",
            [theme.breakpoints.down("sm")]: {
              width: "180px",
            },
            marginBottom: "30px",
          }}
        >
          {companyURLs.map((url) => {
            return (
              <Grid
                item
                key={url}
                xs={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "90px",
                  marginBottom: "20px",
                }}
              >
                <Box
                  component="img"
                  src={url}
                  sx={{
                    width: "90px",
                    [theme.breakpoints.down("sm")]: {
                      width: "70px",
                    },
                  }}
                ></Box>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </BasePage>
  );
};

export default HomePage;
