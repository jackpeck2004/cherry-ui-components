import { Button, Typography } from "@mui/material";
import { FC, MouseEventHandler, ReactNode } from "react";

interface IRequestButtonProps {
    text: string;
    icon: ReactNode;
    handleRequest: MouseEventHandler<HTMLButtonElement>;
}
export const RequestButton: FC<IRequestButtonProps> = ({ text, icon, handleRequest }) => (
  <Button
    variant="contained"
    color="error"
    startIcon={icon}
    sx={{
      borderRadius: 2,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      opacity: 1,
      zIndex: 10,
    }}
    onClick={handleRequest}
  >
    <Typography
      variant={"h6"}
      fontFamily={"ComoW01-SemiBold"}
      sx={{ textTransform: "capitalize" }}
    >
        {text}
    </Typography>
  </Button>
);
