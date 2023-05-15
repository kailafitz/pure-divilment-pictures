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
              borderRight: {
                md: (theme) => `10px ${theme.palette.primary.main} solid`,
              },
              borderBottom: {
                xs: (theme) => `5px ${theme.palette.primary.main} solid`,
                md: "none",
              },
            },
          }}
        >
          <Grid xs={12} md={4}>
            <GridImage
              sx={{
                backgroundImage: `url(${HomeImage1})`,
                backgroundPosition: "top center",
              }}
            />
          </Grid>
          <Grid xs={12} md={4}>
            <GridImage
              sx={{
                backgroundImage: `url(${HomeImage2})`,
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid xs={12} md={4}>
            <GridImage
              sx={{
                backgroundImage: `url(${HomeImage3})`,
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <HomeTitleContainer
            // sx={{ position: { xs: "fixed", md: "absolute" } }}
            sx={{ position: "absolute" }}
          >
            <HomeFeatureProductionTitle>Baths</HomeFeatureProductionTitle>
            <Typography
              variant="h5"
              sx={{ textTransform: "uppercase", fontWeight: 700, mb: 4 }}
            >
              Now Showing
            </Typography>
            <PureDivilmentButton href="/productions" label="Our Productions" />
          </HomeTitleContainer>
        </Grid>
      </HomeContainer>
    </>
  );
};

export default Home;
