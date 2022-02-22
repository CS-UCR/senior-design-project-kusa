import { Box } from "@mui/system";
import * as React from "react";

interface KusaChatBoxProps {
    height?: number | string;
    width?: number | string;
    styles?: any,
    children: React.ReactChild;
}
export const KusaChatBox: React.FC<KusaChatBoxProps> = ({
    height,
    width,
    styles,
    children,
}) => (
    <Box
        sx={{
            borderRadius: 2,
            p: 1,
            width: width,
            height: "87vh",
            backgroundColor: "secondary.main",
            textAlign: "left",
            boxShadow: 1,
            flex: 5.5,
            ...styles
        }}
    >
        {children}
    </Box>
);
