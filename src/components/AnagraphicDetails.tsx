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
          />
          <Detail
            icon={<Wc sx={{ color: "text.secondary" }} />}
            title={"Sesso"}
            value={"Maschio"}
            isLoading={isLoading}
          />
          <Detail
            icon={<Home sx={{ color: "text.secondary" }} />}
            title={"Residenza"}
            value={"Via Hoepli 3/C, 20121 Milano, MI"}
            isLoading={isLoading}
          />
          <Detail
            icon={<Phone sx={{ color: "text.secondary" }} />}
            title={"Cellulare"}
            value={"1111111111"}
            isLoading={isLoading}
          />
        </>
      ) : (
        <>
          <RequestButton
            text="Richiedi Anagrafica"
            icon={<DriveFileRenameOutline />}
            handleRequest={handleLoadAnagraphic}
          />
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
            <Detail
              icon={<HourglassBottom sx={{ color: "text.secondary" }} />}
              title={"Età"}
              value={"64"}
            />
            <Detail
              icon={<Wc sx={{ color: "text.secondary" }} />}
              title={"Sesso"}
              value={"Maschio"}
            />
            <Detail
              icon={<Home sx={{ color: "text.secondary" }} />}
              title={"Residenza"}
              value={"Via Hoepli 3/C, 20121 Milano, MI"}
            />
            <Detail
              icon={<Phone sx={{ color: "text.secondary" }} />}
              title={"Cellulare"}
              value={"1111111111"}
            />
          </Box>
        </>
      )}
    </List>
  );
};
