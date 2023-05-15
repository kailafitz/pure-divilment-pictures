import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { StyledAboutBanner } from "./styles";
import Loader from "../../Components/Loader";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
const AboutBanner = require("../../Assets/about.webp");
const AboutUs = require("../../Assets/about-us.jpeg");

const About = () => {
  return (
    <>
      <Loader title="About Us" />
      {/* <Box sx={{ paddingBottom: (theme) => theme.spacing(5) }}>
        <StyledAboutBanner src={AboutBanner} alt="About Pure Divilment" />
      </Box> */}
      <Grid container sx={{ justifyContent: "center", position: "relative" }}>
        <Grid
          xs={12}
          md={7}
          sx={{
            height: "100%",
            minHeight: "400px",
            width: "100%",
            background: `url(${AboutUs}) center no-repeat`,
            backgroundSize: "cover",
          }}
        >
          {/* <Box
            sx={{
              height: "100%",
              minHeight: "400px",
              width: "100%",
              background: `url(${AboutUs}) center no-repeat`,
              backgroundSize: "cover",
            }}
          ></Box> */}
        </Grid>
        <Grid md={5}></Grid>

        <Grid container sx={{ position: "absolute", right: 0 }}>
          <Grid md={4}></Grid>
          <Grid
            xs={11}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              py: 5,
              background: (theme) => theme.palette.white.main,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                textAlign: "center",
                marginBottom: (theme) => theme.spacing(2),
                textTransform: "uppercase",
                span: {
                  fontStyle: "italic",
                  letterSpacing: "2px",
                },
              }}
            >
              We tell stories...
              <br />
              Out of <span>pure divilment.</span>
            </Typography>
            <Typography
              sx={{ width: { xs: "90%", sm: "75%" }, margin: "0 auto" }}
            >
              Established in 2022, Pure Divilment is a film production company
              that specializes in creating visually stunning and emotionally
              compelling content for a global audience. Our team of experienced
              professionals brings together expertise in all aspects of
              filmmaking, from pre-production to post-production, to ensure that
              every project is executed with the highest level of creativity and
              technical excellence.
              {/* <br />
              <br />
              Whether it's a feature film, a TV series, or a commercial project,
              Pure Divilment is dedicated to producing content that captivates
              audiences and inspires them to think, feel, and experience the
              world in a different way. */}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
