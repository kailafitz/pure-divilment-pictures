import React from "react";
import { Container, Link, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Helmet } from "react-helmet";
import { StyledBackgroundImage, StyledReelImage } from "./styles";

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
      {/* <StyledBackgroundImage></StyledBackgroundImage> */}
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid container mb="5">
          <Grid
            xs={8}
            sm={6}
            sx={{
              p: { xs: 2 },
              backgroundColor: theme.palette.white.main,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
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
              sx={{ fontStyle: "italic", fontSize: "13px", mb: 8 }}
            >
              Please note that we cannot accept unsolicited scripts or
              materials.
            </Typography>
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
          <Grid xs={10} md={6} sx={{ img: { width: "100%" } }}>
            <img src={"/reach/1.png"} width={700} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ReachOut;
