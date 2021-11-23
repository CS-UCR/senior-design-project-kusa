import * as React from "react";
import { Box } from "@mui/system";
import { UserContext } from "../../../contexts/UserContext/UserContext";

interface BoxParams {
    width: number;
    height: number;
    children?: React.ReactChild | React.ReactChild[],
  }

export const KusaBox: React.FC<BoxParams> = ({ width, height, children}) => {
    const userContext = React.useContext(UserContext);
    return (
        <Box
            sx={{
                height: height,
                width: width,
                backgroundColor: userContext.darkMode ? "grayBox" : "brownBox",
            }}
        >
          {children}
        </Box>
    );
};
