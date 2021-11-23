import { Button } from "@mui/material";

export const KusaButton: React.FC<any> = ({ label, color, styles }) => (
    <Button
        variant="outlined"
        color={color}
        sx={{
            borderRadius: 10,
            borderWidth: 2,
            fontSize: "1.2rem",
            textTransform: "lowercase",
            ...styles,
        }}
    >
        {label}
    </Button>
);
