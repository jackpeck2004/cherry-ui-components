import { Card, CardContent, Grid, Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";

interface InfoCardProps {
  title: string;
  subtitle: string;
}

export const InfoCard: FC<PropsWithChildren<InfoCardProps>> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Card sx={{ minWidth: 300, transition: "250ms" }}>
      <CardContent>
        <Grid container direction="column">
          <Grid item xs={8}>
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
          <Grid>
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
          <Grid>{children}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};