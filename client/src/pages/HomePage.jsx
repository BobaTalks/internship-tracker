import React from "react";

import BasePage from "./BasePage";

/**
 * https://github.com/BobaTalks/internship-tracker/issues/24
 * Will need to include the background styles for the HomePage per design spec
 */
const HomePage = (props) => {
  return <BasePage>{props.children}</BasePage>;
};

export default HomePage;
