import React from "react";
import { ProductionReelTwo, ReelTwoWrapper } from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface PageEndReelProps {
  images: string[];
}

const PageEndReel = (props: PageEndReelProps) => {
  return (
    <ProductionReelTwo
      container
      justifyContent={{ xs: "center", lg: "unset" }}
      columnSpacing={0.3}
    >
      {props.images.map((image: string, i) => {
        return (
          <Grid
            key={i}
            sx={{
              py: { lg: 0 },
              position: "relative",
              height: { xs: 350, md: "inherit" },
            }}
            xs={12}
            sm={3}
            md={3}
          >
            <ReelTwoWrapper
              sx={{
                "&::before": {
                  background: `url(${image}) top center / cover no-repeat`,
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
