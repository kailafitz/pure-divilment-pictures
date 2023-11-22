import React from "react";
import { ProfileImage } from "./styles";
import { CreativeInterface } from "../../Data/CreativesData";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Bio } from "./Bio";
import { Accolades } from "./Accolades";
import { Credits } from "./Credits";
import { CreativesData } from "../../Data/CreativesData";
import LinkButton from "../LinkButton";

const CreativeContent = (props: CreativeInterface) => {
  return (
    <>
      <Grid
        container
        px={{ xs: 2, md: 7 }}
        mb={{ xs: 3, md: 0 }}
        justifyContent="space-between"
      >
        <LinkButton
          path={`/the-creatives/creative/${Number(props.Creative.id) - 1}`}
          color="primary"
          styles={{
            borderRadius: 0,
            visibility: Number(props.Creative.id) < 2 ? "hidden" : "visible",
          }}
          startIcon={<KeyboardDoubleArrowLeftIcon />}
          label="Previous"
        />
        <LinkButton
          path={`/the-creatives/creative/${Number(props.Creative.id) + 1}`}
          color="primary"
          styles={{
            borderRadius: 0,
            visibility:
              Number(props.Creative.id) === CreativesData.length
                ? "hidden"
                : "visible",
          }}
          endIcon={<KeyboardDoubleArrowRightIcon />}
          label="Next"
        />
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
          {props.Creative.credits.length > 0 && (
            <Credits credits={props.Creative.credits} />
          )}

          {props.Creative.accolades.length > 0 && (
            <Accolades accolades={props.Creative.accolades} />
          )}
        </Grid>
      </Grid>

      {props.Creative.reel_url && (
        <Grid
          container
          justifyContent="center"
          sx={{
            pt: 5,
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
        sx={{
          background: (theme) => theme.palette.primary.main,
          pt: { xs: 2, md: 0 },
        }}
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
          <LinkButton
            path="/the-creatives/"
            color="white"
            styles={{
              p: 2,
              borderRadius: 0,
              width: { xs: "100%", md: "fit-content" },
            }}
            label="Back to Creatives"
          />
        </Grid>
        <Grid xs={8} sm={7} md={6} sx={{ p: { xs: 2, md: 5 } }}>
          <LinkButton
            path="/productions/0"
            color="white"
            styles={{
              p: 2,
              borderRadius: 0,
              width: { xs: "100%", md: "fit-content" },
            }}
            label="Go to Productions"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CreativeContent;
