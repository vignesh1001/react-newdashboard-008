/** @format */

import React, { useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStore } from '../../custom-hooks/useStore';
import { Context } from '../../context/store';
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

  const [fieldValues, setFieldValues] = React.useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const { state, dispatch } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid
        item
        xs={12}
        style={{ display: 'flex', padding: '18px 24px 8px 24px' }}
      >
        <DatePicker
          disableFuture
          label="From"
          openTo="month"
          views={['year', 'month', 'day']}
          value={fieldValues.startDate}
          onChange={(newValue) => {
            setFieldValues({ ...fieldValues, startDate: newValue });
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                style: { 'box-sizing': 'border-box' },
              }}
            />
          )}
        />
        <DatePicker
          disableFuture
          label="To"
          openTo="month"
          views={['year', 'month', 'day']}
          value={fieldValues.endDate}
          onChange={(newValue) => {
            setFieldValues({ ...fieldValues, endDate: newValue });
          }}
          renderInput={(params) => (
            <TextField {...params} style={{ marginLeft: 10 }} />
          )}
        />
        <Button
          style={{
            backgroundColor: '#006AB4',
            marginLeft: 10,
            color: '#FFF',
            margin: '5px 0px 5px 10px',
            padding: '0px 20px',
          }}
        >
          Refine
        </Button>
      </Grid>
    </LocalizationProvider>
  );
};

export default Filter;
