import React from "react";
import {
  HomeContainer,
  GridImage,
  HomeTitleContainer,
  HomeFeatureProductionTitle,
  TestText,
} from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";

const HomeImage1 = require("../../Assets/home-1.png");
const HomeImage2 = require("../../Assets/home-2.png");
const HomeImage3 = require("../../Assets/home-3.png");

const Home = () => {
  return (
    <HomeContainer>
      {/* <div className="header">codegrid</div> */}

      <div className="container">
        <div className="text-wrapper">
          <TestText className="text-1">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-2">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-3">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-4">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-5">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-6">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-7">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-8">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-9">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-10">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
          <TestText className="text-11">
            <span>Pure</span>
            <span>Divilment</span>
          </TestText>
        </div>
      </div>
      <Grid container>
        <GridImage
          xs={12}
          md={4}
          sx={{
            backgroundImage: `url(${HomeImage1})`,
          }}
        />
        <GridImage
          xs={12}
          md={4}
          sx={{
            backgroundImage: `url(${HomeImage2})`,
          }}
        />
        <GridImage
          xs={12}
          md={4}
          sx={{
            backgroundImage: `url(${HomeImage3})`,
          }}
        />
        <HomeTitleContainer sx={{ position: { xs: "fixed", md: "absolute" } }}>
          <HomeFeatureProductionTitle>Baths</HomeFeatureProductionTitle>
          <Typography sx={{ textTransform: "uppercase", fontWeight: 700 }}>
            Now Showing
          </Typography>
        </HomeTitleContainer>
      </Grid>
    </HomeContainer>
  );
};

export default Home;
