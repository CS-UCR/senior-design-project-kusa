import { Box, Input, Typography } from "@mui/material";

export const ProfileField: React.FC<any> = ({
    children,
    styles,
    onChange,
    value,
}) => (
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
        {onChange ? (
            <Input
                type="number"
                onChange={onChange}
                defaultValue={value}
                sx={{
                    paddingX:"1rem",
                    width: "100%",
                    height: "100%",
                    fontSize: "1.2rem",
                    lineHeight: "3.5rem",
                    maxWidth: "78ch",
                    textAlign: "center",
                }}
            />
        ) : (
            <Typography
                variant="subtitle1"
                fontSize="1.2rem"
                lineHeight={3.5}
                maxWidth="78ch"
                textAlign="center"
            >
                {children}
            </Typography>
        )}
    </Box>
);
