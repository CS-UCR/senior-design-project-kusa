import { Box } from "@mui/system";
import * as React from "react";

interface KusaBoxProps {
    height?: number | string;
    width?: number | string;
    styles?: any,
    children: React.ReactChild;
}
export const KusaBox: React.FC<KusaBoxProps> = ({
    height,
    width,
    styles,
    children,
}) => (
    <Box
        sx={{
            borderRadius: 2,
            p: 2,
            height: height,
            width: width,
            backgroundColor: "secondary.main",
            textAlign: "left",
            boxShadow: 1,
            ...styles
        }}
    >
        {children}
    </Box>
);
