import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SaveIcon from '@mui/icons-material/TurnedInNot';
import UnSaveIcon from '@mui/icons-material/TurnedInTwoTone';
import { Button, Link, Stack } from '@mui/material';
import React, { useState } from 'react';

function SaveAndApply({ link, isSaved }) {
  const [saved, setSaved] = useState(isSaved);

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <Stack direction="row" spacing={3}>
      <Button
        startIcon={saved ? <UnSaveIcon /> : <SaveIcon />}
        sx={{
          borderRadius: '5rem',
          border: '1px solid',
          borderColor: 'text.main',
          padding: '.3rem 1.2rem',
          color: 'text.main',
          fontSize: '1rem',
          textTransform: 'none',
          boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.08)',
        }}
        onClick={handleSave}
      >
        {saved ? 'Unsave' : 'Save'}
      </Button>
      <Link href={link} target="_blank">
        <Button
          endIcon={<OpenInNewIcon />}
          sx={{
            borderRadius: '5rem',
            padding: '.3rem 1.4rem',
            color: 'text.main',
            fontSize: '1rem',
            textTransform: 'none',
            bgcolor: 'primary.main',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.08)',
            '&:hover': {
              backgroundColor: '#E7937F',
            },
          }}
        >
          Apply
        </Button>
      </Link>
    </Stack>
  );
}

export default SaveAndApply;
