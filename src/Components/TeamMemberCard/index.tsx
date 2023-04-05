import React from "react";
import { TeamMemberCardContainer, TeamImage, TeamMemberTitle } from "./styles";
import { Box, Button } from "@mui/material";
import { TeamMemberInterface } from "../../Data/TeamData";

const TeamMemberCard = (props: TeamMemberInterface) => {
  return (
    <TeamMemberCardContainer
      component={Button}
      color="black"
      href={`/the_team/team_member/${props.TeamMember.id}`}
    >
      <TeamImage
        src={props.TeamMember.profile_image_src}
        alt={props.TeamMember.name}
      />
      <Box sx={{ width: "100%", paddingLeft: (theme) => theme.spacing(1) }}>
        <TeamMemberTitle
          className="text"
          variant="body2"
          sx={{ fontWeight: 500 }}
        >
          {props.TeamMember.name}
        </TeamMemberTitle>
        <TeamMemberTitle className="text" variant="body2">
          {props.TeamMember.role}
        </TeamMemberTitle>
      </Box>
    </TeamMemberCardContainer>
  );
};

export default TeamMemberCard;
