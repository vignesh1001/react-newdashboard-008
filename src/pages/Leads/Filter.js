/** @format */

import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStore } from '../../custom-hooks/useStore';
import { Context } from '../../context/store';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { makeStyles } from '@material-ui/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import AddLeads from './AddLeads';

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
    selectedStore: '',
  });
  const { state, dispatch } = useContext(Context);
  const classes = useStyles();

  useEffect(() => {}, []);
  const [isShowAddModal, setShowAddModal] = useState(false);
  const handleStoreFilter = (event) => {
    setFieldValues({ ...fieldValues, selectedStore: event.target.value });
  };
  const openAddModal = () => {
    setShowAddModal(!isShowAddModal);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid
        container
        style={{ display: 'flex', padding: '18px 24px 8px 24px' }}
      >
        <Grid item xs={5} md={5} xl={5} sm={5}>
          <DatePicker
            disableFuture
            label="From"
            views={['year', 'month', 'day']}
            value={fieldValues.startDate}
            onChange={(newValue) => {
              setFieldValues({ ...fieldValues, startDate: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  style: {
                    'box-sizing': 'border-box',
                    minHeight: 45,
                    width: 100,
                  },
                }}
              />
            )}
          />
          <DatePicker
            disableFuture
            label="To"
            views={['year', 'month', 'day']}
            value={fieldValues.endDate}
            onChange={(newValue) => {
              setFieldValues({ ...fieldValues, endDate: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                style={{ marginLeft: 10 }}
                inputProps={{
                  style: {
                    'box-sizing': 'border-box',
                    minHeight: 45,
                    width: 100,
                  },
                }}
              />
            )}
          />
          <Button
            style={{
              backgroundColor: '#006AB4',
              color: '#FFF',
              adding: '0px 20px',
              height: 45,
              fontWeight: 'bold',
              fontSize: 17,
              padding: '0 16px',
              borderRadius: 12,
              marginLeft: 10,
            }}
          >
            Refine
          </Button>
        </Grid>
        <Grid item xs={2} md={2} xl={2} sm={2}>
          <FormControl fullWidth>
            <InputLabel id="input-store-label">Search by Store</InputLabel>
            <Select
              labelId="input-store-label"
              id="store-id"
              value={fieldValues.selectedStore}
              label="Search by Store"
              onChange={handleStoreFilter}
            >
              <MenuItem value={10}>Location - 12334</MenuItem>
              <MenuItem value={20}>Location - 74352</MenuItem>
              <MenuItem value={30}>Location - 554753</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={5}
          md={5}
          xl={5}
          sm={5}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 12px',
            alignItems: 'center',
          }}
        >
          <div>Export :</div>
          <PrimaryButton label="Add Leads" onClick={openAddModal}/>
        </Grid>
      </Grid>
      {isShowAddModal && <AddLeads />}
    </LocalizationProvider>
  );
};

export default Filter;
