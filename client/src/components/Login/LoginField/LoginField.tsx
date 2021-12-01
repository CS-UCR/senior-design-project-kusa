import Input from '@mui/material/Input';
import { Box, Typography } from "@mui/material";
import { SetStateAction } from 'react';
import React from 'react';


export const LoginField: React.FC<any> = ({ children, styles }) => (
    
    <Box >
        <Input
          id="component-helper"
          value= {children}
        //   onChange={handleChange}
          disableUnderline
          aria-describedby="component-helper-text"
          fullWidth
          style={{ padding:"15px", fontSize: 25}}
          sx={{
            boxShadow: 2,
            borderRadius: 15,
            height: "5rem",
            backgroundColor: "secondary.contrastText",
            alignItems: "bottom",
            verticalAlign: "text-bottom",
            justifyContent: "center",
            ...styles,
        }}
        />
    </Box>
);
