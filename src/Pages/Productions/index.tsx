import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  ProductionsReelContainer,
  Reel,
  ReelItem,
  ProductionCoverImage,
} from "./styles";
import { ProductionData } from "../../Data/ProductionData";
import ProductionContentLayout from "../../Components/ProductionContentLayout";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";

const test = require("../../Assets/baths-cover-photo.png");

// https://stackoverflow.com/questions/8944456/css3-transition-different-transition-for-in-and-out-or-returning-from-tran

const Productions = () => {
  const id = useParams<{ id: string }>();
  const [hoverImage, setHoverImage] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [selectProduction, setSelectProduction] = useState(id.id ? id.id : "0");

  const SelectedProduction = ProductionData.filter((production) => {
    return production.production.id === selectProduction;
  });

  const scrollToProduction = () => {
    setTimeout(function () {
      let production =
        document.querySelector("#selectedProduction") ?? undefined;

      if (production) production.scrollIntoView();
    }, 1000);
  };

  useEffect(() => {
    scrollToProduction();
    if (SelectedProduction.length > 0) {
      setHeaderImage(SelectedProduction[0].production.coverImage);
    }
  }, [selectProduction]);

  return (
    <>
      <Loader title="Productions" />
      <ProductionsReelContainer
        sx={{
          minHeight:
            SelectedProduction.length > 0
              ? "calc(100vh - (97.5px + 50px))"
              : "unset",
          height: "100%",
          flexGrow: SelectedProduction.length > 0 ? 0 : 1,
        }}
      >
        <Reel container columnSpacing={0.3} xs={12}>
          {ProductionData.map((item) => {
            return (
              <Grid
                sx={{
                  py: 0,
                  height: "inherit",
                }}
                key={item.production.title}
                xs={12}
                sm={6}
                md={3}
              >
                <ReelItem
                  sx={item.production.reelButtonStyles}
                  onClick={() => {
                    scrollToProduction();
                    setSelectProduction(item.production.id);
                    setHoverImage(item.production.coverImage);
                  }}
                  onMouseOver={() => {
                    setSelectProduction("");
                    item.production.coverImage !== "Coming Soon"
                      ? setHoverImage(item.production.coverImage)
                      : setHoverImage("white");
                  }}
                  onMouseOut={() => setHoverImage("")}
                >
                  {item.production.title}
                </ReelItem>
              </Grid>
            );
          })}
        </Reel>
        <ProductionCoverImage
          sx={{
            opacity: 1,
            background:
              selectProduction.length !== 1
                ? hoverImage === "white"
                  ? hoverImage
                  : `url(${hoverImage})`
                : `url(${headerImage})`,
            transition: "background .6s ease-in, opacity .6s ease-in",
          }}
        >
          {hoverImage === "white" && (
            <Typography variant="h4" color="primary">
              Coming Soon
            </Typography>
          )}
        </ProductionCoverImage>
      </ProductionsReelContainer>
      {SelectedProduction
        ? SelectedProduction.map((production) => {
            return (
              <ProductionContentLayout
                Production={production.production}
                key={production.production.id}
              />
            );
          })
        : null}
    </>
  );
};

export default Productions;
