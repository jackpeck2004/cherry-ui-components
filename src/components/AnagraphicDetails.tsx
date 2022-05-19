import { Box, List } from "@mui/material";
import { Detail } from "./Detail";

import {
  DriveFileRenameOutline,
  Home,
  HourglassBottom,
  Person,
  Phone,
  Wc,
} from "@mui/icons-material";
import { FC, useState } from "react";
import { RequestButton } from "./RequestButton";
import { BlurDetails } from "./BlurDetails";

export const AnagraphicDetails: FC = () => {
  const [showAnagraphic, setShowAnagraphic] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleLoadAnagraphic = () => {
    setShowAnagraphic(true);
    setIsLoading(true);
    setTimeout(() => {
      setData({
        name: "Juan Carlos",
        lastName: "Perez",
        age: "30",
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <List>
      <Detail
        icon={<Person sx={{ color: "text.secondary" }} />}
        title={"Nome"}
        value={"John Doe"}
      />
      {showAnagraphic ? (
        <>
          <Detail
            icon={<HourglassBottom sx={{ color: "text.secondary" }} />}
            title={"Età"}
            value={"60"}
            isLoading={isLoading}
            divider
          />
          <Detail
            icon={<Wc sx={{ color: "text.secondary" }} />}
            title={"Sesso"}
            value={"Maschio"}
            isLoading={isLoading}
            divider
          />
          <Detail
            icon={<Home sx={{ color: "text.secondary" }} />}
            title={"Residenza"}
            value={"Via Hoepli 3/C, 20121 Milano, MI"}
            isLoading={isLoading}
            divider
          />
          <Detail
            icon={<Phone sx={{ color: "text.secondary" }} />}
            title={"Cellulare"}
            value={"1111111111"}
            isLoading={isLoading}
            divider
          />
        </>
      ) : (
        <>
          <RequestButton
            text="Richiedi Anagrafica"
            icon={<DriveFileRenameOutline />}
            handleRequest={handleLoadAnagraphic}
          />
          <BlurDetails>
            <Detail
              icon={<HourglassBottom sx={{ color: "text.secondary" }} />}
              title={"Età"}
              value={"64"}
              divider
            />
            <Detail
              icon={<Wc sx={{ color: "text.secondary" }} />}
              title={"Sesso"}
              value={"Maschio"}
              divider
            />
            <Detail
              icon={<Home sx={{ color: "text.secondary" }} />}
              title={"Residenza"}
              value={"Via Hoepli 3/C, 20121 Milano, MI"}
              divider
            />
            <Detail
              icon={<Phone sx={{ color: "text.secondary" }} />}
              title={"Cellulare"}
              value={"1111111111"}
              divider
            />
          </BlurDetails>
        </>
      )}
    </List>
  );
};
