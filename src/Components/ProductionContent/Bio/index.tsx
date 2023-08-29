import React from "react";
import { Typography } from "@mui/material";
import { ProductionTitle } from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ProductionItemInterface } from "../../../Data/ProductionData";

const Bio = (props: ProductionItemInterface) => {
  return (
    <Grid
      id="selectedProduction"
      container
      sx={{
        py: { xs: 10, md: 5 },
        justifyContent: "center",
      }}
      columnSpacing={0.3}
    >
      <Grid xs={11} md={6}>
        {/* Title */}
        <ProductionTitle
          variant="h4"
          sx={props.Production.titleStyles.baseStyles}
        >
          {props.Production.title}
        </ProductionTitle>

        {/* Type */}
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

        {/* Press Review */}
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

        {/* Details */}
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
  );
};

export default Bio;
