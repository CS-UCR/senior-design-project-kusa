import { Typography } from "@mui/material";

export const KusaHeader:React.FC<any> = ({children, styles}) => {
    return (
        <Typography
            variant="h4"
            component="h4"
            sx={{ marginTop: "4rem", marginBottom: "1rem", fontWeight: "600", color: 'secondary.contrastText', ...styles}}
        >
            {children}
        </Typography>
    );
};
