import React from "react";
import {
  StyledFooter,
  StyledTypography,
  Affiliates,
  AffiliatesContainer,
  LogoGrid,
  SocailLinksContainer,
  Copyright,
  FooterDetails,
} from "./styles";
import { Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
const ArtsCouncil = require("../../../Assets/arts-council.webp");
const ScreenIreland = require("../../../Assets/screen-ireland.webp");
const DIFF = require("../../../Assets/diff.webp");
const GFF = require("../../../Assets/gff.webp");
const RTE = require("../../../Assets/rte.webp");
const IFL = require("../../../Assets/ifl.webp");

const Footer = () => {
  return (
    <StyledFooter>
      <Affiliates sx={{ paddingBottom: (theme) => theme.spacing(5) }}>
        <AffiliatesContainer>
          <StyledTypography>Affiliates & Financiers</StyledTypography>
        </AffiliatesContainer>
        <Grid
          container
          sx={{
            justifyContent: "space-around",
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
      </Affiliates>
      <FooterDetails>
        <SocailLinksContainer>
          <Typography color="white">Instagram</Typography>
          <Typography color="white">IMDB</Typography>
        </SocailLinksContainer>
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
      </FooterDetails>
    </StyledFooter>
  );
};

export default Footer;
