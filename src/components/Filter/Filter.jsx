import React from 'react';
import TextField from '@mui/material/TextField';

export default function Filter({ value, onChange }) {
  return (
      <TextField
        id="standard-basic"
        label="Filter"
        variant="standard"
        value={value}
        onChange={onChange}
      />
  );
}