import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { borders } from '@mui/system';

export const LandingButton = styled(Button)(({ }) => ({
  color: '#FDED5E',
  backgroundColor: '#1E4418',
  '&:hover': {
    backgroundColor: '#4a7843',
  },
  textTransform: "lowercase",
  fontSize: "1.8rem",
  borderRadius: 25,
  border:'solid',
  borderWidth:2,
  borderColor:'yellow',
  width: '200px',

}));
