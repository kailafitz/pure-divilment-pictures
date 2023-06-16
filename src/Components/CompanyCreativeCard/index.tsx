import React from "react";
import { TeamMemberCardContainer, TeamImage, TeamMemberTitle } from "./styles";
import { Box, Button } from "@mui/material";
import { CreativeInterface } from "../../Data/TeamData";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CompanyCreativeCard = (props: CreativeInterface) => {
  let w = window.screen.width;
  return (
    <TeamMemberCardContainer
      component={Button}
      color="primary"
      href={`/the_creatives/team_member/${props.Creative.id}`}
    >
      <TeamImage
        src={props.Creative.profile_image_src}
        alt={props.Creative.name}
      />
      <Box
        sx={{
          width: "100%",
          paddingLeft: (theme) => theme.spacing(1),
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
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
        </div>
        {w < 768 && <NavigateNextIcon />}
      </Box>
    </TeamMemberCardContainer>
  );
};

export default CompanyCreativeCard;
