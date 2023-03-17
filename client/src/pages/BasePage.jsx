import { Box, Container, Slider, useTheme } from "@mui/material";
import React from "react";

import NavBar from "../components/Navbar";
import NancyBox from "../components/NancyBox"

/**
 * Base "Page" component that will wrap and return our standard page layout with
 * navigation at the top.
 *
 * Modifying this component should update all other page components importing this.
 */
const BasePage = (props) => {
  const theme = useTheme();

  const element = <h1>Hello World</h1>;

  return (
    <Box sx={{ bgColor: theme.palette.background.default, height: "100vh" }}>
      <Container>
        <NavBar />
        {props.children}
        <NancyBox name="Nancy" />
        <NancyBox name="Jess" />
        <NancyBox name="Jenna" />
      </Container>
    </Box>
  );
};

export default BasePage;
