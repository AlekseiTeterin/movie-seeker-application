/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const ButtonSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 44,
  height: 26,
  padding: 6,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#10CCC3',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#9ae6e3',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 20,
    height: 20,
  },
  '& .MuiSwitch-track': {
    borderRadius: 7,
    backgroundColor: theme.palette.mode === 'light' ? '#9E9E9E' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
  '&.MuiSwitch-root .MuiSwitch-thumb': {
    boxShadow:
      '0px 0px 1px 1px rgba(0,0,0,0.2),0px 1px 1px 1px rgba(0, 0, 0, 0.14),0px 0px 1px 1px rgba(0, 0, 0, 0.12)',
  },
  '&.MuiSwitch-root .Mui-checked .MuiSwitch-thumb': {
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
}));

export default ButtonSwitch;
