import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Button, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';

import TrackerContext from '../contexts/TrackerContext';
import { capitalize } from '../utils/helper';

const STATUS_OPTIONS = ['Saved', 'Applied', 'Responded', 'Archived'];

const StatusDropdown = ({ trackedInternshipId }) => {
  const [trackedInternships, setTrackedInternships] =
    useContext(TrackerContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  useEffect(() => {
    // TODO: Replace with API call to get status of a tracked internship
    const internship = trackedInternships.find(
      (item) => item.id === trackedInternshipId
    );
    setStatus(internship ? capitalize(internship.label) : '');
  }, [trackedInternships, trackedInternshipId]);

  // TODO: Replace with API call to update the status of a tracked internship
  const updateStatus = (newStatus) => {
    setTrackedInternships((prevState) =>
      prevState.map((internship) =>
        internship.id === trackedInternshipId
          ? { ...internship, label: newStatus.toLowerCase() }
          : internship
      )
    );
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
          {status}
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
          {STATUS_OPTIONS.map((option) => (
            <MenuItem
              key={option}
              onClick={() => updateStatus(option)}
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
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
};

export default StatusDropdown;
