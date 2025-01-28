import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { format, isToday } from 'date-fns';
import React, { useState } from 'react';
import { HiOutlineChat } from 'react-icons/hi';

import { addNote, getInternshipById } from '../utils/api';
import { getLabelIcon } from '../utils/helper';
import InternshipCompanyInfo from './InternshipCompanyInfo';
import InternshipTag from './InternshipTag';
import Loading from './Loading';

const TrackerDrawer = ({
  trackedInternship,
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  const internshipInfo = trackedInternship
    ? getInternshipById(trackedInternship.internshipId)
    : null;

  const [messageInput, setMessageInput] = useState('');

  // TODO: Messages are not updated since addNote has not yet been implemented
  const submitMessage = () => {
    addNote(trackedInternship.id, messageInput);
    setMessageInput('');
  };

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      anchor="right"
    >
      <Box sx={{ width: { xs: '100vw', sm: '40rem' } }}>
        {internshipInfo ? (
          <Stack height="100vh" justifyContent="space-between">
            <Box>
              <Box height="3rem" />
              <Divider />
              <Box m={6} height="100%">
                <InternshipCompanyInfo
                  name={internshipInfo.companyName}
                  title={internshipInfo.position}
                  location={internshipInfo.location}
                  isTracker={false}
                />
                <Grid container direction="row" spacing={2} my={3}>
                  {internshipInfo.labels.map((label, idx) => {
                    return (
                      <Grid item key={idx}>
                        <InternshipTag
                          label={label.name}
                          icon={getLabelIcon(label.filter)}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>

            <Box bgcolor="background.main" padding="1rem 0.8rem 1rem 1.2rem">
              <Stack direction="row" gap="0.5rem" alignItems="center" pb="1rem">
                <HiOutlineChat fontSize="2rem" />
                <Typography variant="h5" color="text.main">
                  NOTES
                </Typography>
              </Stack>
              <Stack
                spacing={2}
                height="10rem"
                pr="0.5rem"
                overflow="auto"
                sx={{
                  '&:hover': {
                    overflowY: 'auto',
                  },
                  '&::-webkit-scrollbar': {
                    width: '.4rem',
                    background: '#FAF0E7',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'none',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: '#e6d8cc',
                    borderRadius: '1rem',
                  },
                }}
              >
                {trackedInternship.notes.length > 0 ? (
                  trackedInternship.notes.map((note, idx) => (
                    <Box
                      key={idx}
                      pb={
                        idx === trackedInternship.notes.length - 1
                          ? '1.5rem'
                          : 0
                      }
                    >
                      <Typography
                        color="text.dark"
                        fontSize="0.75rem"
                        fontWeight={400}
                      >
                        {isToday(note.date)
                          ? `Today at ${format(note.date, 'h:mm a')}`
                          : format(note.date, 'MM/dd/yyyy h:mm a')}
                      </Typography>
                      <Typography
                        fontSize="1rem"
                        fontWeight="normal"
                        lineHeight="1rem"
                      >
                        {note.message}
                      </Typography>
                    </Box>
                  ))
                ) : (
                  <Typography
                    color="text.dark"
                    fontSize="1rem"
                    fontWeight={400}
                  >
                    You currently have no saved notes for this internship
                  </Typography>
                )}
              </Stack>
              <Box bgcolor="grey.dark" borderRadius="0.5rem" p={0}>
                <TextField
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  fullWidth
                  placeholder="Type comment here"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{ marginLeft: '0.3rem' }}
                      >
                        <IconButton onClick={submitMessage}>
                          <SendRoundedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                        borderRadius: '20rem',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: '1rem',
                      fontWeight: 'normal',
                    },
                  }}
                />
              </Box>
            </Box>
          </Stack>
        ) : (
          <Loading sx={{ bgcolor: 'grey.main' }} />
        )}
      </Box>
    </Drawer>
  );
};

export default TrackerDrawer;
