import React from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Helmet } from "react-helmet";
import { StyledBackgroundImage } from "./styles";

const Contact = () => {
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
      <StyledBackgroundImage></StyledBackgroundImage>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Grid container mb="5">
          <Grid md={6}>
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
              sx={{ fontStyle: "italic", fontSize: "13px" }}
            >
              Please note that we cannot accept unsolicited scripts or
              materials.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textTransform: "uppercase",
                fontWeight: 500,
                textAlign: "right",
                mb: 3,
              }}
            >
              Follow Us
            </Typography>
            <Link
              display="block"
              textAlign="right"
              color="primary"
              variant="h6"
              sx={{
                fontWeight: 500,
                mb: (theme) => theme.spacing(1),
              }}
            >
              IMDB
            </Link>
            <Link
              textAlign="right"
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

export default Contact;
