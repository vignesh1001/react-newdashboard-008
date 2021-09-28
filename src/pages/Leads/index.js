/* @format */

import React from 'react';
import Grid from '@mui/material/Grid';
import ContentTable from './ContentTable';
import Filter from './Filter';
import MainCard from '../../components/cards/MainCard';
import { gridSpacing } from '../../store/constant';
// 14.5
// 15
const Leads = () => (
  <>
    <Grid container spacing={gridSpacing}>
      <Filter />
    </Grid>
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

export default Leads;
