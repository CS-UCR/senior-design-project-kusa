import { TextField } from "@mui/material";
import React from "react";

export const LoginField: React.FC<any> = ({
    children,
    styles,
    required,
    error,
    helperText,
    setState,
    type,
}) => (
    <TextField
        required={required}
        defaultValue={children}
        onChange={setState ? (e) => setState(e.target.value) : () => {}}
        aria-describedby="component-helper-text"
        fullWidth
        sx={{
            boxShadow: 2,
            textColor: "secondary.contrastText",
            borderWidth: "1px",
            borderColor: "secondary.contrastText !important",
            ...styles,
        }}
        error={error}
        helperText={helperText}
        type={type}
        variant="filled"
    />
);
