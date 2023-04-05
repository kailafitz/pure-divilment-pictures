import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import {
  Reel,
  ReelItemButton,
  ReelItem,
  ReelTypography,
  ProductionCoverImage,
} from "./styles";
import { ProductionData } from "../../Data/ProductionData";

// https://stackoverflow.com/questions/8944456/css3-transition-different-transition-for-in-and-out-or-returning-from-tran

const Productions = () => {
  const [coverImage, setCoverImage] = useState("");

  return (
    <Box sx={{ pt: { md: 3 } }}>
      <Reel container>
        {ProductionData.map((item) => {
          return (
            <ReelItemButton
              component={Button}
              href={
                item.production.coverImage !== "Coming Soon"
                  ? `/productions/production/${item.production.id}`
                  : "#"
              }
              item
              key={item.production.title}
              xs={12}
              sm={6}
              md={3}
              onMouseOver={() =>
                item.production.coverImage !== "Coming Soon"
                  ? setCoverImage(item.production.coverImage)
                  : setCoverImage("lightgrey")
              }
              onMouseOut={() => setCoverImage("")}
            >
              <ReelItem
                sx={{
                  background: {
                    xs:
                      item.production.coverImage !== "Coming Soon"
                        ? `url(${item.production.coverImage})`
                        : "lightgrey",
                    sm: "black",
                  },
                  backgroundSize: { xs: "cover" },
                  backgroundPosition: { xs: "center bottom" },
                }}
              >
                <ReelTypography m={0} sx={item.production.reelButtonStyles}>
                  {item.production.title}
                </ReelTypography>
              </ReelItem>
            </ReelItemButton>
          );
        })}
      </Reel>
      <ProductionCoverImage
        sx={{
          opacity: 0,
          background:
            coverImage === "lightgrey" ? coverImage : `url(${coverImage})`,
          transition: "background .6s ease-in, opacity .6s ease-in",
          display: { xs: "none", sm: "flex" },
        }}
      >
        {coverImage === "lightgrey" && (
          <Typography
            variant="h4"
            color={(theme) => theme.palette.common.white}
          >
            Coming Soon
          </Typography>
        )}
      </ProductionCoverImage>
    </Box>
  );
};

export default Productions;
