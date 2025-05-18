import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Button, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';

import { capitalize } from '../utils/helper';

const StatusDropdown = ({ options, status, setStatus }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
        variant="contained"
        disabled={!status}
        sx={{
          bgcolor: 'secondary.main',
          border: '1px solid',
          borderColor: 'grey.main',
          boxShadow: 'none',
          borderRadius: '8px',
          textTransform: 'none',
          color: 'grey.main',
          '&:hover': {
            bgcolor: 'secondary.main',
            boxShadow: 'none',
          },
        }}
      >
        <Typography noWrap fontSize=".9rem" color="grey.main">
          {capitalize(status)}
        </Typography>
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            backgroundColor: 'grey.main',
            boxShadow:
              '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
            marginTop: '0.5rem',
            borderRadius: '8px',
            width: '12rem',
          },
        }}
      >
        <MenuList>
          {options.map((option) => (
            <MenuItem
              key={option}
              onClick={() => setStatus(option)}
              selected={option === status}
              sx={{
                '&.Mui-selected': {
                  backgroundColor: 'grey.dark',
                },
                '&.Mui-selected:focus': {
                  backgroundColor: 'grey.dark',
                },
              }}
            >
              {capitalize(option)}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
};

export default StatusDropdown;
