import React from "react";
import { Helmet } from "react-helmet";
import { Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { StyledAboutImage } from "./styles";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Pure Divilment Pictures</title>
        <meta
          name="description"
          content={
            "The story of how Pure Divilment Pictures came to be. This page describes the company's work ethos and the types of projects that the company participates in. Pure Divilment Pictures is about telling stories that may be unrepresented in our society and in the media industry."
          }
        />
        <meta
          property="og:title"
          content={"About Us | Pure Divilment Pictures"}
        />
        <meta
          property="og:description"
          content={"How we started and where we're going!"}
        />
      </Helmet>
      <Typography
        variant="h4"
        sx={{
          paddingTop: "10vh",
          fontWeight: 400,
          textAlign: "center",
          marginBottom: (theme) => theme.spacing(3),
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
      <Stack
        direction="row"
        margin="0 auto"
        alignContent="center"
        justifyContent="space-between"
        // sx={{ width: { xs: "70vw", sm: "40vw", lg: "40vw" } }}
        sx={{ minWidth: "300px" }}
        mb={6}
      >
        <Typography display="inline" textAlign="center">
          Inclusive
        </Typography>
        <Typography>
          {/* <FiberManualRecordIcon sx={{ width: "8px", height: "8px" }} /> */}
          //
        </Typography>
        <Typography display="inline" textAlign="center">
          Dynamic
        </Typography>
        <Typography>
          {/* <FiberManualRecordIcon sx={{ width: "8px", height: "8px" }} /> */}
          //
        </Typography>
        <Typography display="inline" textAlign="center">
          Empowering
        </Typography>
      </Stack>

      <StyledAboutImage></StyledAboutImage>
      <Grid container sx={{ justifyContent: "center", position: "relative" }}>
        <Grid md={8} p={5}>
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
      <Grid
        container
        justifyContent="center"
        py={3}
        sx={{ background: (theme) => theme.palette.primary.main }}
      >
        <Grid
          xs={8}
          md={6}
          sx={{
            p: { xs: 2, md: 5 },
            display: "flex",
            justifyContent: { md: "flex-end" },
          }}
        >
          <Button
            href="/test/the-creatives"
            variant="contained"
            color="white"
            sx={{
              p: 2,
              borderRadius: 0,
              width: { xs: "100%", md: "fit-content" },
            }}
          >
            Meet our Creatives
          </Button>
        </Grid>
        <Grid xs={8} md={6} sx={{ p: { xs: 2, md: 5 } }}>
          <Button
            href="/test/reach-out"
            variant="contained"
            color="white"
            sx={{
              p: 2,
              borderRadius: 0,
              width: { xs: "100%", md: "fit-content" },
            }}
          >
            Get in Touch
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
