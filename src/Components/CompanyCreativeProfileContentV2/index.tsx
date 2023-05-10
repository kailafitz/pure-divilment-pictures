import React from "react";
import { Typography } from "@mui/material";
import { ProfileImage, BioTypography } from "./styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { ListItemInterface, CreativeInterface } from "../../Data/TeamData";
import ProfileContentSection from "./ProfileContentSection";

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

  const CreditsBody = () => {
    return (
      <>
        {" "}
        <Typography variant="h4">Credits</Typography>
        <Typography variant="h5">//</Typography>
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
                  <ListItemIcon sx={{ color: "#ffffff" }}>
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
        <Typography variant="h4">Accolades</Typography>
        <Typography variant="h5">//</Typography>
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
                  <ListItemIcon sx={{ color: "#ffffff" }}>
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
      <ProfileContentSection
        background={props.Creative.profile_image_src}
        xValue={props.Creative.bio_position.xValue}
        yValue={props.Creative.bio_position.yValue}
        children={<BioBody />}
        grid={6}
      ></ProfileContentSection>
      <ProfileContentSection
        background={props.Creative.credit_image_src}
        xValue={props.Creative.credits_position.xValue}
        yValue={props.Creative.credits_position.yValue}
        children={<CreditsBody />}
        grid={6}
      ></ProfileContentSection>
      {props.Creative.accolades && (
        <ProfileContentSection
          background={props.Creative.accolades_image_src}
          xValue={props.Creative.accolades_position?.xValue}
          yValue={props.Creative.accolades_position?.yValue}
          children={<AccoladesBody />}
          grid={6}
        ></ProfileContentSection>
      )}
    </>
  );
};

export default CompanyCreativeProfileContent;
