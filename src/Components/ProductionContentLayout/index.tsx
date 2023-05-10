import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ProductionItemInterface } from "../../Data/ProductionData";
import {
  ProductionImage,
  ProductionReelOne,
  ProductionReelTwo,
  ProductionTitle,
} from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const ProductionContentLayout = (props: ProductionItemInterface) => {
  return (
    <>
      <Grid
        id="selectedProduction"
        container
        sx={{
          py: 5,
          justifyContent: "center",
        }}
        columnSpacing={0.3}
      >
        <Grid xs={11} md={6}>
          <ProductionTitle variant="h4" sx={props.Production.reelButtonStyles}>
            {props.Production.title}
          </ProductionTitle>
          <Typography mb={2} sx={{ textAlign: "center" }}>
            <span
              style={{
                fontWeight: 500,
              }}
            >
              {props.Production.type}
            </span>
            {" / "}
            <span>{props.Production.status}</span>
          </Typography>
          <Typography
            mb={2}
            variant="body2"
            sx={{
              fontStyle: "italic",
              fontFamily: "'Libre Baskerville', serif",
              textAlign: "center",
            }}
          >
            {props.Production.pressReview}
          </Typography>
          {props.Production.details.map((deets) => {
            return (
              <Stack
                key={deets.fieldKey}
                mb={1}
                direction={{ xs: "column", md: "row" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    mr: (theme) => theme.spacing(3),
                    textTransform: "uppercase",
                  }}
                >
                  {deets.fieldKey}
                </Typography>
                <Typography variant="body2" mb={{ xs: 3, md: 0 }}>
                  {deets.fieldValue}
                </Typography>
              </Stack>
            );
          })}
        </Grid>
      </Grid>
      <ProductionReelOne container columnSpacing={0.3}>
        {props.Production.reel_one?.map((reelImage, i) => {
          return (
            <Grid
              key={i}
              sx={{
                height: "inherit",
                position: "relative",
              }}
              xs={12}
              sm={6}
              md={3}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  "&::before": {
                    content: "''",
                    display: "block",
                    height: "100%",
                    width: "120%",
                    background: `url(${reelImage}) right center no-repeat`,
                    backgroundSize: "cover",
                    transform: "skew(3deg) translateX(-1rem)",
                  },
                }}
              ></Box>
            </Grid>
          );
        })}
      </ProductionReelOne>
      <Grid container columnGap={5} justifyContent="center" mb={6}>
        <Grid md={5} textAlign="right">
          <Typography
            variant="body2"
            sx={{
              fontWeight: 900,
              mb: 3,
              textTransform: "uppercase",
            }}
          >
            Festivals
          </Typography>
          {props.Production.festivals?.map((festival, i) => {
            return <Typography key={i}>{festival}</Typography>;
          })}
        </Grid>
        <Grid
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box mb={5}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 900,
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              Accolades
            </Typography>
            {props.Production.accolades?.map((accolade, i) => {
              return <Typography key={i}>{accolade}</Typography>;
            })}
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 900,
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              Additional Screenings
            </Typography>
            {props.Production.screenings?.map((screening, i) => {
              return <Typography key={i}>{screening}</Typography>;
            })}
          </Box>
        </Grid>
      </Grid>
      <ProductionImage
        src={props.Production.production_image}
        alt="production poster"
      />
      <ProductionReelTwo container columnSpacing={0.3}>
        {props.Production.reel_two?.map((reelImage, i) => {
          return (
            <Grid
              key={i}
              sx={{
                py: 0,
                height: "inherit",
                position: "relative",
              }}
              xs={12}
              sm={6}
              md={3}
            >
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  "&::before": {
                    content: "''",
                    display: "block",
                    height: "100%",
                    width: "120%",
                    background: `url(${reelImage}) no-repeat`,
                    backgroundSize: "cover",
                    transform: "skew(3deg) translateX(-1rem)",
                    filter: "grayscale(100%)",
                  },
                }}
              ></Box>
            </Grid>
          );
        })}
      </ProductionReelTwo>
    </>
  );
};

export default ProductionContentLayout;
