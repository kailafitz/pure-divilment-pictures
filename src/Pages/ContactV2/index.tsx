import React from "react";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { StyledAboutBanner } from "../About/styles";
import Loader from "../../Components/Loader";
const contactReel1 = require("../../Assets/contact-image-1.png");
const contactReel2 = require("../../Assets/contact-image-2.png");
const contactReel3 = require("../../Assets/contact-image-3.png");
const AboutBanner = require("../../Assets/about.webp");

const Contact = () => {
  return (
    <>
      <Loader title="Reach Us" />
      {/* <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          position: "relative",
          display: "flex",
          width: "100%",
          margin: (theme) => theme.spacing(7, "auto"),
          "div + div": {
            md: { marginLeft: ".5vh" },
          },
        }}
      >
        <Box
          className="photo"
          sx={{
            position: "relative",
            transform: "skewY(-15deg)",
          }}
        >
          <img
            style={{
              width: "100%",
              //   transform: "skewY(15deg)",
              overflow: "hidden",
            }}
            src={contactReel1}
            alt="contact-1"
          />
        </Box>

        <Box
          sx={{
            position: "relative",
            transform: "skewY(4deg)",
            marginTop: (theme) => theme.spacing(-3),
            // overflow: "hidden",
            // display: "block",
          }}
        >
          <img style={{ width: "100%" }} src={contactReel2} alt="contact-2" />
        </Box>

        <div
          style={{
            position: "relative",
            // overflow: "hidden",
            // display: "block",
          }}
        >
          <img style={{ width: "100%" }} src={contactReel3} alt="contact-3" />
        </div>
      </Stack> */}
      {/* <StyledAboutBanner src={AboutBanner} alt="About Pure Divilment" /> */}
      <Container sx={{ mt: 4 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mb: (theme) => theme.spacing(5),
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "65vw" } }}>
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
            <Stack>
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
            </Stack>
          </Box>
          <Box>
            <Typography
              variant="body2"
              sx={{
                textTransform: "uppercase",
                fontWeight: 500,
                mb: { xs: 1, sm: 3 },
                mt: { xs: 3, sm: 0 },
                textAlign: "right",
              }}
            >
              Follow Us
            </Typography>
            <Stack textAlign="right">
              <Link
                color="primary"
                variant="body2"
                sx={{
                  fontWeight: 500,
                  mb: (theme) => theme.spacing(1),
                }}
              >
                IMDB
              </Link>
              <Link color="primary" variant="body2" sx={{ fontWeight: 500 }}>
                Instagram
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Contact;
