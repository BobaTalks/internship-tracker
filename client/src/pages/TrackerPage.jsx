import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import IconTextField from '../components/IconTextField';
import SearchButton from '../components/SearchButton';
import TrackerColumn from '../components/TrackerColumn';
import BasePage from './BasePage';

const TrackerPage = () => {
  const [trackerItems, setTrackerItems] = useState({
    saved: ['saved1', 'saved2'],
    applied: ['applied1', 'applied2', 'applied3'],
    responded: ['responded1', 'responded2', 'responded3', 'responded4'],
    archived: ['archived1', 'archived2', 'archived3'],
  });
  const [search, setSearch] = useState('');
  const handleClick = () => {};
  const CHANGE_PLACEHOLDER_WIDTH = 630;

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    if (sInd === dInd) {
      const newOrder = Array.from(trackerItems[sInd]);
      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, JSON.parse(draggableId));

      setTrackerItems((prevState) => ({
        ...prevState,
        [sInd]: newOrder,
      }));
    } else {
      const sourceCol = Array.from(trackerItems[sInd]);
      const destCol = Array.from(trackerItems[dInd]);

      const [removed] = sourceCol.splice(source.index, 1);
      destCol.splice(destination.index, 0, removed);

      setTrackerItems((prevState) => ({
        ...prevState,
        [sInd]: sourceCol,
        [dInd]: destCol,
      }));
    }
  };
  return (
    <BasePage>
      <Box
        display="flex"
        flexDirection="column"
        minWidth="100%"
        paddingTop="6rem"
      >
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
          <DragDropContext onDragEnd={onDragEnd}>
            <TrackerColumn category="Saved" cards={trackerItems.saved} />
            <Divider orientation="vertical" />
            <TrackerColumn category="Applied" cards={trackerItems.applied} />
            <Divider orientation="vertical" />
            <TrackerColumn
              category="Responded"
              cards={trackerItems.responded}
            />
            <Divider orientation="vertical" />
            <TrackerColumn category="Archived" cards={trackerItems.archived} />
          </DragDropContext>
        </Box>
      </Box>
    </BasePage>
  );
};

export default TrackerPage;
