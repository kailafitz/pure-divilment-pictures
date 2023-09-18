import React, { useEffect, useState } from "react";
import { Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  ProductionsReelContainer,
  Reel,
  ReelItem,
  ProductionCoverImage,
} from "./styles";
import { ProductionData } from "../../Data/ProductionData";
import ProductionContentLayout from "../../Components/ProductionContent";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
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
  const [hoverImage, setHoverImage] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [selectProduction, setSelectProduction] = useState(id.id ? id.id : "0");

  const white = theme.palette.white.main;

  const SelectedProduction = ProductionData.filter((production) => {
    return production.production.id === selectProduction;
  });

  useEffect(() => {
    scrollToProduction();
    if (SelectedProduction.length > 0) {
      setHeaderImage(SelectedProduction[0].production.coverImage);
    }
    return () => {};
  }, [selectProduction, SelectedProduction]);

  let condition =
    hoverImage === white ||
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
      <Loader title="Productions" />
      <ProductionsReelContainer
        id="all-productions"
        sx={{
          flexGrow: SelectedProduction.length > 0 ? 0 : 1,
        }}
      >
        <Reel
          container
          justifyContent={{ xs: "center", lg: "unset" }}
          columnSpacing={0.3}
          rowSpacing={{ xs: 3, md: 0 }}
          xs={12}
        >
          {ProductionData.map((item) => {
            return (
              <Grid
                sx={{
                  py: { lg: 0 },
                }}
                key={item.production.title}
                xs={10}
                md={3}
              >
                <ReelItem
                  onClick={() => {
                    scrollToProduction();
                    setSelectProduction(item.production.id);
                    setHoverImage(item.production.coverImage);
                  }}
                  onMouseOver={() => {
                    setSelectProduction("");
                    item.production.coverImage !== "Coming Soon"
                      ? setHoverImage(item.production.coverImage)
                      : setHoverImage(white);
                  }}
                  onMouseOut={() => setHoverImage("")}
                >
                  {item.production.logo}
                </ReelItem>
              </Grid>
            );
          })}
        </Reel>

        {/* Hover image container */}
        <ProductionCoverImage
          // className="hover-image"
          sx={{
            // opacity: 0,
            background:
              selectProduction.length !== 1
                ? hoverImage === white
                  ? hoverImage
                  : `url("${hoverImage}") top center / cover fixed`
                : `url(${headerImage}) top center / contain fixed`,
            transition: "opacity 1s ease-in",
            // marginTop:
            //   hoverImage !== "#f9f9f9" && headerImage !== "Coming Soon"
            //     ? theme.spacing(-20)
            //     : 0,
          }}
        >
          {condition && (
            <Typography variant="h4" color="primary" textAlign="center">
              Coming Soon
            </Typography>
          )}
        </ProductionCoverImage>
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
