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
      <Grid xs={12} md={7}>
        {/* Title */}
        <ProductionTitle>{props.Production.logo}</ProductionTitle>
        {/* Type */}
        <Typography
          mb={2}
          sx={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "span img": {
              marginBottom: "2px",
            },
          }}
        >
          <span
            style={{
              fontWeight: 500,
              marginRight: "5px",
            }}
          >
            {props.Production.type}
          </span>
          {" / "}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "5px",
            }}
          >
            {props.Production.status}
          </span>
        </Typography>
        {/* Log line */}
        <Typography
          mb={2}
          variant="body1"
          sx={{
            fontStyle: "italic",
            fontFamily: "'Libre Baskerville', serif",
            textAlign: "center",
            maxWidth: "80vw",
            margin: "0 auto",
            span: {
              fontStyle: "normal",
            },
          }}
        >
          {props.Production.logLine}
        </Typography>
        {/* Details */}
        <Grid container rowSpacing={1} justifyContent="center" mt={{ xs: 5 }}>
          {props.Production.details.map((deets) => {
            const names = deets.fieldValue.split(",");
            return (
              <React.Fragment key={deets.fieldKey}>
                <Grid xs={6} md={6} textAlign="right">
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      textTransform: "uppercase",
                    }}
                  >
                    {deets.fieldKey}
                  </Typography>
                </Grid>
                <Grid xs={6} md={6} pl={{ xs: 1, md: 2 }}>
                  {names.map((name, i) => {
                    return (
                      <Typography
                        key={i}
                        variant="body2"
                        mb={{ xs: 0.5, md: 0 }}
                      >
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
