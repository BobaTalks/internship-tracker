import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
/**
 * https://github.com/BobaTalks/internship-tracker/issues/22
 * Content for the home page, expect the large heading and project description copy
 * SearchComponent can come later
 */
const HomePageContent = () => {
  const theme = useTheme();
  return (
    <Grid container direction="column" spacing={0}>
      <Grid
        item
        marginTop="10rem"
        width="80%"
        sx={{
          [theme.breakpoints.down('xl')]: {
            width: '90%',
          },
          [theme.breakpoints.down('md')]: {
            width: '100%',
            marginTop: '9rem',
          },
          [theme.breakpoints.down('sm')]: {
            marginTop: '7rem',
          },
        }}
      >
        <Typography
          variant="title"
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '3rem',
              lineHeight: '4.5rem',
              marginTop: '8rem',
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '2rem',
              lineHeight: '2.5rem',
            },
          }}
        >
          Personalized internship tracking made easy.
        </Typography>
      </Grid>
      <Grid item container direction="row" marginTop={2}>
        <Grid item lg={7} sm={10} xs={12}>
          <Typography
            variant="subtitle"
            sx={{
              [theme.breakpoints.down('md')]: {
                fontSize: '1rem',
              },
            }}
          >
            Track when internships open for the company of your choice. Find
            internships for all the roles you want. Manually track/update your
            application statuses.
          </Typography>
        </Grid>
        <Grid item lg={5} sm={2}></Grid>
      </Grid>
    </Grid>
  );
};

export default HomePageContent;
