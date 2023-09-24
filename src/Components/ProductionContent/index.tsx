import React from "react";
import { Box, Typography } from "@mui/material";
import { ProductionItemInterface } from "../../Data/ProductionData";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Poster from "./Poster";
import InfoSection from "./InfoSection";
import Bio from "./Bio";
import ImageReel from "../ImageReel";

const ProductionContent = (props: ProductionItemInterface) => {
  return (
    <>
      <Bio Production={props.Production} />
      {props.Production.image_reel && (
        <ImageReel Production={props.Production} />
      )}
      {(props.Production.accolades || props.Production.festivals) && (
        <Grid
          container
          columnGap={5}
          rowSpacing={{ xs: 8, lg: 0 }}
          justifyContent="center"
          mb={6}
        >
          {props.Production.festivals && (
            <Grid xs={10} md={5} textAlign={{ xs: "center", lg: "right" }}>
              <InfoSection title="Festivals" alignment="right">
                {props.Production.festivals?.map((festival, i) => {
                  return <Typography key={i}>{festival}</Typography>;
                })}
              </InfoSection>
            </Grid>
          )}

          {(props.Production.accolades || props.Production.screenings) && (
            <Grid
              xs={11}
              md={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                "> div:not(:last-child)": { mb: 3 },
              }}
            >
              <InfoSection title="Accolades" alignment="left">
                {props.Production.accolades?.map((accolade, i) => {
                  return (
                    <Box key={i}>
                      <Typography
                        variant="body1"
                        sx={{
                          display: { xs: "block", lg: "inline" },
                          fontWeight: { xs: 500, lg: 400 },
                        }}
                      >
                        {accolade.type}
                      </Typography>
                      <Typography
                        variant="body1"
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
              </InfoSection>
              <InfoSection title="Additional Screenings" alignment="left">
                {props.Production.screenings?.map((screening, i) => {
                  return <Typography key={i}>{screening}</Typography>;
                })}
              </InfoSection>
            </Grid>
          )}
        </Grid>
      )}
      <Poster Production={props.Production} />
    </>
  );
};

export default ProductionContent;
