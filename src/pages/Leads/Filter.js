/** @format */

import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import { useStore } from '../../custom-hooks/useStore';
import { Context } from '../../context/store';
import CustomGrid from '../../components/CustomGrid';
import { STORES_COLUMN_DATA } from './tableHeaders';
import { makeStyles } from '@material-ui/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const useStyles = makeStyles({
  content: {
    height: `calc(100vh - 260px)`,
    width: '100%',
  },
});

const Filter = () => {
  // useStore hook for login
  let stores = useStore();

  const [value, setValue] = React.useState(new Date());
  const { state, dispatch } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {}, []);

  return tableContent.length ? (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid item xs={12}>
        <DatePicker
          disableFuture
          label="Responsive"
          openTo="month"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Grid>
    </LocalizationProvider>
  ) : (
    ''
  );
};

export default Filter;
