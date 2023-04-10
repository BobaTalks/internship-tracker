import React from "react";
import Filter from "../components/Filter";

/**
 This page is used to test components
 */
const TestingPage = () => {
  const options = ["On-site", "Remote", "Hybrid"];
  const count = [4, 5, 12];

  return <Filter name="Remote" options={options} count={count} />;
};

export default TestingPage;
