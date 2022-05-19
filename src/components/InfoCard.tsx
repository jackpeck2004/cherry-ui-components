import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import {
  cloneElement,
  FC,
  FunctionComponentElement,
  PropsWithChildren,
  useState,
} from "react";
import { BlurDetails } from "./BlurDetails";

export interface IDetailsProps {
  showDetails?: boolean;
  isLoading?: boolean;
  onRequestButtonClick?: () => void;
}

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
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const onRequestButtonClick = () => {
    setShowDetails(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

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
                {isLoading ? (
                  <CircularProgress
                    size={25}
                    variant="indeterminate"
                    sx={{ color: "white"}}
                  />
                ) : (
                  <>
                    {showDetails ? (
                      <Typography
                        variant={"h6"}
                        color={"white"}
                        sx={{ fontFamily: "ComoW01-SemiBold" }}
                      >
                        {topNumber}
                      </Typography>
                    ) : (
                      <BlurDetails>
                        <Typography
                          variant={"h6"}
                          color={"white"}
                          sx={{ fontFamily: "ComoW01-SemiBold" }}
                        >
                          {topNumber}
                        </Typography>
                      </BlurDetails>
                    )}
                  </>
                )}
              </Box>
            ) : null}
          </Grid>
          <Grid>
            {cloneElement(children as FunctionComponentElement<IDetailsProps>, {
              showDetails,
              isLoading,
              onRequestButtonClick,
            })}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
