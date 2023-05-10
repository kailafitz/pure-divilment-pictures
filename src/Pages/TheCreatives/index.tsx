import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { CreativesData } from "../../Data/TeamData";
import CompanyCreativeCard from "../../Components/CompanyCreativeCard";

const TheCreatives = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 7 }}
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "center",
          width: "90%",
          margin: (theme) => theme.spacing(0, "auto", 3, "auto"),
        }}
      >
        {CreativesData.map((member) => {
          return (
            <Grid
              xs={10}
              md={4}
              sx={{ pb: { xs: 3, sm: 0 } }}
              key={member.creative.id}
            >
              <CompanyCreativeCard Creative={member.creative} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default TheCreatives;
