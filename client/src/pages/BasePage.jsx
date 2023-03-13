import React from "react";
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

export default BasePage;
