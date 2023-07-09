import { ArrowDropDown, Close } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Popover,
  Typography,
} from '@mui/material';
import React, { useContext, useState } from 'react';

import FilterContext from '../contexts/FilterContext';

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
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(allFilterData[filterLabel].data);
  /* buttonStatus
    0 - all boxes are initially unchecked
    1 - some or all boxes are initially checked
    2 - some or all boxes are initially checked, and changes are made
  */
  const [buttonStatus, setButtonStatus] = useState(() => {
    return Object.values(checked).find((item) => item.checked) ? 1 : 0;
  });

  const handleClick = (event) => {
    setButtonStatus(() =>
      Object.values(checked).find((item) => item.checked) ? 1 : 0
    );
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setChecked(allFilterData[filterLabel].data);
    setAnchorEl(null);
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: {
        ...checked[event.target.name],
        checked: event.target.checked,
      },
    });
    if (buttonStatus === 1) setButtonStatus(2);
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
    setIsOpen(false);
    setAnchorEl(null);
  };

  const handleCancel = () => {
    if (buttonStatus === 2) {
      setChecked(allFilterData[filterLabel].data);
      setButtonStatus(1);
    } else {
      setChecked(
        Object.keys(checked).map(
          (key) => (checked[key] = { ...checked[key], checked: false })
        )
      );
      setButtonStatus(0);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? allFilterData[filterLabel].filterName : undefined;
  const popOverProps = {
    sx: {
      backgroundColor: 'grey.main',
      boxShadow:
        '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
      marginTop: '0.5rem',
      borderRadius: '8px',
    },
  };
  const cancelButtonLabel = ['Cancel filter', 'Reset filter', 'Cancel changes'];
  return (
    <>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        endIcon={isOpen ? <Close /> : <ArrowDropDown />}
        variant="contained"
        sx={{
          bgcolor: isOpen ? 'primary.main' : 'secondary.main',
          border: '1px solid',
          borderColor: isOpen ? 'secondary.main' : 'grey.main',
          boxShadow: 'none',
          borderRadius: '8px',
          textTransform: 'none',
          padding: '.3rem 1rem',
          color: isOpen ? 'secondary.main' : 'grey.main',
          '&:hover': {
            bgcolor: isOpen ? 'primary.main' : 'secondary.main',
            boxShadow: 'none',
          },
        }}
      >
        <Typography
          noWrap
          sx={{
            fontSize: '1rem',
            color: isOpen ? 'secondary.main' : 'grey.main',
          }}
        >
          {allFilterData[filterLabel].filterName}
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={popOverProps}
      >
        <FormControl sx={{ mx: 3, my: 1 }}>
          <FormGroup>
            {Object.keys(checked).map((key) => (
              <Box
                key={key}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked[key].checked}
                      onChange={handleChange}
                      name={key}
                      sx={{
                        '&.Mui-checked': {
                          color: 'secondary.main',
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
                <Typography color="text.light" fontSize="1rem">
                  {`(${checked[key].count})`}
                </Typography>
              </Box>
            ))}
          </FormGroup>
        </FormControl>
        <Divider variant="middle" />
        <Box textAlign="center" py=".5rem">
          <Button
            variant="transparent"
            sx={{ marginRight: '.3rem' }}
            onClick={handleCancel}
          >
            {cancelButtonLabel[buttonStatus]}
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
