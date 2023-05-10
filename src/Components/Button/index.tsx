import React from "react";
import { BrandButton } from "./styles";
import { Box } from "@mui/material";

type ButtonProps = {
  href: string;
  label: string;
};

const PureDivilmentButton = (props: ButtonProps) => {
  return (
    <Box className="team-image" sx={{ width: "git-content", m: "0 auto" }}>
      <BrandButton href={props.href}>{props.label}</BrandButton>
    </Box>
  );
};

export default PureDivilmentButton;
