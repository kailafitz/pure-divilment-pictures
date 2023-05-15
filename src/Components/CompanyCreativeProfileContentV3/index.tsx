import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { BioTypography } from "./styles";
import { CreativeInterface, ListItemInterface } from "../../Data/TeamData";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ProfileContentSectionV2 from "./ProfileContentSection";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import PureDivilmentButton from "../Button";

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
        <Typography>
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
                <ListItem key={i}>
                  <ListItemIcon sx={{ color: "#000" }}>
                    <HorizontalRuleIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Credit />} />
                </ListItem>
              );
            })}
          </List>
        </Typography>
      </>
    );
  };

  const AccoladesBody = () => {
    return (
      <>
        <Typography variant="h6">Accolades</Typography>
        <Typography>
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
                <ListItem key={i} sx={{ py: 1, px: 0 }}>
                  <ListItemIcon sx={{ color: "#000" }}>
                    <HorizontalRuleIcon />
                  </ListItemIcon>
                  <ListItemText primary={<Accolade />} />
                </ListItem>
              );
            })}
          </List>
        </Typography>
      </>
    );
  };

  return (
    <>
      <ProfileContentSectionV2
        background={props.Creative.profile_image_src}
        children={<BioBody />}
        direction="row"
        gridImage={7}
        gridText={5}
      ></ProfileContentSectionV2>
      <ProfileContentSectionV2
        background={props.Creative.credit_image_src}
        children={<CreditsBody />}
        direction="row-reverse"
        gridImage={6}
        gridText={6}
      ></ProfileContentSectionV2>
      <ProfileContentSectionV2
        background={props.Creative.accolades_image_src}
        children={<AccoladesBody />}
        direction="row"
        gridImage={7}
        gridText={5}
      ></ProfileContentSectionV2>
      <Grid
        container
        justifyContent="center"
        pt={3}
        sx={{ minHeight: "calc(100vh - 97.5px)", display: "flex" }}
      >
        <Grid
          xs={12}
          sx={{
            minHeight: "70vh",
            flexGrow: 1,
            background: (theme) => theme.palette.primary.main,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography textAlign="center" color="common.white" variant="h3">
            Show Reel
          </Typography>
        </Grid>
        <Grid
          xs={12}
          md={6}
          p={5}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignSelf: "flex-start",
          }}
        >
          {/* <PureDivilmentButton
            label="Back to our Creatives"
            href="the_creatives"
            styles={{
              margin: "0 auto",
              display: "block",
              width: "fit-content",
            }}
          /> */}
          <Button
            href="the_creatives"
            variant="contained"
            color="primary"
            sx={{ p: 2, borderRadius: 0 }}
          >
            Back to our Creatives
          </Button>
        </Grid>
        <Grid xs={12} md={6} p={5}>
          {/* <PureDivilmentButton
            label="Go to Productions"
            href="productions/0"
            styles={{
              margin: "0 auto",
              display: "block",
              width: "fit-content",
            }}
          /> */}
          <Button
            href="productions/0"
            variant="contained"
            color="primary"
            sx={{ p: 2, borderRadius: 0 }}
          >
            Go to Productions
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyCreativeProfileContent;
