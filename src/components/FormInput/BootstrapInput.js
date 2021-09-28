import React, { useContext, useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import { FormControl, InputLabel } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: 24,
  },
  '& .MuiInputBase-input': {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const BootstrapFormInput = (props) => {
  return (
    <FormControl variant="standard" style={{ width: '100%' }}>
      <InputLabel
        shrink
        htmlFor={props.id}
        style={{ fontSize: 20, fontWeight: 'bold' }}
      >
        {props.label}
      </InputLabel>
      <BootstrapInput {...props} />
    </FormControl>
  );
};

export default BootstrapFormInput;
