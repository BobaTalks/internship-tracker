import { Box, Container, useTheme } from "@mui/material";
import React from "react";

import NavBar from "../components/Navbar";

/**
 * Base "Page" component that will wrap and return our standard page layout with
 * navigation at the top.
 *
 * Modifying this component should update all other page components inheriting this.
 */
const BasePage = (props) => {
  const theme = useTheme();

  return (
    <Box sx={{ bgColor: theme.palette.background.default, height: "100vh" }}>
      <Container>
        <NavBar />
        {props.children}
      </Container>
    </Box>
  );
};

export default BasePage;
