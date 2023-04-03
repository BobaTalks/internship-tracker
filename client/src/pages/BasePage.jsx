import { Box, Container, useTheme } from "@mui/material";
import React from "react";

import NavBar from "../components/Navbar";
import PostedOn from "../components/PostedOn";

/**
 * Base "Page" component that will wrap and return our standard page layout with
 * navigation at the top.
 *
 * Modifying this component should update all other page components importing this.
 */
const BasePage = (props) => {
  const theme = useTheme();

  const mockData = "02/14/2003";

  return (
    <Box sx={{ bgColor: theme.palette.background.default, height: "100vh" }}>
      <Container>
        {/* <NavBar /> */}
        {props.children}
        <PostedOn date={mockData} />
      </Container>
    </Box>
  );
};

export default BasePage;
