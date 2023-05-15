import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

type Props = {
  background?: string;
  children: ReactNode;
  direction: string;
  gridImage: number;
  gridText: number;
};

const ProfileContentSectionV2 = (props: Props) => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 97.5px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        container
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: { xs: "column", md: props.direction },
        }}
      >
        <Grid
          xs={12}
          md={props.gridImage}
          sx={{
            background: `url(${props.background}) center no-repeat`,
            backgroundSize: "cover",
          }}
        ></Grid>
        <Grid xs={12} md={props.gridText} sx={{ display: "flex" }}>
          <Box
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileContentSectionV2;
