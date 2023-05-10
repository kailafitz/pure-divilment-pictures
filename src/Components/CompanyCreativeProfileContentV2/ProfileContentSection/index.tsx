import React, { ReactNode } from "react";
import { Box, Grid } from "@mui/material";

type Props = {
  xValue?: string;
  yValue?: string;
  background?: string;
  children: ReactNode;
  grid: number;
};

const ProfileContentSection = (props: Props) => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 97.5px)",
        background: `url(${props.background}) no-repeat`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: props.yValue,
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: props.xValue,
        }}
      >
        <Grid
          xs={12}
          md={props.grid}
          p={5}
          sx={{
            color: (theme) => theme.palette.common.white,
            background: "#00000060",
            backdropFilter: "blur(4px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileContentSection;
