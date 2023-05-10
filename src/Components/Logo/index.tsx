import React from "react";
import { LogoContainer, StyledLogoHeading, StyledLogoSubtitle } from "./styles";
import { Link } from "@mui/material";

interface LogoProps {
  color?: string;
  style?: object;
}

export const Logo = (props: LogoProps) => {
  return (
    <Link href="/" color={props.color} sx={props.style} className="logo">
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
