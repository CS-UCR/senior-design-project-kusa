import { Box } from "@mui/system";
import * as React from "react";

interface KusaChatMenuProps {
    height?: number | string;
    width?: number | string;
    styles?: any,
    children: React.ReactChild;
}
export const KusaChatMenu: React.FC<KusaChatMenuProps> = ({
    height,
    width,
    styles,
    children,
}) => (
    <Box
        sx={{
            borderRadius: 2,
            p: 2,
            backgroundColor: "secondary.main",
            textAlign: "left",
            boxShadow: 1,
            flex: 1.25,
            ...styles
        }}
    >
        {children}
    </Box>
);
