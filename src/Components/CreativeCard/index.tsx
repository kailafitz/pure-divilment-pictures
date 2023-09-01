import React from "react";
import { TeamMemberCardContainer, TeamImage, TeamMemberTitle } from "./styles";
import { Box, Button } from "@mui/material";
import { CreativeInterface } from "../../Data/CreativesData";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CompanyCreativeCard = (props: CreativeInterface) => {
  let w = window.screen.width;
  return (
    <TeamMemberCardContainer
      component={Button}
      color="primary"
      href={`/test/the-creatives/creative/${props.Creative.id}`}
    >
      <picture>
        <source
          srcSet={`/creatives/${props.Creative.profile_image}.webp`}
          type="image/webp"
        ></source>
        <TeamImage
          src={`/creatives/${props.Creative.profile_image}.png`}
          alt={props.Creative.name}
        />
      </picture>
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
