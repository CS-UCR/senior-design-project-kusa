import { Button } from "@mui/material";

export const KusaButton: React.FC<any> = ({ label, styles }) => (
    <Button variant="contained" sx={{ borderRadius: 10, ...styles }}>
        {label}
    </Button>
);
