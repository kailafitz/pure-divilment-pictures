import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {
  ProductionsReelContainer,
  Reel,
  ReelItem,
  ProductionCoverImage,
} from "./styles";
import { ProductionData } from "../../Data/ProductionData";
import Loader from "../../Components/Loader";
import ProductionProfile from "../ProductionProfile";
import ProductionContentLayout from "../../Components/ProductionContentLayout";
import ProductionSlider from "./Slider";

const test = require("../../Assets/baths-cover-photo.png");

// https://stackoverflow.com/questions/8944456/css3-transition-different-transition-for-in-and-out-or-returning-from-tran

const Productions = () => {
  const [hoverImage, setHoverImage] = useState("");
  const [headerImage, setHeaderImage] = useState("");
  const [selectProduction, setSelectProduction] = useState("0");
  const [open, setOpen] = useState(false);

  console.log(selectProduction);

  const SelectedProduction = ProductionData.filter((production) => {
    return production.production.id === selectProduction;
  });

  useEffect(() => {
    if (SelectedProduction.length > 0) {
      setHeaderImage(SelectedProduction[0].production.coverImage);
    }
  }, [selectProduction]);

  return (
    <>
      <Loader title="Productions" />
      {/* <ProductionsReelContainer
        sx={{
          height: "100%",
          flexGrow: 1,
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
                    setSelectProduction(item.production.id);
                    setHoverImage(item.production.coverImage);
                    setOpen(true);
                  }}
                  onMouseOver={() => {
                    setSelectProduction("");
                    item.production.coverImage !== "Coming Soon"
                      ? setHoverImage(item.production.coverImage)
                      : setHoverImage("#FFFFFF");
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
                ? hoverImage === "#FFFFFF"
                  ? hoverImage
                  : `url(${hoverImage})`
                : `url(${headerImage})`,
            transition: "background .6s ease-in, opacity .6s ease-in",
          }}
        >
          {hoverImage === "#FFFFFF" && (
            <Typography variant="h4" color="common.black">
              Coming Soon
            </Typography>
          )}
        </ProductionCoverImage>
      </ProductionsReelContainer>
      <Box
        id="What"
        sx={{
          background: "#fffffff0",
          "-webkit-backdrop-filte": "blur(3px)",
          backdropFilter: "blur(3px)",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: open ? "100vh" : "0vh",
          transition: "height 1s cubic-bezier(0.97, 0.01, 0.36, 0.99)",
          overflow: "scroll",
          zIndex: 300,
        }}
      >
        <Button
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            m: 2,
          }}
        >
          Close
        </Button>
        {SelectedProduction
          ? SelectedProduction.map((production) => {
              return (
                // <ProductionProfile
                //   Production={production.production}
                //   key={production.production.id}
                // />
                <ProductionContentLayout
                  key={production.production.id}
                  Production={production.production}
                />
              );
            })
          : null}
      </Box> */}
      <ProductionsReelContainer
        sx={{
          height: "100%",
          flexGrow: 1,
        }}
      >
        <Reel container columnSpacing={0.3} xs={12}>
          {/* {ProductionData.map((item) => {
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
                    setSelectProduction(item.production.id);
                    setHoverImage(item.production.coverImage);
                    setOpen(true);
                  }}
                  onMouseOver={() => {
                    setSelectProduction("");
                    item.production.coverImage !== "Coming Soon"
                      ? setHoverImage(item.production.coverImage)
                      : setHoverImage("#FFFFFF");
                  }}
                  onMouseOut={() => setHoverImage("")}
                >
                  {item.production.title}
                </ReelItem>
              </Grid>
            );
          })} */}
          <ProductionSlider
            passHoverFunction={setHoverImage}
            passSelectProduction={setSelectProduction}
            passSetOpen={setOpen}
          />
        </Reel>
        <ProductionCoverImage
          sx={{
            opacity: 1,
            background:
              selectProduction.length !== 1
                ? hoverImage === "#FFFFFF"
                  ? hoverImage
                  : `url(${hoverImage})`
                : `url(${headerImage})`,
            transition: "background .6s ease-in, opacity .6s ease-in",
          }}
        >
          {hoverImage === "#FFFFFF" && (
            <Typography variant="h4" color="common.black">
              Coming Soon
            </Typography>
          )}
        </ProductionCoverImage>
      </ProductionsReelContainer>
      <Box
        id="What"
        sx={{
          background: "#fffffff0",
          "-webkit-backdrop-filte": "blur(3px)",
          backdropFilter: "blur(3px)",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: open ? "100vh" : "0vh",
          transition: "height 1s cubic-bezier(0.97, 0.01, 0.36, 0.99)",
          overflow: "scroll",
          zIndex: 300,
        }}
      >
        <Button
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            m: 2,
          }}
        >
          Close
        </Button>
        {SelectedProduction
          ? SelectedProduction.map((production) => {
              return (
                // <ProductionProfile
                //   Production={production.production}
                //   key={production.production.id}
                // />
                <ProductionContentLayout
                  key={production.production.id}
                  Production={production.production}
                />
              );
            })
          : null}
      </Box>
    </>
  );
};

export default Productions;

{
  /* <Box
        sx={{
          background: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: "6px",
        }}
      >
        <Box
          sx={{
            background: "black",
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: "5px",
          }}
        >
          {Array(10)
            .fill(null)
            .map((i) => (
              <Box
                key={i}
                sx={{
                  background: "white",
                  height: "10px",
                  width: "10px",
                  borderRadius: "2px",
                }}
              ></Box>
            ))}
        </Box>
        <Box
          sx={{
            background: `url(${test})`,
            height: "200px",
            borderRadius: "15px",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box
          sx={{
            background: "black",
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "5px",
          }}
        >
          {Array(10)
            .fill(null)
            .map((i) => (
              <Box
                key={i}
                sx={{
                  background: "white",
                  height: "10px",
                  width: "10px",
                  borderRadius: "2px",
                }}
              ></Box>
            ))}
        </Box>
      </Box> */
}
