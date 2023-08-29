import React from "react";
import { ProductionReelTwo, ReelTwoWrapper } from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ProductionItemInterface } from "../../Data/ProductionData";

const PageEndReel = (props: ProductionItemInterface) => {
  return (
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
            sm={3}
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
  );
};

export default PageEndReel;
