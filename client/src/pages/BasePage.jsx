import React from "react";
import PropTypes from "prop-types";
import { Box, Container, useTheme } from "@mui/material";
import NavBar from "../components/Navbar";

const BasePage = (props) => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, height: "100vh" }}>
      <Container>
        <NavBar />
        {props.children}
      </Container>
    </Box>
  );
};

BasePage.propTypes = {
  children: PropTypes.node,
};

export default BasePage;
