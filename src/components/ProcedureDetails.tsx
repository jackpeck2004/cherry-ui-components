import { List } from "@mui/material";
import { FC, useState } from "react";
import { BlurDetails } from "./BlurDetails";
import { Detail } from "./Detail";
import { RequestButton } from "./RequestButton";

export const ProcedureDetails: FC = () => {
  const [showProcedureDetails, setShowProcedureDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadProcedure = () => {
    setShowProcedureDetails(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  if (!showProcedureDetails) {
    return (
      <List disablePadding>
        <RequestButton
          text="Richedi Procedure"
          icon={null}
          handleRequest={handleLoadProcedure}
        />
        <BlurDetails>
          <List>
            <Detail
              value={80}
              title={"PC"}
              secondaryValue={10}
              progress
              percentage
            />
            <Detail
              value={60}
              title={"ESIM"}
              secondaryValue={12}
              progress
              percentage
            />
            <Detail
              value={20}
              title={"ESM"}
              secondaryValue={4}
              progress
              percentage
            />
          </List>
        </BlurDetails>
      </List>
    );
  }

  return (
      <List>
        <Detail
          value={80}
          title={"PC"}
          secondaryValue={10}
          progress
          percentage
          isLoading={isLoading}
        />
        <Detail
          value={60}
          title={"ESIM"}
          secondaryValue={12}
          progress
          percentage
          isLoading={isLoading}
        />
        <Detail
          value={20}
          title={"ESM"}
          secondaryValue={4}
          progress
          percentage
          isLoading={isLoading}
        />
      </List>
  );
};
