import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { getActivitiesByTrackedInternshipId } from '../utils/api';
import { addActivity } from '../utils/api';
import TrackedActivityRow from './TrackedActivityRow';

const TrackedActivity = ({ trackedInternshipId }) => {
  const [activity, setActivity] = useState([]);
  const [isActivityUpdated, setIsActivityUpdated] = useState(true);

  const addEvent = async () => {
    try {
      // By setting the title to an empty string, the added event will default to edit mode
      await addActivity(trackedInternshipId, '', null);
      setIsActivityUpdated(true);
    } catch (err) {
      console.error('Error adding activity:', err);
    }
  };

  useEffect(() => {
    const fetchActivities = async () => {
      if (trackedInternshipId) {
        try {
          const allActivity = await getActivitiesByTrackedInternshipId(
            trackedInternshipId
          );
          setActivity(allActivity);
        } catch (error) {
          console.error('Error getting internship activity.', error);
        }
      }
    };

    if (isActivityUpdated) {
      fetchActivities();
      setIsActivityUpdated(false);
    }
  }, [trackedInternshipId, isActivityUpdated]);

  return (
    <>
      {activity.length > 0 && (
        <Timeline sx={{ p: 0, m: 0 }}>
          {activity.map((event, index) => (
            <TimelineItem sx={{ minHeight: '3.2rem' }} key={event.id}>
              <TimelineOppositeContent
                sx={{ flex: 0 }}
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{
                    borderColor: 'tertiary.main',
                    backgroundColor:
                      event.date == null || new Date(event.date) > new Date()
                        ? 'white'
                        : 'background.dark',
                    width: '1.1rem',
                    height: '1.1rem',
                    marginY: '.5rem',
                  }}
                />
                {index < activity.length - 1 && (
                  <TimelineConnector
                    sx={{
                      borderColor: 'background.dark',
                      borderStyle: 'dashed',
                      backgroundColor: 'white',
                      borderWidth: 1,
                    }}
                  />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ m: 0, p: 0 }}>
                <TrackedActivityRow
                  event={event}
                  onEventUpdated={() => setIsActivityUpdated(true)}
                  defaultEditMode={!event.title}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
      <Button
        variant="rounded"
        color="primary"
        onClick={addEvent}
        startIcon={<AddRoundedIcon />}
        sx={{ mb: '1rem', mt: '.5rem' }}
      >
        Add task
      </Button>
    </>
  );
};

export default TrackedActivity;
