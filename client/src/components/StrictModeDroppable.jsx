import { Box } from '@mui/material';
import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const StrictModeDroppable = ({ cards, category }) => {
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
          mx={4}
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
                key={item}
                draggableId={JSON.stringify(item)}
                index={index}
              >
                {(provided, snapshot) => (
                  <Box
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{
                      boxShadow: snapshot.isDragging
                        ? '0px 4px 4px 0px rgba(0, 0, 0, 0.08)'
                        : null,
                      bgcolor: 'white',
                      mb: 2,
                      borderRadius: 4,
                      p: '.8rem 1.2rem',
                    }}
                  >
                    {item}
                  </Box>
                )}
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
