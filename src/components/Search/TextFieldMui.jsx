/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled((props) => (
    <TextField {...props} />
  ))(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.palette.mode === 'dark' ? '#e2f2ff' : '#07081c',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#282c3dbf' : '#2d6ee7bf',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#e2f2ff' : '#07081c',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.mode === 'dark' ? '#e2f2ff' : '#07081c',
    },
  },
}));

export default CssTextField;
