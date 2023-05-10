import React from "react";
import {
  StyledFooter,
  Wrapper,
  FooteSectionTitle,
  AffiliatesFooterSection,
  LogoGrid,
  SocailLinksContainer,
  Copyright,
  FooterDetails,
} from "./styles";
import { Box, Link, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useLocation } from "react-router-dom";
import { Logo } from "../../Logo";
const ArtsCouncil = require("../../../Assets/arts-council.webp");
const ScreenIreland = require("../../../Assets/screen-ireland.webp");
const DIFF = require("../../../Assets/diff.webp");
const GFF = require("../../../Assets/gff.webp");
const RTE = require("../../../Assets/rte.webp");
const IFL = require("../../../Assets/ifl.webp");

const Affiliates = () => {
  return (
    <AffiliatesFooterSection
      sx={{ paddingBottom: (theme) => theme.spacing(5) }}
    >
      <FooteSectionTitle>Affiliates & Financiers</FooteSectionTitle>
      <Grid
        container
        sx={{
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          width: {
            md: "80%",
          },
        }}
      >
        <LogoGrid xs={5} sm={3} md={1}>
          <img src={ArtsCouncil} alt="Arts Council" />
        </LogoGrid>
        <LogoGrid xs={5} sm={3} md={1}>
          <img src={RTE} alt="RTE" />
        </LogoGrid>
        <LogoGrid xs={12} sm={6} md={2}>
          <img src={ScreenIreland} alt="Screen Ireland" />
        </LogoGrid>
        <LogoGrid xs={5} sm={3} md={1}>
          <img src={DIFF} alt="DIFF" />
        </LogoGrid>
        <LogoGrid xs={5} sm={3} md={1}>
          <img src={GFF} alt="GFF" />
        </LogoGrid>
        <LogoGrid xs={5} sm={3} md={1}>
          <img src={IFL} alt="IFL" />
        </LogoGrid>
      </Grid>
    </AffiliatesFooterSection>
  );
};

const Footer = () => {
  const location = useLocation();
  return (
    <StyledFooter>
      <Wrapper>
        {(location.pathname === "/" || location.pathname === "/contact") && (
          <Affiliates />
        )}
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
            <Link color="common.white" sx={{ textTransform: "uppercase" }}>
              E-mail
            </Link>
            <Link color="common.white" sx={{ textTransform: "uppercase" }}>
              Instagram
            </Link>
            <Link color="common.white" sx={{ textTransform: "uppercase" }}>
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
                position: {
                  xs: "relative",
                  md:
                    location.pathname === "/" ||
                    location.pathname === "/contact"
                      ? "absolute"
                      : "relative",
                },
                left: {
                  md:
                    location.pathname === "/" ||
                    location.pathname === "/contact"
                      ? "calc(50% - (247.03px / 2))"
                      : "unset",
                },
                div: {
                  "span h1": {
                    fontSize: "20px",
                  },
                  h1: {
                    fontSize: "12px",
                  },
                },
                color: "white !important",
                mb: 3,
              }}
            />
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
                Pure Divilment Pictures<span> | </span>Website by Mikhaila
                Fitzpatrick
              </Typography>
            </Copyright>
          </Box>
        </FooterDetails>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
