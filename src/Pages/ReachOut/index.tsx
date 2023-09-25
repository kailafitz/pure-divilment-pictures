import React from "react";
import { Link, Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Helmet } from "react-helmet";
import PageEndReel from "../../Components/PageEndReel";

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

      <Stack direction="column" flexGrow={1} justifyContent="center">
        <Grid
          container
          justifyContent="center"
          sx={{
            backgroundColor: theme.palette.white.main,
            width: "100%",
            py: { xs: 2, lg: 4 },
          }}
          rowGap={{ xs: 4, lg: 0 }}
        >
          <Grid xs={10} sm={7} md={4}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: 500,
                mb: 1.5,
              }}
            >
              Contact
            </Typography>
            <Typography
              component={Link}
              href="mailto:info@puredivilmentpictures.com"
              variant="body2"
              sx={{
                display: "block",
                mb: (theme) => theme.spacing(0.5),
              }}
            >
              info@puredivilmentpictures.ie
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", fontSize: "13px" }}
            >
              Please note that we cannot accept unsolicited scripts or
              materials.
            </Typography>
          </Grid>
          <Grid xs={10} sm={7} md={2} xl={1}>
            <Typography
              variant="h6"
              sx={{
                textTransform: "uppercase",
                fontWeight: 500,
                mb: 1.5,
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
                mb: (theme) => theme.spacing(0.5),
              }}
            >
              IMDB
            </Link>
            <Link
              href="https://www.instagram.com/puredivilmentpictures/"
              display="block"
              color="primary"
              variant="body2"
              sx={{ fontWeight: 500 }}
            >
              Instagram
            </Link>
          </Grid>
        </Grid>
      </Stack>
      <PageEndReel
        images={[
          "/reach/1.png",
          "/reach/2.png",
          "/reach/3.png",
          "/reach/4.png",
        ]}
      />
    </>
  );
};

export default ReachOut;
