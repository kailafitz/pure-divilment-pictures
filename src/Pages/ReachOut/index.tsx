import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Helmet } from "react-helmet";
import PageEndReel from "../../Components/PageEndReel";

const ReachOut = () => {
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

      <Stack
        direction="column"
        flexGrow={1}
        justifyContent="center"
        mb={{ xs: 2, lg: 0 }}
        mt={{ xs: 3, md: 0 }}
      >
        <Grid container justifyContent="center" mb={2}>
          <Grid xs={10} sm={7} md={5} lg={4}>
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
              href="mailto:info@puredivilmentpictures.com?subject=Enquiry"
              variant="body2"
              sx={{
                display: "block",
                mb: (theme) => theme.spacing(0.5),
              }}
            >
              info@puredivilmentpictures.com
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", fontSize: "13px" }}
            >
              Please note that we cannot accept unsolicited scripts or
              materials.
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid xs={10} sm={7} md={5} lg={4}>
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
              href="https://www.imdb.com/search/title/?companies=co1021516"
              display="block"
              color="primary"
              variant="body2"
              target="_blank"
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
              target="_blank"
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
          "/reach/1.jpeg",
          "/reach/2.jpeg",
          "/reach/3.jpeg",
          "/reach/4.png",
        ]}
      />
    </>
  );
};

export default ReachOut;
