import React from "react";
import {
  CreativeCardContainer,
  CreativeImage,
  CreativeMemberTitle,
} from "./styles";
import { Box, useTheme } from "@mui/material";
import { CreativeInterface } from "../../Data/CreativesData";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const CompanyCreativeCard = (props: CreativeInterface) => {
  const theme = useTheme();
  return (
    <CreativeCardContainer
      component={Link}
      color="primary"
      to={`/the-creatives/creative/${props.Creative.id}`}
    >
      <picture>
        <source
          srcSet={`/creatives/${props.Creative.profile_image}/${props.Creative.profile_image}.webp`}
          type="image/webp"
        ></source>
        <CreativeImage
          src={`/creatives/${props.Creative.profile_image}.png`}
          alt={props.Creative.name}
        />
      </picture>

      <Box
        sx={{
          width: "100%",
          paddingLeft: theme.spacing(1),
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: {
            xs: theme.palette.primary.main,
          },
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <CreativeMemberTitle
            className="text"
            variant="body2"
            sx={{ fontWeight: 500 }}
          >
            {props.Creative.name}
          </CreativeMemberTitle>
          <CreativeMemberTitle className="text" variant="body2">
            {props.Creative.role}
          </CreativeMemberTitle>
        </div>
        <NavigateNextIcon />
      </Box>
    </CreativeCardContainer>
  );
};

export default CompanyCreativeCard;
