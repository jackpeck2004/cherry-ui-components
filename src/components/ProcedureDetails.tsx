import { Description } from "@mui/icons-material";
import { List } from "@mui/material";
import { FC, useState } from "react";
import { BlurDetails } from "./BlurDetails";
import { Detail } from "./Detail";
import { IDetailsProps } from "./InfoCard";
import { RequestButton } from "./RequestButton";

export interface IProcedureDetailsProps extends IDetailsProps {
}

export const ProcedureDetails: FC<IProcedureDetailsProps> = ({ showDetails, isLoading, onRequestButtonClick }) => {

  const handleLoadProcedure = () => {
    if (onRequestButtonClick) {
      onRequestButtonClick();
    }
  };

  if (!showDetails) {
    return (
      <List disablePadding>
        <RequestButton
          text="Richedi Procedure"
          icon={<Description />}
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
