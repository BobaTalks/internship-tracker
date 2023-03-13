import React from "react";
import { Box, Container, useTheme } from "@mui/material";
import NavBar from "../components/Navbar";

/**
 * Base "Page" component that will wrap and return our standard page layout with
 * navigation at the top.
 *
 * Modifying this component should update all other page components inhereting this.
 *
 * @param {*} props
 * @return {React.Node}
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
