import React from "react";
import { TeamMemberCardContainer, TeamImage, TeamMemberTitle } from "./styles";
import { Box, Button } from "@mui/material";
import { CreativeInterface } from "../../Data/TeamData";

const CompanyCreativeCard = (props: CreativeInterface) => {
  return (
    <TeamMemberCardContainer
      component={Button}
      color="primary"
      href={`/the_creatives/team_member/${props.Creative.id}`}
    >
      <TeamImage
        className="border-animation"
        src={props.Creative.profile_image_src}
        alt={props.Creative.name}
      />
      <Box sx={{ width: "100%", paddingLeft: (theme) => theme.spacing(1) }}>
        <TeamMemberTitle
          className="text"
          variant="body2"
          sx={{ fontWeight: 500 }}
        >
          {props.Creative.name}
        </TeamMemberTitle>
        <TeamMemberTitle className="text" variant="body2">
          {props.Creative.role}
        </TeamMemberTitle>
      </Box>
    </TeamMemberCardContainer>
  );
};

export default CompanyCreativeCard;
