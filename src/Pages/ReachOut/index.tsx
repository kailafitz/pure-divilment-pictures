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
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521075486433-bf4052bb37bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5aW5nJTIwc2hvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1474164490978-9c265ac04f93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1508657794088-375f2f60c581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509884424292-74240c07aae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80')",
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
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509884424292-74240c07aae2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1616341590753-7840bdd2fb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2792&q=80')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521075486433-bf4052bb37bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5aW5nJTIwc2hvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60')",
            },
          }}
        ></StyledReelImage>
        <StyledReelImage
          sx={{
            "&::before": {
              backgroundImage:
                "url('https://images.unsplash.com/photo-1474164490978-9c265ac04f93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')",
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
              variant="body2"
              sx={{
                textTransform: "uppercase",
                fontWeight: 500,
                mb: 3,
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h6"
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
              variant="body2"
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
              variant="h6"
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
              variant="h6"
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
