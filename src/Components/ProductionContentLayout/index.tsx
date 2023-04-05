import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ProfileImage } from "../TeamMemberContentLayout/styles";
import { ProductionItemInterface } from "../../Data/ProductionData";
import { Banner, ProductionTitle } from "./styles";

const ProductionContentLayout = (props: ProductionItemInterface) => {
  return (
    <>
      <Banner src={props.Production.coverImage} alt="Banner" />
      <Box sx={{ pt: (theme) => theme.spacing(7) }}>
        <Grid
          container
          sx={{
            justifyContent: { xs: "center", sm: "initial" },
          }}
        >
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <ProfileImage
              sx={{
                backgroundImage: `url(${props.Production.primary_still_src})`,
                // transform: "skewY(8deg)",
                clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)",
              }}
            />
          </Grid>
          <Grid
            item
            xs={10}
            md={5}
            pt={8}
            sx={{
              pl: { sm: 3 },
              pt: { sm: 4 },
            }}
          >
            <ProductionTitle
              variant="h4"
              sx={props.Production.reelButtonStyles}
            >
              {props.Production.title}
            </ProductionTitle>
            <Typography mb={2} sx={{ textAlign: { xs: "center", sm: "left" } }}>
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
                    sx={{
                      fontWeight: 500,
                      mr: (theme) => theme.spacing(3),
                      textTransform: "uppercase",
                    }}
                  >
                    {deets.fieldKey}
                  </Typography>
                  <Typography mb={{ xs: 3, md: 0 }}>
                    {deets.fieldValue}
                  </Typography>
                </Stack>
              );
            })}
          </Grid>
        </Grid>
        <Grid
          container
          pt={10}
          sx={{ justifyContent: { xs: "center", sm: "end" } }}
        >
          <Grid item xs={10} md={5} sx={{ pl: { sm: 4 } }}>
            <Typography></Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <ProfileImage
              sx={{
                backgroundImage: `url(${props.Production.secondary_still_src})`,
                clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0% 100%)",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductionContentLayout;
