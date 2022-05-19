import { ListItem, Grid, Box, Typography, Skeleton, Divider } from "@mui/material";
import { ReactNode, FC } from "react";

interface IDetailPorps {
  icon: ReactNode;
  title: string;
  value: string;
  isLoading?: boolean;
}

export const Detail: FC<IDetailPorps> = ({ icon, title, value, isLoading }) => {
  return (
    <>
      <ListItem>
        <Grid container xs={12} justifyContent="space-between">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {icon}
            <Typography
              variant={"h6"}
              color={"text.secondary"}
              fontWeight={600}
              sx={{ ml: 2, fontFamily: "ComoW01-SemiBold" }}
            >
              {title}:
            </Typography>
          </Box>
          {isLoading ? (
            <Skeleton variant="text" width="200px" />
          ) : (
            <Typography
              variant={"h6"}
              fontWeight={600}
              sx={{ fontFamily: "ComoW01-SemiBold" }}
            >
              {value}
            </Typography>
          )}
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
};