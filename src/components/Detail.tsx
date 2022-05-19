import {
  ListItem,
  Grid,
  Box,
  Typography,
  Skeleton,
  Divider,
  LinearProgress,
} from "@mui/material";
import { ReactNode, FC } from "react";

interface IDetailPorps {
  icon?: ReactNode;
  title: string;
  value: string | number;
  isLoading?: boolean;
  divider?: boolean;
  progress?: boolean;
  percentage?: boolean;
  secondaryValue?: string | number;
}

export const Detail: FC<IDetailPorps> = ({
  icon,
  title,
  value,
  isLoading,
  divider,
  progress,
  percentage,
  secondaryValue,
}) => {
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
            <Grid container direction="row" sx={{ width: "fit-content"}}>
              {secondaryValue && (
                <>
                  <Typography
                    variant={"h6"}
                    fontWeight={600}
                    sx={{ fontFamily: "ComoW01-SemiBold" }}
                  >
                    {secondaryValue}
                  </Typography>
                  <Divider orientation="vertical" sx={{ mx: 2 }}/>
                </>
              )}
              <Typography
                variant={"h6"}
                fontWeight={600}
                sx={{ fontFamily: "ComoW01-SemiBold" }}
              >
                {typeof value === "number" && percentage ? `${value}%` : value}
              </Typography>
            </Grid>
          )}
        </Grid>
      </ListItem>
      {typeof value === "number" && progress && (
        <LinearProgress variant={isLoading ? "indeterminate" : "determinate"} value={value} color="error" />
      )}
      {divider && <Divider />}
    </>
  );
};
