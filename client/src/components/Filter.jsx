import React, { useState } from "react";
import { Button, Popover, Typography } from "@mui/material";
import { ArrowDropDown, Close } from "@mui/icons-material";

/**
 * Individual filter component to be used within the FiltersBar.
 * Filter props should accept the filter object that will render each filter item in the
 * dropdown along with its checked state.
 *
 * Another prop to be included should be a callback to update the state of filters in the
 * parent component.
 *
 * Cancel should clear any unapplied filters and close the dropdown
 */
const Filter = ({ name, options, count }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [icon, setIcon] = useState(<ArrowDropDown />);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIcon(<Close />);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIcon(<ArrowDropDown />);
  };

  const open = Boolean(anchorEl);
  const id = open ? name : undefined;
  const popOverProps = {
    sx: {
      backgroundColor: "gray.50",
      boxShadow:
        "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
      marginTop: "0.5rem",
    },
  };

  return (
    <>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        endIcon={icon}
        variant="contained"
        sx={{
          backgroundColor: "blue.200",
          border: "1px solid",
          borderColor: "gray.50",
          boxShadow: "none",
          borderRadius: "8px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "blue.200",
            boxShadow: "none",
          },
        }}
      >
        {name}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        PaperProps={popOverProps}
      >
        <Typography sx={{ p: 2 }}>Chicken Nuggets</Typography>
      </Popover>
    </>
  );
};

export default Filter;
