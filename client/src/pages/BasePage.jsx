import { Grid } from '@mui/material';
import React from 'react';

import NavBar from '../components/Navbar';

/**
 * Base "Page" component that will wrap and return our standard page layout with
 * navigation at the top.
 *
 * Modifying this component should update all other page components importing this.
 */
const BasePage = (props) => {
  return (
    <Grid
      container
      sx={{ bgcolor: 'background.main', minHeight: '100vh' }}
      justifyContent="center"
    >
      <Grid container item xl={8} lg={9} sm={10} xs={11}>
        <NavBar />
        {props.children}
      </Grid>
    </Grid>
  );
};

export default BasePage;
