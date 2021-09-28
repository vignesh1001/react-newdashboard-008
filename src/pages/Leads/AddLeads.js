import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useStore } from '../../custom-hooks/useStore';
import { Context } from '../../context/store';
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
    startDate: new Date(),
    endDate: new Date(),
    selectedStore: '',
  });
  const { state, dispatch } = useContext(Context);
  const classes = useStyles();
  const handleClose = () => {
    setShowing(!isShowing);
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
          width: '70%',
          backgroundColor: '#FFF',
          border: '2px solid #000',
          boxShadow: 24,
          padding: 4,
        }}
      >
        <Grid className={'col-12'}>
          <h2>Customer Information</h2>
        </Grid>
        <Grid className={'col-12'}>
          <Box sx={{ minWidth: 160, marginLeft: 12 }}>
            <FormControl fullWidth>
              <TextField />
            </FormControl>
          </Box>
        </Grid>
        <Grid className={'col-12'}></Grid>
      </Grid>
    </Modal>
  );
};

export default AddLeads;
