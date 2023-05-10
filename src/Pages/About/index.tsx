import React from "react";
import { Typography, Box } from "@mui/material";
import { StyledAboutBanner } from "./styles";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
const AboutBanner = require("../../Assets/about.webp");

const About = () => {
  return (
    <>
      <Box sx={{ paddingBottom: (theme) => theme.spacing(5) }}>
        <StyledAboutBanner src={AboutBanner} alt="About Pure Divilment" />
      </Box>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid
          xs={12}
          md={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            py: 4,
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
            <br />
            <br />
            We believe that storytelling is the heart and soul of filmmaking.
            Our mission is to produce films that not only entertain but also
            inspire and provoke thought, leaving a lasting impact on our
            viewers. We work with a wide range of genres, including drama,
            comedy, documentary, and animation, and we strive to create unique
            and engaging stories that resonate with our audience.
            <br />
            <br />
            Over the years, our company has built a reputation for delivering
            high-quality productions that have garnered critical acclaim and
            industry recognition. We are committed to pushing the boundaries of
            creativity and innovation, and our team is constantly seeking new
            and exciting ways to tell stories through film.
            <br />
            <br />
            Whether it's a feature film, a TV series, or a commercial project,
            Pure Divilment is dedicated to producing content that captivates
            audiences and inspires them to think, feel, and experience the world
            in a different way.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
