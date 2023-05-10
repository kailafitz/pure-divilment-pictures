import React from "react";
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
import { ListItemInterface, CreativeInterface } from "../../Data/TeamData";

const AboutBanner = require("../../Assets/about.webp");

const CompanyCreativeProfileContent = (props: CreativeInterface) => {
  return (
    <>
      <StyledAboutBanner src={AboutBanner} alt="About Pure Divilment" />
      <Box
        sx={{
          width: "40vw",
          height: "1.5px",
          margin: (theme) => theme.spacing(6, "auto"),
          background: "black",
        }}
      />
      <Box>
        <Grid
          container
          sx={{
            justifyContent: { xs: "center", sm: "initial" },
          }}
        >
          <Grid
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <ProfileImage
              sx={{
                backgroundImage: `url(${props.Creative.profile_image_src})`,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0 85%)",
              }}
            />
          </Grid>
          <Grid xs={10} md={6} p={5}>
            <Typography variant="h4">{props.Creative.name}</Typography>
            <Typography mb={2}>{props.Creative.role}</Typography>
            {props.Creative.bio.map((paragraph, i) => {
              return <BioTypography key={i}>{paragraph}</BioTypography>;
            })}
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: { xs: "center", sm: "end" } }}>
          <Grid
            xs={10}
            md={6}
            p={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "fit-content",
                margin: (theme) => theme.spacing(0, "auto"),
              }}
            >
              <Typography>Credits</Typography>
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
                    <ListItem key={i} sx={{ py: 1, px: 0 }}>
                      <ListItemIcon>
                        <TheatersIcon />
                      </ListItemIcon>
                      <ListItemText primary={<Credit />} />
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <ProfileImage
              sx={{
                backgroundImage: `url(${props.Creative.credit_image_src})`,
                clipPath: props.Creative.accolades
                  ? // ? "polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%)"
                    "polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)"
                  : // : "polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)",
                    "polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)",
              }}
            />
          </Grid>
        </Grid>
        {props.Creative.accolades && (
          <Grid
            container
            direction={{ xs: "column-reverse", md: "row" }}
            sx={{
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <Grid xs={12} md={6}>
              <ProfileImage
                sx={{
                  backgroundImage: `url(${props.Creative.accolades_image_src})`,
                  // clipPath: "polygon(0% 0%, 100% 15%, 100% 100%, 0% 100%)",
                  clipPath: "polygon(0% 15%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </Grid>
            <Grid
              xs={10}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "fit-content",
                  margin: (theme) => theme.spacing(0, "auto"),
                }}
              >
                <Typography>Accolades</Typography>
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
                          <ListItemIcon>
                            <TheatersIcon />
                          </ListItemIcon>
                          <ListItemText primary={<Accolade />} />
                        </ListItem>
                      );
                    }
                  )}
                </List>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default CompanyCreativeProfileContent;
