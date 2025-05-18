import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import IconTextField from '../components/IconTextField';
import Loading from '../components/Loading';
import SearchButton from '../components/SearchButton';
import TrackerColumn from '../components/TrackerColumn';
import TrackerDrawer from '../components/TrackerDrawer';
import {
  deleteTrackedInternshipById,
  getTrackerColumnData,
  updateTrackedInternshipLabel,
  updateTrackerColumnOrder,
} from '../utils/api';
import { capitalize } from '../utils/helper';
import BasePage from './BasePage';

const CHANGE_PLACEHOLDER_WIDTH = 630;

const TrackerPage = () => {
  const [trackerItems, setTrackerItems] = useState(null);
  const [clickedInternshipId, setClickedInternshipId] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [trackerColumns, setTrackerColumns] = useState(null);
  const [search, setSearch] = useState('');

  const handleClick = () => {};

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    onTrackedInternshipStatusUpdate(
      JSON.parse(draggableId),
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index
    );
  };

  const onTrackedInternshipStatusUpdate = (
    trackedInternshipId,
    oldLabel,
    newLabel,
    fromIndex = null,
    toIndex = null
  ) => {
    if (oldLabel === newLabel && fromIndex === toIndex) return;

    const oldLabelCol = Array.from(trackerItems[oldLabel]);

    if (fromIndex === null) {
      fromIndex = oldLabelCol.findIndex((id) => id === trackedInternshipId);

      if (fromIndex === -1) {
        console.error(
          `Tracked internship with id ${trackedInternshipId} could not be found in column with label ${oldLabel}`
        );
        return;
      }
    }
    oldLabelCol.splice(fromIndex, 1);

    if (oldLabel === newLabel) {
      oldLabelCol.splice(toIndex, 0, trackedInternshipId);

      setTrackerItems((prevState) => ({
        ...prevState,
        [oldLabel]: oldLabelCol,
      }));
    } else {
      const newLabelCol = Array.from(trackerItems[newLabel]);

      if (toIndex == null) {
        newLabelCol.push(trackedInternshipId);
      } else {
        newLabelCol.splice(toIndex, 0, trackedInternshipId);
      }

      setTrackerItems((prevState) => ({
        ...prevState,
        [oldLabel]: oldLabelCol,
        [newLabel]: newLabelCol,
      }));

      updateInternshipStatus(trackedInternshipId, newLabel);
      updateTrackerIdsOrderInColumn(newLabel, newLabelCol);
    }
    updateTrackerIdsOrderInColumn(oldLabel, oldLabelCol);
  };

  const onTrackedInternshipDelete = (trackedInternshipId, label) => {
    const updatedOrderedTrackerIds = trackerItems[label].filter(
      (id) => id !== trackedInternshipId
    );
    setTrackerItems((prevState) => ({
      ...prevState,
      [label]: updatedOrderedTrackerIds,
    }));
    updateTrackerIdsOrderInColumn(label, updatedOrderedTrackerIds);

    deleteTrackedInternship(trackedInternshipId);
  };

  const onCardClick = (trackedInternshipId) => {
    setClickedInternshipId(trackedInternshipId);
    setIsDrawerOpen(true);
  };

  const updateTrackerIdsOrderInColumn = async (columnLabel, newOrder) => {
    try {
      await updateTrackerColumnOrder(columnLabel, newOrder);
    } catch (error) {
      console.error(
        `Could not update order of tracker ids in column ${columnLabel}: ${error}`
      );
    }
  };

  const updateInternshipStatus = async (trackedInternshipId, newLabel) => {
    try {
      await updateTrackedInternshipLabel(trackedInternshipId, newLabel);
    } catch (error) {
      console.error('Could not update tracked internship status: ', error);
    }
  };

  const deleteTrackedInternship = async (trackedInternshipId) => {
    try {
      await deleteTrackedInternshipById(trackedInternshipId);
    } catch (error) {
      console.error('Could not delete tracked internship: ', error);
    }
  };

  useEffect(() => {
    const fetchTrackerColumns = async () => {
      try {
        const data = await getTrackerColumnData();

        let items = {};
        let columnData = [];

        data.forEach((col) => {
          items[col.label] = col.orderedTrackerIds;
          columnData.push(col.label);
        });
        setTrackerItems(items);
        setTrackerColumns(columnData);
      } catch (error) {
        console.error('Could not fetch tracker column data: ', error);
      }
    };

    fetchTrackerColumns();
  }, []);

  return (
    <BasePage isTrackerPage={true}>
      <TrackerDrawer
        trackedInternshipId={clickedInternshipId}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        onInternshipStatusUpdate={onTrackedInternshipStatusUpdate}
        onTrackedInternshipDelete={onTrackedInternshipDelete}
        columnLabels={trackerColumns}
      />
      <Typography variant="pageTitle">Internship Tracker</Typography>
      <Grid container spacing={2} paddingY={2}>
        <Grid item xs>
          <IconTextField
            icon={null}
            placeholder={
              window.innerWidth <= CHANGE_PLACEHOLDER_WIDTH
                ? 'Search internships'
                : 'Search in saved and tracked internships'
            }
            value={search}
            setValue={setSearch}
          />
        </Grid>
        <Grid item xs={3} sm={2} md={1}>
          <SearchButton handleClick={handleClick} />
        </Grid>
      </Grid>
      <Box
        display="flex"
        height="calc(100vh - 16rem)"
        mt={6}
        sx={{ flexGrow: 1 }}
      >
        {trackerColumns && trackerItems ? (
          <DragDropContext onDragEnd={onDragEnd}>
            {trackerColumns.map((label, idx) => (
              <Fragment key={label}>
                <TrackerColumn
                  category={capitalize(label)}
                  trackerIds={trackerItems[label]}
                  cardOnClick={onCardClick}
                />
                {idx !== trackerColumns.length - 1 && (
                  <Divider orientation="vertical" />
                )}
              </Fragment>
            ))}
          </DragDropContext>
        ) : (
          <Loading sx={{ width: '100%', height: 'calc(100vh - 20rem)' }} />
        )}
      </Box>
    </BasePage>
  );
};

export default TrackerPage;
