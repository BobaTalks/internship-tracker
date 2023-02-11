import React from "react";
import PropTypes from "prop-types";
import BasePage from "./BasePage";

const HomePage = (props) => {
  return <BasePage>{props.children}</BasePage>;
};

HomePage.propTypes = {
  children: PropTypes.node,
};

export default HomePage;
