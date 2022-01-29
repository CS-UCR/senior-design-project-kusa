import { TextField } from "@mui/material";
import React from "react";

export const LoginField: React.FC<any> = ({
    children,
    styles,
    required,
    error,
    helperText,
}) => (
    <TextField
        required={required}
        defaultValue={children}
        aria-describedby="component-helper-text"
        fullWidth
        sx={{
            boxShadow: 2,
            textColor: "neutral.main",
            ...styles,
        }}
        error={error}
        helperText={helperText}
        variant="filled"
    />
);
