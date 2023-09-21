import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ProfileImage, Stills } from "./styles";
import { CreativeInterface, ListItemInterface } from "../../Data/CreativesData";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Bio } from "./Bio";
import { Accolades } from "./Accolades";

const CreativeContent = (props: CreativeInterface) => {
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
          <Bio
            name={props.Creative.name}
            role={props.Creative.role}
            bio={props.Creative.bio}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" columnGap={5} pt={8} pb={8}>
        <Grid xs={11} md={5}>
          {props.Creative.accolades && (
            <Accolades accolades={props.Creative.accolades} />
          )}
        </Grid>
        <Grid xs={11} md={5}>
          <CreditsBody />
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        columnGap={5}
        rowGap={{ xs: 5, md: 0 }}
        mb={8}
      >
        <Grid xs={11} md={5}>
          <picture>
            <source
              src={`/creatives/${props.Creative.profile_image}/stills/1.webp`}
            ></source>
            <Stills
              alt={`${props.Creative.name} working on a project`}
              width={500}
              height="auto"
              src={`/creatives/${props.Creative.profile_image}/stills/1.png`}
            />
          </picture>
        </Grid>
        <Grid xs={11} md={5}>
          <picture>
            <source
              src={`/creatives/${props.Creative.profile_image}/stills/2.webp`}
            ></source>
            <Stills
              alt={`${props.Creative.name} working on a project`}
              width={500}
              height="auto"
              src={`/creatives/${props.Creative.profile_image}/stills/2.png`}
            />
          </picture>
        </Grid>
      </Grid>

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
              poster="/creatives/nell/stills/1.png"
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
