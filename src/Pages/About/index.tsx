import React from "react";
import { Helmet } from "react-helmet";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AboutImage } from "./styles";
import PageEndReel from "../../Components/PageEndReel";
import LinkButton from "../../Components/LinkButton";

const About = () => {
  const theme = useTheme();
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

      <picture>
        <source srcSet="/about/1.webp"></source>
        <AboutImage
          width={1000}
          height={720}
          src="/about/1.png"
          alt="Picture of the team at Pure Divilment Pictures"
        />
      </picture>

      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.8rem", md: "3.4rem" },
          fontWeight: 400,
          textAlign: "center",
          padding: (theme) => theme.spacing(6, 0, 0, 0),
          textTransform: "unset",
        }}
      >
        We Tell Stories
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: 400,
          textAlign: "center",
          padding: (theme) => theme.spacing(0, 0, 6, 0),
          span: {
            fontStyle: "italic",
            letterSpacing: "2px",
          },
        }}
      >
        out of <span>pure divilment</span>
      </Typography>

      <Grid
        container
        pb={5}
        sx={{
          justifyContent: "center",
          position: "relative",
          background: (theme) => theme.palette.white.main,
        }}
      >
        <Grid xs={10} md={8}>
          <Typography
            variant="body1"
            textAlign="justify"
            sx={{
              span: {
                fontStyle: "italic",
                marginRight: (theme) => theme.spacing(0.3),
              },
            }}
          >
            <span>P</span>ure <span>D</span>ivilment Pictures is a women-led
            Irish film and television production company. Our purpose is to
            empower new voices, create opportunity and showcase exceptional
            industry talent.
            <br />
            <br />
            At the helm of the company are Co-Founders, Claire Mooney and Nell
            Hensey. The pair met in 2019 while studying for a Masters in
            Creative Production and Screen Finance at the National Film School
            IADT. Together, they are championing a new generation of great
            storytellers, both in Ireland and abroad.
          </Typography>
        </Grid>
      </Grid>

      {/* Quote */}
      <Grid
        container
        sx={{
          background: (theme) => theme.palette.white.main,
        }}
        pb={5}
      >
        <Grid
          xs={12}
          md={9}
          p={3}
          pr={{ lg: "5rem" }}
          sx={{
            background: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.white.main,
            clipPath: { lg: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" },
          }}
        >
          <Typography
            color="white"
            variant="body1"
            sx={{ fontStyle: "italic" }}
            mb={1}
          >
            With each new project, we strive for the highest level of creativity
            and technical excellence. Our slate is carefully curated with select
            pieces that focus on compelling characters, new perspectives, and
            demonstrate international appeal.
          </Typography>
          <Typography mr={5} color="white" variant="body1" textAlign="right">
            - Claire Mooney
          </Typography>
        </Grid>
      </Grid>

      {/* Quote */}
      <Grid
        pb={5}
        container
        justifyContent="end"
        sx={{
          background: (theme) => theme.palette.white.main,
        }}
      >
        <Grid
          xs={12}
          md={9}
          p={3}
          pl={{ lg: "8rem" }}
          sx={{
            background: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.white.main,
            clipPath: { lg: "polygon(10% 0, 100% 0, 100% 100%, 0 100%)" },
          }}
        >
          <Typography
            color="white"
            variant="body1"
            sx={{ fontStyle: "italic" }}
            mb={1}
          >
            From literary screen adaptations to original character pieces, our
            goal is to tell important stories. Stories that haven't been told on
            screen before. Work that entertains, captivates and inspires.
          </Typography>
          <Typography mr={5} color="white" variant="body1" textAlign="right">
            - Nell Hensey
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        pb={5}
        sx={{
          justifyContent: "center",
          position: "relative",
          background: (theme) => theme.palette.white.main,
        }}
      >
        <Grid xs={10} md={8}>
          <Typography
            variant="body1"
            textAlign="justify"
            sx={{
              span: {
                fontStyle: "italic",
                marginRight: (theme) => theme.spacing(0.3),
              },
            }}
          >
            We deeply value representation and inclusivity. Community is very
            important to us. We strive to work with the best, collaborating with
            like-minded people on local and international projects. Our slate
            features bold and exciting work that showcases Irish talent and
            provides a window for our audiences to experience the world in a new
            and exciting way.
            <br />
            <br />
            In 2023, <span>P</span>ure <span>D</span>ivilment Pictures launched
            its highly anticipated debut slate featuring an array of exciting
            projects across television, independent film and short form content.
            The company also expanded its creative team, adding positions across
            development, production and marketing.
          </Typography>
        </Grid>
      </Grid>

      <Typography
        variant="body1"
        textAlign="center"
        sx={{
          fontSize: "1.2rem",
        }}
      >
        And we're only getting started.
      </Typography>

      <Box
        sx={{
          background: (theme) => theme.palette.white.main,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-around"
          pt={5}
          pb={9}
          sx={{
            width: { xs: "fit-content", md: "70%" },
            margin: "0 auto",
            background: (theme) => theme.palette.white.main,
          }}
        >
          <LinkButton
            path="/productions/0"
            ariaLabel="Go to Productions page"
            color="primary"
            styles={{
              p: 2,
              borderRadius: 0,
              maxWidth: 200,
              width: { xs: "100%", md: "-webkit-fill-available" },
              mb: { xs: 5, md: 0 },
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            }}
            label="Go To Productions"
          />
          <LinkButton
            path="/the-creatives"
            ariaLabel="Go to The Creatives page"
            color="primary"
            styles={{
              p: 2,
              borderRadius: 0,
              maxWidth: 200,
              width: { xs: "100%", md: "-webkit-fill-available" },
              mb: { xs: 5, md: 0 },
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            }}
            label="Meet our Creatives"
          />
          <LinkButton
            path="/reach-out"
            ariaLabel="Go to Reach Out page"
            color="primary"
            styles={{
              p: 2,
              borderRadius: 0,
              maxWidth: 200,
              width: { xs: "100%", md: "-webkit-fill-available" },
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            }}
            label="Reach Out"
          />
        </Stack>
      </Box>

      <PageEndReel
        images={[
          "/about/image-reel/1.png",
          "/about/image-reel/2.png",
          "/about/image-reel/3.png",
          "/about/image-reel/4.jpeg",
        ]}
      />
    </>
  );
};

export default About;
