import React from "react";
import {
  StyledFooter,
  Wrapper,
  FooteSectionTitle,
  AffiliatesFooterSection,
  SocailLinksContainer,
  Copyright,
  FooterDetails,
  LogoWrapper,
} from "./styles";
import { Box, Stack, Typography, Link, useTheme } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useLocation } from "react-router-dom";
import { Logo } from "../../Logo";
import { MyNavLink } from "../Navbar/NavigationLink";

const partners = [
  "screen-ireland",
  "rte",
  "arts-council",
  "tiff",
  "ifl",
  "diff",
  "gff",
  "safe-to-create",
];

const Affiliates = () => {
  return (
    <AffiliatesFooterSection
      sx={{ paddingBottom: (theme) => theme.spacing(8) }}
    >
      <FooteSectionTitle>Partners & Affiliates</FooteSectionTitle>
      <Box
        sx={{
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          width: {
            md: "80%",
          },
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          "div:last-child img": {
            height: "50px",
          },
        }}
      >
        {partners.map((partner, i) => {
          return (
            <LogoWrapper key={i}>
              <picture>
                <source srcSet={`/partners/${partner}.webp`} />
                <img
                  src={`/partners/${partner}.png`}
                  alt={`${partner}`}
                  loading="lazy"
                  width={58}
                  height={40}
                />
              </picture>
            </LogoWrapper>
          );
        })}
      </Box>
    </AffiliatesFooterSection>
  );
};

const Footer = () => {
  const location = useLocation();
  const theme = useTheme();
  return (
    <StyledFooter>
      <Wrapper>
        {location.pathname === "/" && <Affiliates />}
        <FooterDetails>
          <SocailLinksContainer
            sx={{
              "&:hover a": {
                opacity: 0.3,
              },
              "a:hover": {
                opacity: 1,
                cursor: "pointer",
              },
            }}
          >
            <Link
              component={MyNavLink}
              color="inherit"
              sx={{ textTransform: "uppercase" }}
              to="mailto:info@puredivilmentpictures.com?subject=Enquiry"
            >
              E-mail
            </Link>
            <Link
              component={MyNavLink}
              color="inherit"
              sx={{ textTransform: "uppercase" }}
              target="_blank"
              to="https://www.instagram.com/puredivilmentpictures/"
            >
              Instagram
            </Link>
            <Link
              component={MyNavLink}
              color="inherit"
              sx={{ textTransform: "uppercase" }}
              target="_blank"
              to="https://www.imdb.com/search/title/?companies=co1021516"
            >
              IMDB
            </Link>
          </SocailLinksContainer>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "end" },
              justifyContent: { md: "flex-end" },
            }}
          >
            <Logo
              style={{
                color: theme.palette.white.main,
                svg: {
                  margin: "0 auto 1.5rem auto",
                  display: "block",
                },
              }}
            />
            <Stack direction={{ xs: "column", sm: "row" }}>
              <Typography
                textAlign="center"
                variant="copyright"
                sx={{
                  mb: { xs: 2, sm: 0 },
                  span: {
                    display: { xs: "none", sm: "inline" },
                    marginLeft: theme.spacing(1),
                  },
                }}
              >
                {/* <Link
                  underline="hover"
                  component={MyNavLink}
                  to="/privacy-policy"
                  color="inherit"
                  sx={{ textTransform: "uppercase" }}
                >
                  Privacy
                </Link>

                <span> | </span> */}
              </Typography>
              <Copyright>
                <Typography
                  variant="copyright"
                  sx={{
                    textTransform: "uppercase",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CopyrightIcon />
                  Pure Divilment Pictures {new Date().getFullYear()}
                  <span> | </span>Website by Mikhaila Fitzpatrick
                </Typography>
              </Copyright>
            </Stack>
          </Box>
        </FooterDetails>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
