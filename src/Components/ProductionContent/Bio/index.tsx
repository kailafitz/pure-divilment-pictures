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
        pt: { xs: 15, md: 15 },
        pb: { xs: 6, md: 9 },
        justifyContent: "center",
      }}
      columnSpacing={0.3}
    >
      <Grid xs={11} md={5}>
        {/* Title */}
        <ProductionTitle>{props.Production.logo}</ProductionTitle>
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
            const names = deets.fieldValue.split(",");
            return (
              <React.Fragment key={deets.fieldKey}>
                <Grid xs={4} md={6} textAlign="right">
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
                <Grid xs={7} md={6}>
                  {names.map((name, i) => {
                    return (
                      <Typography key={i} variant="body2" mb={{ xs: 3, md: 0 }}>
                        {name}
                      </Typography>
                    );
                  })}
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
