import React, { useState } from "react";
import { Grid, IconButton, useTheme } from "@mui/material";
import SuitcaseIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchIcon from "@mui/icons-material/SearchOutlined";

import IconTextField from "./IconTextField";
/**
 * https://github.com/BobaTalks/internship-tracker/issues/23
 * Search bar component should include the "what" and "where" inputs with a button to submit
 * When completed, this should be imported into appropriate pages.
 */
const SearchBar = () => {
  const theme = useTheme();
  const [internship, setInternship] = useState("");
  const [location, setLocation] = useState("");

  const handleClick = () => {};
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={12} md={7}>
        <IconTextField
          icon={<SuitcaseIcon htmlColor="black" />}
          placeholder="Search internship listings"
          value={internship}
          setValue={setInternship}
        />
      </Grid>
      <Grid item xs={9} md={4}>
        <IconTextField
          icon={<LocationIcon htmlColor="black" />}
          placeholder="Location"
          value={location}
          setValue={setLocation}
        />
      </Grid>
      <Grid item xs={3} md={1}>
        <IconButton
          aria-label="search"
          onClick={handleClick}
          sx={{
            bgcolor: "red.100",
            padding: "0.9rem",
            border: "2px solid",
            borderColor: "red.200",
            boxShadow: `0 0 0 2px ${theme.palette.gray[400]}`,
            "&:hover": {
              transform: "scale(1.1)",
              bgcolor: "red.100",
              transition: "transform .3s ease-out",
            },
            "&:focus": {
              boxShadow: `0 0 0 2px ${theme.palette.gray[400]}`,
            },
          }}
        >
          <SearchIcon htmlColor="black" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
