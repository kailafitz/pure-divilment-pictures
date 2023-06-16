import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Fade,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
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

// https://stackoverflow.com/questions/8944456/css3-transition-different-transition-for-in-and-out-or-returning-from-tran

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

  const scrollToProduction = () => {
    setTimeout(function () {
      let production =
        document.querySelector("#selectedProduction") ?? undefined;

      if (production) production.scrollIntoView();
    }, 1000);
  };

  function ScrollTop() {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (
        (event.target as HTMLDivElement).ownerDocument || document
      ).querySelector("#root");

      if (anchor) {
        anchor.scrollIntoView({
          block: "center",
        });
      }
    };

    const trigger = useScrollTrigger({
      target: window,
      disableHysteresis: true,
      threshold: 100,
    });

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          <Button color="dark">Back to Productions</Button>
        </Box>
      </Fade>
    );
  }

  useEffect(() => {
    scrollToProduction();
    if (SelectedProduction.length > 0) {
      setHeaderImage(SelectedProduction[0].production.coverImage);
    }
  }, [selectProduction]);

  let condition =
    hoverImage === white ||
    SelectedProduction[0]?.production.status === "In Development";

  return (
    <>
      <Loader title="Productions" />
      <ProductionsReelContainer
        sx={{
          minHeight: {
            xs: "unset",
            md: "calc(100vh - 97.5px)",
          },
          height: { lg: "100%" },
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
            let styles = {
              ...item.production.titleStyles.baseStyles,
              ...item.production.titleStyles.reelButtonStyles,
            };
            return (
              <Grid
                sx={{
                  py: { lg: 0 },
                }}
                key={item.production.title}
                xs={10}
                sm={6}
                md={3}
              >
                <ReelItem
                  sx={styles}
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
                ? hoverImage === white
                  ? hoverImage
                  : `url(${hoverImage})`
                : `url(${headerImage})`,
            transition: "background .6s ease-in, opacity .6s ease-in",
            backgroundSize: "cover",
          }}
        >
          {condition && (
            <Typography variant="h4" color="primary">
              Coming Soon
            </Typography>
          )}
        </ProductionCoverImage>
      </ProductionsReelContainer>
      {SelectedProduction &&
      SelectedProduction[0]?.production.status !== "In Development"
        ? SelectedProduction.map((production) => {
            return (
              <>
                <ProductionContentLayout
                  Production={production.production}
                  key={production.production.id}
                />
                <ScrollTop />
              </>
            );
          })
        : null}
    </>
  );
};

export default Productions;
