import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface InfoCardProps {
  title: string;
  subtitle: string;
  topNumber?: number;
}

export const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  title,
  subtitle,
  children,
  topNumber,
}) => {
  return (
    <Card sx={{ minWidth: 300, transition: "250ms" }}>
      <CardContent>
        <Grid container direction="column">
          <Grid container direction="row" justifyContent="space-between">
            <Grid container direction="column" xs={8}>
              <Grid item>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  component="div"
                  style={{ float: "left" }}
                  sx={{
                    fontFamily: "ComoW01-Regular",
                  }}
                >
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ mb: 1.5 }}
                  fontWeight={500}
                  color="text.secondary"
                  style={{
                    fontFamily: "ComoW01-SemiBold",
                  }}
                >
                  {subtitle}
                </Typography>
              </Grid>
            </Grid>
            {topNumber ? (
              <Box
                sx={{
                  backgroundColor: "error.main",
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant={"h6"}
                  color={"white"}
                  sx={{ fontFamily: "ComoW01-SemiBold" }}
                >
                  {topNumber}
                </Typography>
              </Box>
            ) : null}
          </Grid>
          <Grid>{children}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
