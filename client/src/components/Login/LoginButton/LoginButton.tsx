import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const LoginButton = styled(Button)(({ theme }) => ({
  color: '#FDED5E',
  backgroundColor: '#1E4418',
  '&:hover': {
    backgroundColor: '#4a7843',
  },
  textTransform: "lowercase",
  fontSize: "1.6rem",
  borderRadius: 25,
  border:'solid',
  borderWidth:2,
  borderColor:'yellow',
  width: '200px',


}));
