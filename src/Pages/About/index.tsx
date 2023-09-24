import React from "react";
import { Helmet } from "react-helmet";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AboutImage } from "./styles";
import PageEndReel from "../../Components/PageEndReel";

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

      <AboutImage src="/about/1.png" />

      <Typography
        variant="h4"
        sx={{
          background: (theme) => theme.palette.white.main,
          fontWeight: 400,
          textAlign: "center",
          padding: (theme) => theme.spacing(6, 0),
          textTransform: "unset",
          span: {
            fontStyle: "italic",
            letterSpacing: "2px",
          },
        }}
      >
        <div>We Tell Stories</div>
        <div>
          out of <span>pure divilment</span>
        </div>
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
        <Grid md={8}>
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
            empower and create opportunity, empower and showcase exceptional
            industry talent.
            <br />
            <br />
            At the helm of the company are Co-Founders, Claire Mooney and Nell
            Hensey. The pair met in 2019 while studying a Masters in Creative
            Production and Screen Finance at the National Film School IADT.
            Together, they are championing a new generation of great
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
          md={8}
          p={3}
          sx={{
            background: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.white.main,
          }}
        >
          <Typography
            color="white"
            variant="body1"
            fontWeight={700}
            sx={{ fontStyle: "italic" }}
            mb={1}
            textAlign="justify"
          >
            With each new project, we strive for the highest level of creativity
            and technical excellence. Our slate is carefully curated with select
            pieces that focus on compelling characters, new perspectives, and
            demonstrate international appeal.
          </Typography>
          <Typography
            color="white"
            variant="body1"
            textAlign="right"
            fontWeight={700}
          >
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
          md={8}
          p={3}
          sx={{
            background: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.white.main,
          }}
        >
          <Typography
            color="white"
            variant="body1"
            fontWeight={700}
            sx={{ fontStyle: "italic" }}
            mb={1}
          >
            From literary screen adaptations to original character pieces, our
            goal is to tell important stories. Stories that haven't been told on
            screen before. Work that entertains, captivates and inspires.
          </Typography>
          <Typography
            color="white"
            variant="body1"
            textAlign="right"
            fontWeight={700}
          >
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
        <Grid md={8}>
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
            important to us. We only work with the best, collaborating with
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
        variant="h6"
        textAlign="center"
        sx={{
          background: (theme) => theme.palette.white.main,
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
          <Button
            href="/test/productions"
            variant="contained"
            color="dark"
            sx={{
              p: 2,
              borderRadius: 0,
              maxWidth: 200,
              width: { xs: "100%", md: "-webkit-fill-available" },
              mb: { xs: 5, md: 0 },
              "&:hover": {
                backgroundColor: (theme) => theme.palette.dark.light,
              },
            }}
          >
            Go To Productions
          </Button>

          <Button
            href="/test/the-creatives"
            variant="contained"
            color="dark"
            sx={{
              p: 2,
              borderRadius: 0,
              maxWidth: 200,
              width: { xs: "100%", md: "-webkit-fill-available" },
              mb: { xs: 5, md: 0 },
              "&:hover": {
                backgroundColor: (theme) => theme.palette.dark.light,
              },
            }}
          >
            Meet our Creatives
          </Button>

          <Button
            href="/test/reach-out"
            variant="contained"
            color="dark"
            sx={{
              p: 2,
              borderRadius: 0,
              maxWidth: 200,
              width: { xs: "100%", md: "-webkit-fill-available" },
              "&:hover": {
                backgroundColor: (theme) => theme.palette.dark.light,
              },
            }}
          >
            Reach Out
          </Button>
        </Stack>
      </Box>

      <PageEndReel
        images={[
          "/about/image-reel/1.png",
          "/about/image-reel/2.png",
          "/about/image-reel/3.png",
          "/about/image-reel/4.png",
        ]}
      />
    </>
  );
};

export default About;
