import React from "react";
import { HomeContainer } from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import OpeningAnimation from "../../Components/OpeningAnimation";
import BillboardVideoSwiper from "./BillboardVideoSwiper";

const Home = () => {
  return (
    <>
      {/* <OpeningAnimation /> */}
      <HomeContainer>
        <Grid container sx={{ flexGrow: 1, height: "100%" }}>
          <Grid xs={12} sx={{ height: "fill-available" }}>
            <BillboardVideoSwiper />
          </Grid>
        </Grid>
      </HomeContainer>
    </>
  );
};

export default Home;
