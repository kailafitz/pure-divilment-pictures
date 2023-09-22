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
      <Stack
        sx={{
          position: "absolute",
          minHeight: "100vh",
          width: "290px",
          right: 0,
          top: 0,
        }}
      >
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage: "url('/reach/1.jpeg')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage: "url('/reach/2.jpeg')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage: "url('/reach/3.jpeg')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage: "url('/reach/4.jpeg')",
            },
          }}
        ></StyledReelImage>
      </Stack>
      <Stack
        sx={{
          position: "absolute",
          minHeight: "100vh",
          width: "290px",
          right: 300,
          top: -21,
        }}
      >
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage: "url('/reach/2.jpeg')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage: "url('/reach/1.jpeg')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage: "url('/reach/4.jpeg')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage: "url('/reach/3.jpeg')",
            },
          }}
        ></StyledReelImage>
      </Stack>
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
        </Grid>
      </Container>
    </>
  );
};

export default ReachOut;
