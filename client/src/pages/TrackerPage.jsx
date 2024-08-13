import { Box, Divider, Grid, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import IconTextField from '../components/IconTextField';
import SearchButton from '../components/SearchButton';
import TrackerColumn from '../components/TrackerColumn';
import TrackerContext from '../contexts/TrackerContext';
import TrackerDrawer from '../components/TrackerDrawer';
import BasePage from './BasePage';

const TrackerPage = () => {
  const [trackedInternships, setTrackedInternships] =
    useContext(TrackerContext);
  const [trackerItems, setTrackerItems] = useState(() => {
    let items = {
      saved: [],
      applied: [],
      responded: [],
      archived: [],
    };
    trackedInternships.every((internship) =>
      items[internship.label].push(internship)
    );
    return items;
  });
  const [clickedInternship, setClickedInternship] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [search, setSearch] = useState('');
  const handleClick = () => {};
  const CHANGE_PLACEHOLDER_WIDTH = 630;

  const trackerColumns = [
    {
      label: 'Saved',
      trackedItemsKey: 'saved',
    },
    {
      label: 'Applied',
      trackedItemsKey: 'applied',
    },
    {
      label: 'Responded',
      trackedItemsKey: 'responded',
    },
    {
      label: 'Archived',
      trackedItemsKey: 'archived',
    },
  ];

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
      destCol[destination.index]['label'] = dInd;

      setTrackedInternships((prevState) => ({
        ...prevState,
        label: dInd,
      }));

      setTrackerItems((prevState) => ({
        ...prevState,
        [sInd]: sourceCol,
        [dInd]: destCol,
      }));
    }
  };

  const onCardClick = (internship) => {
    setClickedInternship(internship);
    setIsDrawerOpen(true);
  };

  return (
    <BasePage isTrackerPage={true}>
      <TrackerDrawer
        internship={clickedInternship}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
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
        <DragDropContext onDragEnd={onDragEnd}>
          {trackerColumns.map((col, idx) => (
            <>
              <TrackerColumn
                key={col.trackedItemsKey}
                category={col.label}
                cards={trackerItems[col.trackedItemsKey]}
                cardOnClick={onCardClick}
              />
              {idx !== trackerColumns.length - 1 && (
                <Divider orientation="vertical" />
              )}
            </>
          ))}
        </DragDropContext>
      </Box>
    </BasePage>
  );
};

export default TrackerPage;
