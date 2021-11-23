import { Typography } from "@mui/material";

export const KusaHeader: React.FC<any> = ({ children, color, styles }) => {
    const colorText = color ? color : "secondary.contrastText";
    return (
        <Typography
            variant="h4"
            component="h4"
            sx={{
                marginTop: "4rem",
                marginBottom: "1rem",
                fontWeight: "600",
                color: colorText,
                verticalAlign: "bottom",
                ...styles,
            }}
        >
            {children}
        </Typography>
    );
};
