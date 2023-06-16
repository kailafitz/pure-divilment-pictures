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
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            width: "100%",
            display: "flex",
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "65vw" }, mb: 5 }}>
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
                textAlign: "right",
                mb: 3,
              }}
            >
              Follow Us
            </Typography>
            <Stack textAlign="right">
              <Link
                color="primary"
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: (theme) => theme.spacing(1),
                }}
              >
                IMDB
              </Link>
              <Link color="primary" variant="h6" sx={{ fontWeight: 500 }}>
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
