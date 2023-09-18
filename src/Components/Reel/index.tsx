import React from "react";
import { ProductionImageReel, ReelWrapper } from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ProductionItemInterface } from "../../Data/ProductionData";

const Reel = (props: ProductionItemInterface) => {
  return (
    <ProductionImageReel
      container
      columnSpacing={0.3}
      rowSpacing={{ xs: 4, md: 0 }}
      justifyContent={{ xs: "center", lg: "unset" }}
    >
      {props.Production.image_reel?.map((image, i) => {
        return (
          <Grid
            key={i}
            sx={{
              height: { xs: 250, md: "inherit" },
              position: "relative",
            }}
            xs={10}
            sm={3}
            md={3}
          >
            <ReelWrapper
              sx={{
                "&::before": {
                  background: `url(${image}) right center no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                },
              }}
            ></ReelWrapper>
          </Grid>
        );
      })}
    </ProductionImageReel>
  );
};

export default Reel;
