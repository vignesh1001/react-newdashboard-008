import React from 'react';
import Button from '@mui/material/Button';

const PrimaryButton = (props) => (
  <Button
    {...props}
    style={{
      backgroundColor: '#6F0918FF',
      color: '#FFF',
      height: 45,
      fontWeight: 'bold',
      fontSize: 17,
      padding: '0 16px',
      borderRadius: 12,
    }}
  >
    {props.label}
  </Button>
);

export default PrimaryButton;
