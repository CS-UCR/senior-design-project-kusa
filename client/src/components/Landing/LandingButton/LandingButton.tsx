import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const LandingButton = styled(Button)(({ }) => ({
  color: '#FDED5E',
  backgroundColor: '#1E4418',
  '&:hover': {
    backgroundColor: '#4a7843',
  },
  border:'solid',
  borderColor:'yellow',
  borderRadius: 25,
  borderWidth:2,
  fontSize: "1.8rem",
  marginLeft: '-1.8rem',
  marginTop: '1.8rem',
  textTransform: "lowercase",
  width: '200px',
  

}));
