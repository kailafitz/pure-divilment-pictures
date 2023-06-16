import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { BioTypography, ProfileImage } from "./styles";
import { CreativeInterface, ListItemInterface } from "../../Data/TeamData";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
  ProductionReelTwo,
  ReelTwoWrapper,
} from "../ProductionContentLayout/styles";

const CompanyCreativeProfileContent = (props: CreativeInterface) => {
  const BioBody = () => {
    return (
      <>
        <Typography variant="h4">{props.Creative.name}</Typography>
        <Typography>{props.Creative.role}</Typography>
        <br />
        <Typography>
          {props.Creative.bio.map((paragraph, i) => {
            return <BioTypography key={i}>{paragraph}</BioTypography>;
          })}
        </Typography>
      </>
    );
  };

  const CreditsBody = () => {
    return (
      <>
        <Typography variant="h6">Credits</Typography>
        <List dense={true}>
          {props.Creative.credits.map((credit: ListItemInterface, i) => {
            const Credit = () => {
              return (
                <>
                  <span style={{ fontWeight: 700, fontStyle: "italic" }}>
                    {credit.title}
                  </span>
                  <span style={{ fontWeight: 700 }}> {credit.year}</span>
                  <span>{credit.heading}</span>
                  <br />
                  {credit.affiliates}
                </>
              );
            };

            return (
              <ListItem key={i} sx={{ py: 1, pl: 0 }}>
                <ListItemText primary={<Credit />} />
              </ListItem>
            );
          })}
        </List>
      </>
    );
  };

  const AccoladesBody = () => {
    return (
      <>
        <Typography textAlign="right" variant="h6">
          Accolades
        </Typography>
        <List dense={true}>
          {props.Creative.accolades?.map((accolade: ListItemInterface, i) => {
            const Accolade = () => {
              return (
                <>
                  <span
                    style={{
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    {accolade.title}
                  </span>
                  <span>{accolade.heading}</span>
                  <br />
                  {accolade.affiliates}
                </>
              );
            };

            return (
              <ListItem key={i} sx={{ py: 1, pr: 0, textAlign: "right" }}>
                <ListItemText primary={<Accolade />} />
              </ListItem>
            );
          })}
        </List>
      </>
    );
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        columnGap={5}
        rowGap={{ xs: 5, md: 0 }}
        pt={6}
      >
        <Grid xs={12} md={4}>
          <ProfileImage
            src={props.Creative.profile_image_src}
            alt={props.Creative.name}
          />
        </Grid>
        <Grid xs={11} md={6}>
          <BioBody />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" columnGap={5} pt={15} pb={13}>
        <Grid xs={11} md={5}>
          {props.Creative.accolades && <AccoladesBody />}
        </Grid>
        <Grid xs={11} md={5}>
          <CreditsBody />
        </Grid>
      </Grid>
      <ProductionReelTwo
        container
        justifyContent={{ xs: "center", lg: "unset" }}
        columnSpacing={0.3}
        rowSpacing={{ xs: 4, lg: 0 }}
      >
        {props.Creative.image_reel?.map((reelImage, i) => {
          return (
            <Grid
              key={i}
              sx={{
                py: { lg: 0 },
                position: "relative",
                height: { xs: "250px", md: "inherit" },
              }}
              xs={10}
              sm={6}
              md={3}
            >
              <ReelTwoWrapper
                sx={{
                  "&::before": {
                    background: `url(${reelImage}) no-repeat`,
                    backgroundSize: "cover",
                  },
                }}
              ></ReelTwoWrapper>
            </Grid>
          );
        })}
      </ProductionReelTwo>
      {props.Creative.reelURL && (
        <Grid
          container
          justifyContent="center"
          pt={7}
          sx={{
            display: "flex",
            background: (theme) => theme.palette.primary.main,
          }}
        >
          <Grid
            xs={10}
            md={6}
            sx={{
              minHeight: "50vh",
              background: (theme) => theme.palette.white.main,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography textAlign="center" color="dark" variant="h3">
              Show Reel
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid
        container
        justifyContent="center"
        py={3}
        sx={{ background: (theme) => theme.palette.primary.main }}
      >
        <Grid
          xs={8}
          md={6}
          sx={{
            p: { xs: 2, md: 5 },
            display: "flex",
            justifyContent: { md: "flex-end" },
          }}
        >
          <Button
            href="/the_creatives"
            variant="contained"
            color="white"
            sx={{
              p: 2,
              borderRadius: 0,
              width: { xs: "100%", md: "fit-content" },
            }}
          >
            Back to Creatives
          </Button>
        </Grid>
        <Grid xs={8} md={6} sx={{ p: { xs: 2, md: 5 } }}>
          <Button
            href="/productions/0"
            variant="contained"
            color="white"
            sx={{
              p: 2,
              borderRadius: 0,
              width: { xs: "100%", md: "fit-content" },
            }}
          >
            Go to Productions
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyCreativeProfileContent;
