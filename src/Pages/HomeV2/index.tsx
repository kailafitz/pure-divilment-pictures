import React from "react";
import {
  HomeContainer,
  GridImage,
  HomeTitleContainer,
  HomeFeatureProductionTitle,
} from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import PureDivilmentButton from "../../Components/Button";
import OpeningAnimation from "../../Components/OpeningAnimation";
import BillboardSwiper from "./BillboardSwiper";
import BillboardTextSwiper from "./BillboardTextSwiper";

const HomeImage1 = require("../../Assets/home-1.png");
const HomeImage2 = require("../../Assets/home-2.png");
const HomeImage3 = require("../../Assets/home-3.png");

const Home = () => {
  return (
    <>
      <OpeningAnimation />
      <HomeContainer>
        <Grid
          container
          sx={{
            flexGrow: 1,
            "& > div:nth-of-type(1), > div:nth-of-type(2)": {
              borderRight: { md: "10px black solid" },
              borderBottom: { xs: "5px black solid", md: "none" },
            },
          }}
        >
          <Grid xs={12} md={4}>
            <BillboardSwiper
              delay={2000}
              source1={HomeImage1}
              source2={HomeImage2}
              source3={HomeImage3}
            />
          </Grid>
          <Grid xs={12} md={4}>
            <BillboardSwiper
              delay={2200}
              source1={HomeImage1}
              source2={HomeImage2}
              source3={HomeImage3}
            />
          </Grid>
          <Grid xs={12} md={4}>
            <BillboardSwiper
              delay={2400}
              source1={HomeImage1}
              source2={HomeImage2}
              source3={HomeImage3}
            />
          </Grid>
          <BillboardTextSwiper />
        </Grid>
      </HomeContainer>
    </>
  );
};

export default Home;
