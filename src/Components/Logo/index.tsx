import React from "react";
import { LogoContainer, StyledLogoHeading, StyledLogoSubtitle } from "./styles";
import { Link } from "@mui/material";

interface LogoProps {
  style: object;
}

export const Logo = (props: LogoProps) => {
  return (
    <Link href="/" underline="none" sx={props.style}>
      <LogoContainer>
        <span>
          <StyledLogoHeading>Pure</StyledLogoHeading>
        </span>
        <span>
          <StyledLogoHeading>Divilment</StyledLogoHeading>
        </span>
        <StyledLogoSubtitle>Pictures</StyledLogoSubtitle>
      </LogoContainer>
    </Link>
  );
};
