import React from "react";
import { BrandButton } from "./styles";
import { Box } from "@mui/material";

type ButtonProps = {
  href: string;
  label: string;
  styles?: Object;
};

const PureDivilmentButton = (props: ButtonProps) => {
  return (
    // <Box sx={{ width: "fit-content", m: "0 auto", ...props.styles }}>
    <Box sx={{ minWidth: "90px", m: "0 auto", ...props.styles }}>
      <BrandButton href={props.href}>{props.label}</BrandButton>
    </Box>
  );
};

export default PureDivilmentButton;
