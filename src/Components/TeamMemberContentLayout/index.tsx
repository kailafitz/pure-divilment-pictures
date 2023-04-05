import React from "react";
// import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { StyledAboutBanner } from "../../Pages/About/styles";
import { Typography } from "@mui/material";
import { ProfileImage, BioTypography } from "./styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TheatersIcon from "@mui/icons-material/Theaters";
import { CreditsInterface, TeamMemberInterface } from "../../Data/TeamData";

const AboutBanner = require("../../Assets/about.webp");

const TeamMemberContentLayout = (props: TeamMemberInterface) => {
  return (
    <>
      <StyledAboutBanner
        src={AboutBanner}
        alt="About Pure Divilment"
        sx={{ mb: 5 }}
      />
      <Box sx={{ pt: 7 }}>
        <Grid
          container
          sx={{
            justifyContent: { xs: "center", sm: "initial" },
          }}
        >
          <Grid
            xs={12}
            md={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <ProfileImage
              sx={{
                backgroundImage: `url(${props.TeamMember.profile_image_src})`,
                // transform: "skewY(8deg)",
                clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)",
              }}
            />
          </Grid>
          <Grid
            xs={10}
            md={6}
            pt={8}
            sx={{
              pl: { sm: 3 },
              pt: { sm: 4 },
            }}
          >
            <Typography variant="h4">{props.TeamMember.name}</Typography>
            <Typography mb={2}>{props.TeamMember.role}</Typography>
            {props.TeamMember.bio.map((paragraph, i) => {
              return <BioTypography key={i}>{paragraph}</BioTypography>;
            })}
          </Grid>
        </Grid>
        <Grid
          container
          pt={10}
          sx={{ justifyContent: { xs: "center", sm: "end" } }}
        >
          <Grid xs={10} md={5}>
            <Typography>Credits</Typography>
            <List dense={true}>
              {props.TeamMember.credits.map((credit: CreditsInterface, i) => {
                const Credit = () => {
                  return (
                    <>
                      <span style={{ fontWeight: 700 }}>{credit.title}</span>
                      <span>{credit.heading}</span>
                      <br />
                      {credit.affiliates}
                    </>
                  );
                };

                return (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <TheatersIcon />
                    </ListItemIcon>
                    <ListItemText primary={<Credit />} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid xs={12} md={6}>
            <ProfileImage
              sx={{
                backgroundImage: `url(${props.TeamMember.credit_image_src})`,
                clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0% 100%)",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TeamMemberContentLayout;
