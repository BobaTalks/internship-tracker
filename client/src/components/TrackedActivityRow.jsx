import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useState } from 'react';

import { deleteActivity, editActivity } from '../utils/api';

const TEXT_FIELD_STYLE = {
  '& .MuiInputBase-input': {
    fontSize: '0.9rem',
    fontWeight: 200,
  },
  '& .MuiInputLabel-root': {
    fontSize: '0.9rem !important',
    fontWeight: 200,
  },
  '& .MuiInputLabel-shrink': {
    fontWeight: 200,
  },
};

const TrackedActivityRow = ({
  event,
  onEventUpdated,
  defaultEditMode = false,
}) => {
  const [isEditMode, setIsEditMode] = useState(defaultEditMode);
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);

  const updateEvent = async () => {
    try {
      await editActivity(event.id, title, date);
      setIsEditMode(false);
    } catch (err) {
      console.error('Error updating activity:', err);
    }
    onEventUpdated();
  };

  const deleteEvent = async () => {
    try {
      await deleteActivity(event.id);
    } catch (err) {
      console.error('Error deleting activity:', err);
    }
    onEventUpdated();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        paddingBottom="1rem"
        paddingLeft="1rem"
        borderRadius="1rem"
        spacing={4}
      >
        {isEditMode ? (
          <TextField
            label="Activity"
            size="small"
            fullWidth
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            sx={TEXT_FIELD_STYLE}
          />
        ) : (
          <Typography variant="body3" fontWeight={200}>
            {event.title}
          </Typography>
        )}
        <Stack direction="row" alignItems="center" spacing={2} py={0}>
          {isEditMode ? (
            <DatePicker
              label="Date"
              value={date}
              onChange={(newDate) => setDate(newDate)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  sx={{
                    ...TEXT_FIELD_STYLE,
                    minWidth: '9.5rem',
                  }}
                />
              )}
            />
          ) : (
            <Typography variant="body3" color="text.light" fontWeight={200}>
              {event.date ? new Date(event.date).toLocaleDateString() : ''}
            </Typography>
          )}
          <Stack direction="row" py={0}>
            {isEditMode ? (
              <IconButton onClick={updateEvent}>
                <CheckCircleRoundedIcon fontSize="small" />
              </IconButton>
            ) : (
              <IconButton onClick={() => setIsEditMode(true)}>
                <EditRoundedIcon fontSize="small" />
              </IconButton>
            )}
            <IconButton onClick={deleteEvent}>
              <DeleteRoundedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
};

export default TrackedActivityRow;
