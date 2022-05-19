import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const BlurDetails: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box
      sx={{
        filter: "blur(4px)",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        zIndex: 1,
      }}
    >
      {children}
    </Box>
  );
};
