import React from "react";
import PropTypes from "prop-types";
import { Container } from "@mui/material";
import NavBar from "../components/Navbar";

const BasePage = (props) => {
  return (
    <Container>
      <NavBar></NavBar>
      {props.children}
    </Container>
  );
};

BasePage.propTypes = {
  children: PropTypes.node,
};

export default BasePage;
