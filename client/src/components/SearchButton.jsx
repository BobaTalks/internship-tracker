import SearchIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material';
import React from 'react';

const SearchButton = ({ handleClick }) => {
  return (
    <IconButton
      aria-label="search"
      onClick={handleClick}
      sx={{
        bgcolor: 'background.dark',
        padding: '0.9rem',
        border: '2px solid',
        borderColor: 'primary.dark',
        '&:hover': {
          transform: 'scale(1.1)',
          bgcolor: 'background.dark',
          transition: 'transform .3s ease-out',
        },
      }}
    >
      <SearchIcon htmlColor="black" />
    </IconButton>
  );
};

export default SearchButton;
