import React, { useEffect, useState } from "react";
import { Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  ProductionsReelContainer,
  Reel,
  ReelItem,
  ProductionHeroImage,
} from "./styles";
import { ProductionData } from "../../Data/ProductionData";
import ProductionContentLayout from "../../Components/ProductionContent";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ScrollTop } from "../../Components/ScrollTop";

// https://stackoverflow.com/questions/8944456/css3-transition-different-transition-for-in-and-out-or-returning-from-tran

const scrollToProduction = () => {
  setTimeout(function () {
    let production = document.querySelector("#selectedProduction") ?? undefined;

    if (production) production.scrollIntoView();
  }, 1000);
};

const Productions = () => {
  const theme = useTheme();
  const id = useParams<{ id: string }>();
  const [heroImage, setHeroImage] = useState("");
  const [selectProduction, setSelectProduction] = useState(id.id ? id.id : "0");

  const white = theme.palette.white.main;

  const SelectedProduction = ProductionData.filter((production) => {
    return production.production.id === selectProduction;
  });

  useEffect(() => {
    scrollToProduction();

    if (SelectedProduction.length > 0) {
      setHeroImage(SelectedProduction[0].production.coverImage);
    }
  }, [selectProduction, SelectedProduction]);

  let condition =
    heroImage === white ||
    SelectedProduction[0]?.production.status === "In Development";

  return (
    <>
      <Helmet>
        <title>Productions | Pure Divilment Pictures</title>
        <meta
          name="description"
          content={
            "Scroll through the company's productions from short films to feature films to music videos and more."
          }
        />
        <meta
          property="og:title"
          content={"Productions | Pure Divilment Pictures"}
        />
        <meta
          property="og:description"
          content={"Have a look through our work and see for yourself!"}
        />
      </Helmet>

      <ProductionsReelContainer
        id="all-productions"
        sx={{
          flexGrow: 1,
        }}
      >
        <Reel
          container
          justifyContent={{ xs: "center", lg: "unset" }}
          columnSpacing={0.3}
          rowSpacing={{ xs: 3, md: 0 }}
          xs={12}
          sx={{ "div:first-of-type": { paddingLeft: 0 } }}
        >
          {ProductionData.map((item, index) => {
            return (
              <Grid
                sx={{
                  py: { lg: 0 },
                  position: "relative",
                }}
                key={item.production.title}
                xs={10}
                sm={7}
                md={3}
                onMouseOver={() => {
                  if (Number(selectProduction) !== index + 1)
                    setSelectProduction("");
                  item.production.coverImage !== ""
                    ? setHeroImage(item.production.coverImage)
                    : setHeroImage(white);
                }}
                onMouseOut={() => setHeroImage("")}
              >
                <ReelItem
                  aria-label={`Link to view the production, ${item.production.title}}`}
                  className={
                    Number(selectProduction) === index + 1
                      ? "active-production"
                      : ""
                  }
                  sx={{
                    "&.Mui-disabled": {
                      color: white,
                    },
                  }}
                  onClick={() => {
                    scrollToProduction();
                    setSelectProduction(item.production.id);
                    setHeroImage(item.production.coverImage);
                  }}
                >
                  {item.production.logo}

                  {item.production.status === "In Development" && (
                    <Typography
                      variant="body2"
                      sx={{
                        position: "absolute",
                        top: "70%",
                        display: {
                          xs: "block",
                          md: "none",
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      Coming Soon
                    </Typography>
                  )}
                </ReelItem>
              </Grid>
            );
          })}
        </Reel>

        {/* Hover image container */}
        <ProductionHeroImage
          sx={{
            background:
              selectProduction.length !== 1
                ? heroImage === white
                  ? heroImage
                  : `url("${heroImage}") top center / cover`
                : `url(${heroImage}) top center / cover`,
            height:
              SelectedProduction.length > 0 &&
              SelectedProduction[0]?.production.status !== "In Development"
                ? { md: "700px" }
                : 0,
            marginTop:
              (heroImage === " " && SelectedProduction.length === 0) ||
              heroImage === white ||
              SelectedProduction[0]?.production.status === "In Development"
                ? "unset"
                : theme.spacing(-20),
          }}
        >
          {condition && (
            <Typography variant="h4" color="primary" textAlign="center">
              Coming Soon
            </Typography>
          )}
        </ProductionHeroImage>
      </ProductionsReelContainer>

      {/* Show selected production */}
      {SelectedProduction &&
      SelectedProduction[0]?.production.status !== "In Development"
        ? SelectedProduction.map((production) => {
            return (
              <React.Fragment key={production.production.id}>
                <ProductionContentLayout Production={production.production} />
                <ScrollTop />
              </React.Fragment>
            );
          })
        : null}
    </>
  );
};

export default Productions;
