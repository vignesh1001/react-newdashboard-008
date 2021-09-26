/** @format */

import React from 'react';
import Grid from '@mui/material/Grid';
import ContentTable from './ContentTable';
import MainCard from '../../components/cards/MainCard';
import { gridSpacing } from '../../store/constant';

const Leads = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}></Grid>
      <MainCard
        title="LEADS MANAGEMENT TRACKER"
        darkTitle
        headerStyle={{ color: '#006AB4' }}
      >
        <Grid container spacing={gridSpacing}>
          <ContentTable />
        </Grid>
      </MainCard>
    </>
  );
};

export default Leads;
