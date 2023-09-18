import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { BioTypography, ProfileImage, Stills } from "./styles";
import { CreativeInterface, ListItemInterface } from "../../Data/CreativesData";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PageEndReel from "../PageEndReel";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const CreativeContent = (props: CreativeInterface) => {
  const BioBody = () => {
    return (
      <>
        <Typography variant="h4">{props.Creative.name}</Typography>
        <Typography>{props.Creative.role}</Typography>
        <br />
        {props.Creative.bio.map((paragraph, i) => {
          return <BioTypography key={i}>{paragraph}</BioTypography>;
        })}
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
      <Grid container pl={7}>
        <Button
          href="/test/the-creatives"
          variant="contained"
          color="dark"
          sx={{ borderRadius: 0 }}
          startIcon={<KeyboardDoubleArrowLeftIcon />}
        >
          Back
        </Button>
      </Grid>
      <Grid
        container
        justifyContent="center"
        columnGap={5}
        rowGap={{ xs: 5, md: 0 }}
        pt={{ sm: 6 }}
      >
        <Grid xs={12} md={4}>
          <picture>
            <source
              srcSet={`/creatives/${props.Creative.profile_image}/${props.Creative.profile_image}.webp`}
              type="image/webp"
            ></source>
            <ProfileImage
              src={props.Creative.profile_image}
              alt={props.Creative.name}
            />
          </picture>
        </Grid>
        <Grid xs={11} md={6}>
          <BioBody />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" columnGap={5} pt={8} pb={8}>
        <Grid xs={11} md={5}>
          {props.Creative.accolades && <AccoladesBody />}
        </Grid>
        <Grid xs={11} md={5}>
          <CreditsBody />
        </Grid>
      </Grid>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          width: { xs: "100%", md: "90%" },
          margin: (theme) => theme.spacing(0, "auto", 8, "auto"),
        }}
        justifyContent="space-evenly"
      >
        <picture>
          <source
            src={`/creatives/${props.Creative.profile_image}/stills/1.webp`}
          ></source>
          <Stills
            alt="Nell Hensey on set"
            width={500}
            height="auto"
            src={`/creatives/${props.Creative.profile_image}/stills/1.png`}
          />
        </picture>
        <picture>
          <source
            src={`/creatives/${props.Creative.profile_image}/stills/2.webp`}
          ></source>
          <Stills
            alt="Nell Hensey on a panel talk"
            width={500}
            height="auto"
            src={`/creatives/${props.Creative.profile_image}/stills/2.png`}
          />
        </picture>
      </Stack>
      {/* <PageEndReel
        images={[
          `/creatives/${props.Creative.profile_image}/${props.Creative.profile_image}.webp`,
          `/creatives/${props.Creative.profile_image}/${props.Creative.profile_image}.webp`,
          `/creatives/${props.Creative.profile_image}/${props.Creative.profile_image}.webp`,
          `/creatives/${props.Creative.profile_image}/${props.Creative.profile_image}.webp`,
        ]}
      /> */}
      {props.Creative.reel_url && (
        <Grid
          container
          justifyContent="center"
          py={7}
          sx={{
            display: "flex",
            background: (theme) => theme.palette.primary.main,
          }}
        >
          <Grid
            xs={10}
            md={6}
            sx={{
              background: (theme) => theme.palette.white.main,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <video
              className="production-title"
              height="100%"
              width="100%"
              preload="none"
              controls={true}
              playsInline
            >
              <source src={props.Creative.reel_url} type="video/mp4"></source>
            </video>
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
          sm={7}
          md={6}
          sx={{
            p: { xs: 2, md: 5 },
            display: "flex",
            justifyContent: { md: "flex-end" },
          }}
        >
          <Button
            href="/test/the-creatives/"
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
        <Grid xs={8} sm={7} md={6} sx={{ p: { xs: 2, md: 5 } }}>
          <Button
            href="/test/productions/0"
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

export default CreativeContent;
