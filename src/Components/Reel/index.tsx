import React from "react";
import { ProductionReelOne, ReelOneWrapper } from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ProductionItemInterface } from "../../Data/ProductionData";

const Reel = (props: ProductionItemInterface) => {
  return (
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
            sm={3}
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
  );
};

export default Reel;
