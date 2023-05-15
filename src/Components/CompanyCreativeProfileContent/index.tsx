import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { BioTypography } from "./styles";
import { CreativeInterface, ListItemInterface } from "../../Data/TeamData";
import ProfileContentSection from "./ProfileContentSection";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const CompanyCreativeProfileContent = (props: CreativeInterface) => {
  const BioBody = () => {
    return (
      <>
        <Typography variant="h4">{props.Creative.name}</Typography>
        <Typography>{props.Creative.role}</Typography>
        <Typography variant="h5">//</Typography>
        <Typography>
          {props.Creative.bio.map((paragraph, i) => {
            return <BioTypography key={i}>{paragraph}</BioTypography>;
          })}
        </Typography>
      </>
    );
  };

  return (
    <>
      <ProfileContentSection
        background={props.Creative.profile_image_src}
        xValue={props.Creative.bio_position.xValue}
        yValue={props.Creative.bio_position.yValue}
        children={<BioBody />}
        grid={6}
      ></ProfileContentSection>
      <Grid container justifyContent="center" pt={3}>
        <Grid
          xs={11}
          sx={{
            height: "400px",
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
      </Grid>
      <Grid container justifyContent="center" p={4}>
        <Grid xs={11} md={6}>
          <Typography variant="body1">Credits</Typography>
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
                    <ListItemIcon
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    >
                      <HorizontalRuleIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Credit />} />
                  </ListItem>
                );
              })}
            </List>
          </Typography>
        </Grid>
        <Grid xs={11} md={5}>
          <Typography variant="body1">Accolades</Typography>
          <Typography>
            <List dense={true}>
              {props.Creative.accolades?.map(
                (accolade: ListItemInterface, i) => {
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
                      <ListItemIcon
                        sx={{ color: (theme) => theme.palette.primary.main }}
                      >
                        <HorizontalRuleIcon />
                      </ListItemIcon>
                      <ListItemText primary={<Accolade />} />
                    </ListItem>
                  );
                }
              )}
            </List>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyCreativeProfileContent;
