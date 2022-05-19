import { Grid } from "@mui/material";
import { AnagraphicDetails } from "./components/AnagraphicDetails";
import { InfoCard } from "./components/InfoCard";


const App = () => {
  return (
    <Grid container spacing={2} sx={{ padding: "0 20px" }}>
      <Grid item xs={4}>
        <InfoCard title={"Anagrafica"} subtitle={"Informazioni Anagrafiche"}>
          <AnagraphicDetails />
        </InfoCard>
      </Grid>
      <Grid item xs={4}>
        <InfoCard title={"Procedure"} subtitle={"Procedure in tribunale"}>
          <AnagraphicDetails />
        </InfoCard>
      </Grid>
      <Grid item xs={4}>
        <InfoCard title={"Lotti"} subtitle={"Lotti in asta"}>
          <AnagraphicDetails />
        </InfoCard>
      </Grid>
    </Grid>
  );
};

export default App;
