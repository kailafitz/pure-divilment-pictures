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
      {/* <Box sx={{ paddingBottom: (theme) => theme.spacing(5) }}>
        <StyledAboutBanner src={AboutBanner} alt="About Pure Divilment" />
      </Box> */}
      <Grid container sx={{ justifyContent: "center", position: "relative" }}>
        {/* <Grid
          xs={12}
          md={7}
          sx={{
            height: "100%",
            minHeight: "400px",
            width: "100%",
            background: `url(${AboutUs}) center no-repeat`,
            backgroundSize: "cover",
          }}
        ></Grid> */}
        <Grid md={8} p={5}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
              textAlign: "center",
              marginBottom: (theme) => theme.spacing(2),
              textTransform: "unset",
              span: {
                fontStyle: "italic",
                letterSpacing: "2px",
              },
            }}
          >
            We tell stories
            <br />
            ... out of <span>pure divilment.</span>
          </Typography>
          <Typography variant="body1" mb={2}>
            Pure Divilment Pictures is a film and television production company,
            based in Ireland.
          </Typography>
          <Typography variant="body1" mb={2}>
            Co-founded by Claire Mooney and Nell Hensey, the pair met while
            completing their Masters degrees in Creative Production and Screen
            Finance at Ireland's National Film School IADT. Together, they want
            to champion a new generation of great storytelling.
          </Typography>
          <Typography
            color="white"
            variant="body2"
            sx={{
              background: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.white.main,
            }}
            mb={2}
          >
            "From literary onscreen adaptations to original musicals, our goal
            is to tell bold, important stories. Stories that haven't been told
            before. Stories made by and about outsiders like us." - Nell Hensey
          </Typography>
          <Typography variant="body1" mb={2}>
            Pure Divilment is dedicated to producing entertainment that
            captivates audiences and inspires them to think, feel, and
            experience the world in a different way. We deeply value
            representation and strive to create opportunities to grow
            exceptional talent.
          </Typography>
          <Typography
            color="white"
            variant="body2"
            sx={{
              background: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.white.main,
            }}
            mb={2}
          >
            "With each new project, we strive for the highest level of
            creativity and technical excellence. Our slate is carefully curated
            with select pieces that focus on compelling characters, new
            perspectives, and demonstrate international appeal." - Claire Mooney
          </Typography>
          <Typography variant="body1" mb={2}>
            In 2023, the company launched its highly anticipated debut slate
            featuring an array of exciting projects across television,
            independent film and short form content. The company also expanded
            its creative team, adding positions across development, production
            and marketing.
          </Typography>
          <Typography variant="h6" mb={3}>
            And this is only the beginning.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
