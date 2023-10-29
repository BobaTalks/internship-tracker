import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { Grid, Link, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const JobDescription = (props) => {
  const [readMore, setReadMore] = useState(false);
  function toggle() {
    setReadMore((a) => !a);
  }
  const centered = {
    display: 'flex',
    justifyContent: 'center',
    height: '1vh',
  };
  const FullDescription = () => (
    <Grid container direction="column" spacing={5}>
      <Grid item>
        <Typography variant="body3">{props.description}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" marginBottom={3}>
          Requirements
        </Typography>
        <Typography variant="body3" style={{ whiteSpace: 'pre-line' }}>
          {props.requirements}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" marginBottom={3}>
          Responsibilities
        </Typography>
        <Typography variant="body3" style={{ whiteSpace: 'pre-line' }}>
          {props.responsibilities}
        </Typography>
      </Grid>
      <Grid item sx={centered} alignItems="center" my={2}>
        <IconButton onClick={toggle}>
          <KeyboardArrowUpOutlinedIcon />
        </IconButton>
      </Grid>
      <Grid item sx={centered} pb={8}>
        <Link
          component={RouterLink}
          to={props.externalLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Typography variant="body1" ontWeight={'bold'} textAlign="center">
            Continue to external listing to read full description
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
  return (
    <Grid container direction="row" spacing={5}>
      <Grid item>
        <Typography variant="h6" marginBottom={3}>
          Job description
        </Typography>
        {readMore ? (
          <FullDescription />
        ) : (
          <Typography
            width={{ xs: '75vw', lg: '68vw', xl: '61vw' }}
            noWrap
            fontSize="0.9rem"
            fontWeight="normal"
          >
            {props.description}
          </Typography>
        )}
        {readMore ? null : (
          <Link component="button" onClick={toggle}>
            <Typography variant="body1" fontWeight={'bold'} marginTop={3}>
              Read More
            </Typography>
          </Link>
        )}
      </Grid>
    </Grid>
  );
};

export default JobDescription;
