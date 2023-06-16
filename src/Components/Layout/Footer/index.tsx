import React from "react";
import {
  StyledFooter,
  Wrapper,
  FooteSectionTitle,
  AffiliatesFooterSection,
  SocailLinksContainer,
  Copyright,
  FooterDetails,
  TestBox,
} from "./styles";
import { Box, Link, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useLocation } from "react-router-dom";
import { Logo } from "../../Logo";
const ArtsCouncil = require("../../../Assets/arts-council.webp");
const ScreenIreland = require("../../../Assets/screen-ireland.webp");
const DIFF = require("../../../Assets/diff.webp");
const GFF = require("../../../Assets/gff.webp");
const RTE = require("../../../Assets/rte.webp");
const IFL = require("../../../Assets/ifl.webp");
const SafeToCreate = require("../../../Assets/safe-to-create.png");
const ScreenProducersIreland = require("../../../Assets/screen-producers-ireland.png");

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
        }}
      >
        <TestBox>
          <img src={ScreenIreland} alt="Screen Ireland" />
        </TestBox>
        <TestBox>
          <img src={RTE} alt="RTE" />
        </TestBox>
        <TestBox>
          <img src={ScreenProducersIreland} alt="Screen Producers Ireland" />
        </TestBox>
        <TestBox>
          <img src={ArtsCouncil} alt="Arts Council" />
        </TestBox>
        <TestBox>
          <img src={DIFF} alt="DIFF" />
        </TestBox>
        <TestBox>
          <img src={IFL} alt="IFL" />
        </TestBox>
        <TestBox>
          <img src={GFF} alt="GFF" />
        </TestBox>
        <TestBox>
          <img src={SafeToCreate} alt="Safe to Create" />
        </TestBox>
      </Box>
    </AffiliatesFooterSection>
  );
};

const Footer = () => {
  const location = useLocation();
  return (
    <StyledFooter>
      <Wrapper>
        {(location.pathname === "/" || location.pathname === "/about") && (
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
