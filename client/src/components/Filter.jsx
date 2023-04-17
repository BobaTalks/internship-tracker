import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Popover,
  Typography,
} from "@mui/material";
import { ArrowDropDown, Close } from "@mui/icons-material";
import { FilterContext } from "../pages/SearchResultsPage";

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

const Filter = ({ filterLabel }) => {
  const [allFilterData, setAllFilterData] = useContext(FilterContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [icon, setIcon] = useState(<ArrowDropDown />);
  const [buttonBgColor, setButtonBgColor] = useState("blue.200");
  const [buttonBorderColor, setButtonBorderColor] = useState("gray.50");

  const [checked, setChecked] = useState(allFilterData[filterLabel].data);
  const [cancelButton, setCancelButton] = useState("");

  /* buttonStatus
    0 - all boxes are initially unchecked
    1 - some or all boxes are initially checked
    2 - some or all boxes are initially checked, and changes are made
  */
  const [buttonStatus, setButtonStatus] = useState(() => {
    Object.keys(checked).forEach((key) => {
      if (checked[key].checked) return 1;
    });
    return 0;
  });
  const handlePopUp = (isOpen, anchor = null) => {
    if (isOpen) {
      setAnchorEl(anchor);
      setIcon(<Close />);
      setButtonBgColor("red.300");
      setButtonBorderColor("blue.200");
    } else {
      setAnchorEl(anchor);
      setIcon(<ArrowDropDown />);
      setButtonBgColor("blue.200");
      setButtonBorderColor("gray.50");
    }
  };

  const handleClick = (event) => {
    let hasAtLeastOneChecked = false;
    Object.keys(checked).forEach((key) => {
      if (checked[key].checked) hasAtLeastOneChecked = true;
    });

    if (hasAtLeastOneChecked) changeButtonNames(1);
    else changeButtonNames(0);
    handlePopUp(true, event.currentTarget);
  };

  const handleClose = () => {
    handlePopUp(false);
    setChecked(allFilterData[filterLabel].data);
  };

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: {
        ...checked[event.target.name],
        checked: event.target.checked,
      },
    });
    if (buttonStatus > 0) changeButtonNames(2);
  };

  const handleSubmit = () => {
    setAllFilterData({
      ...allFilterData,
      [filterLabel]: {
        ...allFilterData[filterLabel],
        data: {
          ...checked,
        },
      },
    });
    handlePopUp(false);
  };

  const handleCancel = () => {
    if (buttonStatus === 2) {
      setChecked(allFilterData[filterLabel].data);
      changeButtonNames(1);
    } else {
      setChecked(
        Object.keys(checked).map(
          (key) => (checked[key] = { ...checked[key], checked: false })
        )
      );
      setButtonStatus(0);
    }
  };

  const changeButtonNames = (status) => {
    switch (status) {
      case 0:
        setCancelButton("Cancel filter");
        break;
      case 1:
        setCancelButton("Reset filter");
        break;
      default:
        setCancelButton("Cancel changes");
    }
    setButtonStatus(status);
  };

  const open = Boolean(anchorEl);
  const id = open ? allFilterData[filterLabel].filterName : undefined;
  const popOverProps = {
    sx: {
      backgroundColor: "gray.50",
      boxShadow:
        "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
      marginTop: "0.5rem",
      borderRadius: "8px",
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
          bgcolor: buttonBgColor,
          border: "1px solid",
          borderColor: buttonBorderColor,
          boxShadow: "none",
          borderRadius: "8px",
          textTransform: "none",
          padding: ".3rem 1rem",
          color: buttonBorderColor,
          "&:hover": {
            bgcolor: buttonBgColor,
            boxShadow: "none",
          },
        }}
      >
        <Typography noWrap sx={{ fontSize: "1rem" }}>
          {allFilterData[filterLabel].filterName}
        </Typography>
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
        <FormControl sx={{ mx: 3, my: 1 }}>
          <FormGroup>
            {Object.keys(checked).map((key) => (
              <Grid container key={key} alignItems="center">
                <Grid item xs>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked[key].checked}
                        onChange={handleChange}
                        name={key}
                        sx={{
                          "&.Mui-checked": {
                            color: "gray.300",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography noWrap fontSize="1rem" width="160px">
                        {checked[key].label}
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs="auto">
                  <Typography color="gray.300" fontSize="1rem">
                    {`(${checked[key].count})`}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </FormGroup>
        </FormControl>
        <Divider variant="middle" />
        <Box textAlign="center" py=".5rem">
          <Button
            variant="transparent"
            sx={{ marginRight: ".3rem" }}
            onClick={handleCancel}
          >
            {cancelButton}
          </Button>
          <Button variant="rounded" color="primary" onClick={handleSubmit}>
            Show results
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default Filter;
