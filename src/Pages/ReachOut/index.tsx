import React from "react";
import { Link, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Helmet } from "react-helmet";
import { ReachOutHero } from "./styles";

const ReachOut = () => {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title>Reach Out | Pure Divilment Pictures</title>
        <meta
          name="description"
          content={
            "Contact details to reach out to the team at Pure Divilment Pictures"
          }
        />
        <meta
          property="og:title"
          content={"Reach Out | Pure Divilment Pictures"}
        />
        <meta
          property="og:description"
          content={
            "Get in touch and contact our team here at Pure Divilment Pictures!"
          }
        />
      </Helmet>

      <Stack direction="column">
        <Grid
          container
          justifyContent="center"
          sx={{
            backgroundColor: theme.palette.white.main,
            width: "100%",
            py: { xs: 2, lg: 4 },
          }}
          rowGap={{ xs: 4, lg: 0 }}
        >
          <Grid xs={10} sm={7} md={4}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: 500,
                mb: 3,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: (theme) => theme.spacing(1),
              }}
            >
              {/* <span style={{ fontWeight: 500 }}>EMAIL:</span>{" "} */}
              info@puredivilment.ie
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", fontSize: "13px" }}
            >
              Please note that we cannot accept unsolicited scripts or
              materials.
            </Typography>
          </Grid>
          <Grid xs={10} sm={7} md={2} xl={1}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: 500,
                mb: 3,
              }}
            >
              Follow Us
            </Typography>
            <Link
              display="block"
              color="primary"
              variant="body2"
              sx={{
                fontWeight: 500,
                // mb: (theme) => theme.spacing(1),
              }}
            >
              IMDB
            </Link>
            <Link
              display="block"
              color="primary"
              variant="body2"
              sx={{ fontWeight: 500 }}
            >
              Instagram
            </Link>
          </Grid>
        </Grid>
        <picture>
          <ReachOutHero src="/reach/1.png" />
        </picture>
      </Stack>
    </>
  );
};

export default ReachOut;
