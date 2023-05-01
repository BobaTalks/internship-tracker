import { Box } from "@mui/material";
import React from "react";

import blobShape from "../assets/milk_tea_blob.svg";
import circleShape from "../assets/milk_tea_circle.svg";
import noodleShape from "../assets/milk_tea_noodle.svg";

import shapeStyles from "./styles/backgroundShapes.module.css";

const BackgroundShapes = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <img
        src={blobShape}
        alt="Background Blob Shape"
        className={shapeStyles.blob}
      />
      <img
        src={circleShape}
        alt="Background Circle Shape"
        className={shapeStyles.circle}
      />
      <img
        src={noodleShape}
        alt="Background Noodle Shape"
        className={shapeStyles.noodle}
      />
    </Box>
  );
};

export default BackgroundShapes;
