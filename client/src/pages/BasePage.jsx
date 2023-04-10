import { Box, Container, useTheme } from "@mui/material";
import React from "react";

import NavBar from "../components/Navbar";
import JobDescription from "../components/JobDescription";

/**
 * Base "Page" component that will wrap and return our standard page layout with
 * navigation at the top.
 *
 * Modifying this component should update all other page components importing this.
 */
const BasePage = (props) => {
  const theme = useTheme();

  const ex_JobDescrip =
    "Come join the Product Content Innovation Experience Design team for the unique opportunity to design new content-related and interactive product experiences that consumers use and love. In this role, you have the opportunity to influence the storyline of Netflix titles through the creation of thoughtful designs and user journeys–making more joyful experiences for our members...";

  return (
    <Box sx={{ bgColor: theme.palette.background.default, height: "100vh" }}>
      <Container>
        {/* <NavBar /> */}
        {props.children}
        <JobDescription description={ex_JobDescrip} />
      </Container>
    </Box>
  );
};

export default BasePage;
