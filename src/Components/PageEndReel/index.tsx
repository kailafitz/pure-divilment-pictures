import React from "react";
import { ProductionReelContainer, ReelWrapper } from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Box } from "@mui/material";

interface PageEndReelProps {
  images: string[];
}

const PageEndReel = (props: PageEndReelProps) => {
  return (
    <Box
      sx={{ background: (theme) => theme.palette.white.main, margin: "0 -1px" }}
    >
      <ProductionReelContainer
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
                height: { xs: 350 },
                "&:not(:first-child)": {
                  display: { xs: "none", md: "flex" },
                },
              }}
              xs={12}
              sm={3}
            >
              <ReelWrapper
                sx={{
                  "&::before": {
                    background: `url(${image}) top center / cover no-repeat`,
                  },
                }}
              ></ReelWrapper>
            </Grid>
          );
        })}
      </ProductionReelContainer>
    </Box>
  );
};

export default PageEndReel;
