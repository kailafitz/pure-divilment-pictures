import React from "react";
import { Button } from "@mui/material";
import { ProfileImage } from "./styles";
import { CreativeInterface } from "../../Data/CreativesData";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Bio } from "./Bio";
import { Accolades } from "./Accolades";
import { Credits } from "./Credits";

const CreativeContent = (props: CreativeInterface) => {
  return (
    <>
      <Grid container pl={{ xs: 2, md: 7 }} mb={{ xs: 3, md: 0 }}>
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
        pt={{ sm: 5 }}
        pb={5}
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
        <Grid xs={10} md={6}>
          <Bio
            name={props.Creative.name}
            role={props.Creative.role}
            bio={props.Creative.bio}
          />
          {props.Creative.accolades.length > 0 && (
            <Accolades accolades={props.Creative.accolades} />
          )}

          {props.Creative.credits.length > 0 && (
            <Credits credits={props.Creative.credits} />
          )}
        </Grid>
      </Grid>

      {/* {(props.Creative.accolades.length > 0 ||
        props.Creative.credits.length > 0) && (
        <Grid container justifyContent="center" columnGap={5} pb={5}>
          <Grid xs={10} md={5}>
            {props.Creative.accolades.length > 0 && (
              <Accolades accolades={props.Creative.accolades} />
            )}
          </Grid>
          <Grid xs={10} md={5}>
            {props.Creative.credits.length > 0 && (
              <Credits credits={props.Creative.credits} />
            )}
          </Grid>
        </Grid>
      )} */}

      {/* <Grid
        container
        justifyContent="center"
        columnGap={5}
        rowGap={{ xs: 5, md: 0 }}
        mb={8}
      >
        <Grid xs={12} md={5}>
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
        <Grid xs={12} md={5}>
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
      </Grid> */}

      {props.Creative.reel_url && (
        <Grid
          container
          justifyContent="center"
          sx={{
            p: (theme) => theme.spacing(7, 0, 4, 0),
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
              poster={`/creatives/${props.Creative.profile_image}/reel-poster.png`}
            >
              <source src={props.Creative.reel_url} type="video/mp4"></source>
            </video>
          </Grid>
        </Grid>
      )}

      <Grid
        container
        justifyContent="center"
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
