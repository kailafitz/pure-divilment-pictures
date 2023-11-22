import React, { ReactNode } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type linkButtonProps = {
  label: string;
  path: string;
  ariaLabel?: string;
  color: "primary" | "white";
  styles: Object;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void | null | undefined;
};

const LinkButton = (props: linkButtonProps) => {
  return (
    <Button
      variant="contained"
      component={Link}
      to={props.path}
      aria-label={props.ariaLabel}
      sx={props.styles}
      onClick={props.onClick}
      {...props}
    >
      {props.label}
    </Button>
  );
};

export default LinkButton;
