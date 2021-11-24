import { Box, Typography } from "@mui/material";

export const ProfileField: React.FC<any> = ({ children, styles }) => (
    <Box
        sx={{
            boxShadow: 2,
            borderRadius: 2,
            height: "4rem",
            backgroundColor: "secondary.contrastText",
            alignItems: "bottom",
            verticalAlign: "text-bottom",
            justifyContent: "center",
            ...styles,
        }}
    >
        <Typography
            variant="subtitle1"
            fontSize="1.2rem"
            lineHeight={3.5}
            maxWidth="78ch"
            textAlign="center"
        >
            {children}
        </Typography>
    </Box>
);
