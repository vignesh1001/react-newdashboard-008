import React, { useContext, useEffect, useState } from 'react';
import { useStore } from '../../custom-hooks/useStore';
import { Context } from '../../context/store';
import BootstrapInput from '../../components/FormInput/BootstrapInput';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

import { makeStyles } from '@material-ui/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  OutlinedInput,
} from '@mui/material';

const useStyles = makeStyles({
  content: {
    height: `calc(100vh - 260px)`,
    width: '100%',
  },
});

const AddLeads = () => {
  // useStore hook for login
  let stores = useStore();
  const [isShowing, setShowing] = useState(true);
  const [fieldValues, setFieldValues] = React.useState({
    leadDate: new Date(),
    leadOrigin: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    vehicleMake: '',
    vehicleModal: '',
    vehicleType: '',
    vehicleYear: '',
  });
  const { state, dispatch } = useContext(Context);
  const classes = useStyles();
  const handleClose = () => {
    setShowing(!isShowing);
  };
  const handleChange =
    (inputName) =>
    ({ target }) => {
      setFieldValues({ ...fieldValues, [inputName]: target.value });
    };
  return (
    <Modal
      open={isShowing}
      onClose={handleClose}
      aria-labelledby="Add New Leads"
      aria-describedby="modal-modal-description"
    >
      <Grid
        container
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          backgroundColor: '#FFF',
          border: '2px solid #000',
          boxShadow: 24,
          padding: '4px 16px',
        }}
      >
        <Grid
          container
          className={'col-12'}
          style={{ width: '100%', justifyContent: 'flex-end' }}
        >
          <div
            style={{
              color: '#adadad',
              padding: '12px 0 12px 12px',
              fontSize: 28,
              textShadow: '1px 1px 2px #adadad',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={handleClose}
          >
            X
          </div>
        </Grid>
        <Grid container className={'row col-12'}>
          <h2 style={{ marginTop: -20, color: '#000' }}>
            Customer Information
          </h2>
        </Grid>
        <Grid container style={{ marginTop: 16 }}>
          <Grid item md={6} sm={6}>
            <FormControl
              style={{ width: '80%', marginLeft: -12, marginTop: 12 }}
            >
              <InputLabel
                shrink
                htmlFor="input-lead-date"
                style={{ marginTop: -14 }}
              >
                Lead Date
              </InputLabel>
              <DatePicker
                disableFuture
                label=""
                id="input-lead-date"
                views={['year', 'month', 'day']}
                value={fieldValues.leadDate}
                onChange={(newValue) => {
                  setFieldValues({ ...fieldValues, endDate: newValue });
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholfer="Lead Date"
                    id="input-lead-date"
                    style={{ marginLeft: 10 }}
                    inputProps={{
                      style: {
                        'box-sizing': 'border-box',
                        minHeight: 45,
                        width: '100%',
                      },
                    }}
                  />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item md={6} sm={6}>
            <FormControl style={{ width: '80%' }}>
              <InputLabel id="input-lead-origin-label">Lead Origin</InputLabel>
              <Select
                labelId="input-lead-origin-label"
                id="lead-origin-id"
                value={fieldValues.leadOrigin}
                label="Lead Origin"
                onChange={handleChange('leadOrigin')}
              >
                <MenuItem value={10}>Location - 1</MenuItem>
                <MenuItem value={20}>Location - 2</MenuItem>
                <MenuItem value={30}>Location - 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: 16 }}>
          <Grid item md={6} sm={6}>
            <BootstrapInput
              defaultValue=""
              id="input-lead-first-name"
              value={fieldValues.firstName}
              onChange={handleChange('firstName')}
              label="First Name"
              style={{ width: '80%' }}
              placeholder="First Name"
            />
          </Grid>
          <Grid item md={6} sm={6}>
            <BootstrapInput
              defaultValue=""
              id="input-lead-last-name"
              value={fieldValues.lastName}
              onChange={handleChange('lastName')}
              label="Last Name"
              style={{ width: '80%' }}
              placeholder="Last Name"
            />
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: 16 }}>
          <Grid item md={6} sm={6}>
            <BootstrapInput
              defaultValue=""
              id="input-lead-email"
              value={fieldValues.email}
              onChange={handleChange('email')}
              label="Email*"
              style={{ width: '80%' }}
              placeholder="Email"
            />
          </Grid>
          <Grid item md={6} sm={6}>
            <BootstrapInput
              defaultValue=""
              id="input-lead-phone-number"
              value={fieldValues.phoneNumber}
              onChange={handleChange('phoneNumber')}
              label="Phone Number*"
              style={{ width: '80%' }}
              placeholder="Phone Number"
            />
          </Grid>
        </Grid>

        {/*<!-- Vehicle Information -->*/}
        <Grid container className={'row col-12'}>
          <h2 style={{ color: '#000', margin: '30px 0 6px 0' }}>
            Vehicle Information
          </h2>
        </Grid>
        <Grid container>
          <Grid item md={6} sm={6}>
            <FormControl style={{ width: '80%', marginTop: 12 }}>
              <InputLabel id="input-vehicle-make-label">Make</InputLabel>
              <Select
                labelId="input-vehicle-make-label"
                id="vehicle-make-id"
                value={fieldValues.vehicleMake}
                label="Make"
                onChange={handleChange('vehicleMake')}
                placeholder="Make"
              >
                <MenuItem value={10}>Location - 1</MenuItem>
                <MenuItem value={20}>Location - 2</MenuItem>
                <MenuItem value={30}>Location - 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} sm={6}>
            <FormControl style={{ width: '80%', marginTop: 12 }}>
              <InputLabel id="input-vehicle-modal-label">Modal</InputLabel>
              <Select
                labelId="input-vehicle-modal-label"
                id="vehicle-modal-id"
                value={fieldValues.vehicleModal}
                label="Modal"
                onChange={handleChange('vehicleModal')}
              >
                <MenuItem value={10}>Location - 1</MenuItem>
                <MenuItem value={20}>Location - 2</MenuItem>
                <MenuItem value={30}>Location - 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: 16 }}>
          <Grid item md={6} sm={6}>
            <FormControl style={{ width: '80%', marginTop: 12 }}>
              <InputLabel id="input-vehicle-type-label">Type</InputLabel>
              <Select
                labelId="input-vehicle-type-label"
                id="vehicle-type-id"
                value={fieldValues.vehicleType}
                label="Type"
                onChange={handleChange('vehicleType')}
                placeholder="Type"
              >
                <MenuItem value={10}>Type - 1</MenuItem>
                <MenuItem value={20}>Type - 2</MenuItem>
                <MenuItem value={30}>Type - 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={6} sm={6}>
            <BootstrapInput
              defaultValue=""
              id="input-vehicle-year"
              value={fieldValues.vehicleYear}
              onChange={handleChange('vehicleYear')}
              label="Year"
              style={{ width: '80%' }}
              placeholder="Year"
            />
          </Grid>
        </Grid>

        {/* <!-- Footer --> */}
        <Grid
          container
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <Button
            style={{
              border: '2px solid #6f0918',
              marginRight: 24,
              height: 45,
              fontWeight: 'bold',
              fontSize: 17,
              padding: '0 14px',
              borderRadius: 12,
            }}
            onClick={handleClose}
          >
            Close
          </Button>
          <PrimaryButton label="Save" />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default AddLeads;
