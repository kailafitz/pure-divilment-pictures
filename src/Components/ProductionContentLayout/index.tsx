import React from "react";
import { Box, Typography } from "@mui/material";
import { ProductionItemInterface } from "../../Data/ProductionData";
import {
  ProductionImage,
  ProductionReelOne,
  ReelOneWrapper,
  ProductionReelTwo,
  ReelTwoWrapper,
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
          <ProductionTitle
            variant="h4"
            sx={props.Production.titleStyles.baseStyles}
          >
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
          <Grid container rowSpacing={1} justifyContent="center" mt={{ xs: 5 }}>
            {props.Production.details.map((deets) => {
              return (
                <React.Fragment key={deets.fieldKey}>
                  <Grid xs={4} md={2}>
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
                  </Grid>
                  <Grid xs={7} md={9}>
                    <Typography variant="body2" mb={{ xs: 3, md: 0 }}>
                      {deets.fieldValue}
                    </Typography>
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <ProductionReelOne
        container
        columnSpacing={0.3}
        rowSpacing={{ xs: 4, md: 0 }}
        justifyContent={{ xs: "center", lg: "unset" }}
      >
        {props.Production.reel_one?.map((reelImage, i) => {
          return (
            <Grid
              key={i}
              sx={{
                height: { xs: "250px", md: "inherit" },
                position: "relative",
              }}
              xs={10}
              sm={6}
              md={3}
            >
              <ReelOneWrapper
                sx={{
                  "&::before": {
                    background: `url(${reelImage}) right center no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  },
                }}
              ></ReelOneWrapper>
            </Grid>
          );
        })}
      </ProductionReelOne>
      <Grid
        container
        columnGap={5}
        rowSpacing={{ xs: 8, lg: 0 }}
        justifyContent="center"
        mb={6}
      >
        <Grid xs={10} md={5} textAlign={{ xs: "center", lg: "right" }}>
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
          xs={11}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box mb={5} textAlign={{ xs: "center", lg: "left" }}>
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
              return (
                <Box key={i}>
                  <Typography
                    sx={{
                      display: { xs: "block", lg: "inline" },
                      fontWeight: { xs: 800, lg: 400 },
                    }}
                  >
                    {accolade.type}
                  </Typography>
                  <Typography
                    sx={{
                      display: { xs: "block", lg: "inline" },
                      mb: { xs: 2, lg: 0 },
                      pl: { lg: 0.5 },
                    }}
                  >
                    {accolade.accoladeName}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box sx={{ textAlign: { xs: "center", lg: "left" } }}>
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
        sx={{ mb: { xs: 6, lg: 10 } }}
      />
      <ProductionReelTwo
        container
        justifyContent={{ xs: "center", lg: "unset" }}
        columnSpacing={0.3}
        rowSpacing={{ xs: 4, lg: 0 }}
      >
        {props.Production.reel_two?.map((reelImage, i) => {
          return (
            <Grid
              key={i}
              sx={{
                py: { lg: 0 },
                position: "relative",
                height: { xs: "250px", md: "inherit" },
              }}
              xs={10}
              sm={6}
              md={3}
            >
              <ReelTwoWrapper
                sx={{
                  "&::before": {
                    background: `url(${reelImage}) no-repeat`,
                    backgroundSize: "cover",
                  },
                }}
              ></ReelTwoWrapper>
            </Grid>
          );
        })}
      </ProductionReelTwo>
    </>
  );
};

export default ProductionContentLayout;
