import { Box } from '@mui/material';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import TrackerCard from '../components/TrackerCard';

const StrictModeDroppable = ({ cards, category, cardOnClick }) => {
  const [enabled, setEnabled] = React.useState(false);
  React.useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
  return (
    <Droppable droppableId={category.toLowerCase()}>
      {(provided) => (
        <Box
          ref={(el) => {
            provided.innerRef(el);
          }}
          {...provided.droppableProps}
          overflow="hidden"
          ml={5}
          mr={2}
          sx={{
            '&:hover': {
              overflowY: 'auto',
            },
            '&::-webkit-scrollbar': {
              width: '.2rem',
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
          {cards.map((item, index) => {
            return (
              <Draggable
                key={JSON.stringify(item)}
                draggableId={JSON.stringify(item)}
                index={index}
              >
                {(provided, snapshot) => {
                  return (
                    <TrackerCard
                      provided={provided}
                      key={item.id}
                      trackerId={item.id}
                      internshipId={item.internshipId}
                      dateAdded={item.dateAdded}
                      appliedDate={item.appliedDate}
                      cardOnClick={cardOnClick}
                    />
                  );
                }}
              </Draggable>
            );
          })}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default StrictModeDroppable;
