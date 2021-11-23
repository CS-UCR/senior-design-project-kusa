import { Button } from "@mui/material";

export const KusaButton: React.FC<any> = ({
    label,
    color,
    styles,
    onClick,
}) => (
    <Button
        variant="outlined"
        color={color}
        sx={{
            boxShadow: 1,
            borderRadius: 10,
            borderWidth: 2,
            fontSize: "1.2rem",
            textTransform: "lowercase",
            ...styles,
        }}
        onClick={onClick}
    >
        {label}
    </Button>
);
