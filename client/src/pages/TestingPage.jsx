import React, { useState } from "react";
import Filter from "../components/Filter";

/**
 This page is used to test components
 */
const TestingPage = () => {
  const [remoteFilter, setRemoteFilter] = useState({
    onsite: {
      label: "On-site",
      count: 4,
      checked: true,
    },
    remote: {
      label: "Remote",
      count: 5,
      checked: false,
    },
    hybrid: {
      label: "Hybrid",
      count: 12,
      checked: false,
    },
  });

  return (
    <Filter
      name="Remote"
      filterInfo={remoteFilter}
      setFilterInfo={setRemoteFilter}
    />
  );
};

export default TestingPage;
