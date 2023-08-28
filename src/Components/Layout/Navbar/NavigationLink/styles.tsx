import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.white.main,
  fontWeight: 300,
  textTransform: "uppercase",
  fontSize: "1.1rem",
  position: "relative",
  "&::first-letter": {
    fontStyle: "oblique 15deg",
  },
  // first span letter neutral style
  "span:nth-of-type(1)": {
    transition: "all 1s ease-in",
    transform: "skewX(0deg)",
    fontWeight: 400,
  },
  // a hover
  "&:hover": {
    cursor: "pointer",

    // first letter styling
    "span:nth-of-type(1)": {
      transition: "all 1s ease-in",
      transform: "skewX(-15deg)",
      fontWeight: 900,
    },
  },
  // space between first letter for all links except first link
  "&:not(:nth-of-type(1)):hover": {
    "span:nth-of-type(2)": {
      transition: "all .1s ease-in",
      marginLeft: 1.5,
    },
  },
  // space between first letter for all links except first link
  "&:nth-of-type(1):hover": {
    "span:nth-of-type(2)": {
      transition: "all .1s ease-in",
      marginLeft: -0.5,
    },
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "initial",
  },
})) as typeof Link;

export const StyledSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.dark,
  position: "absolute",
  display: "inline-block",
  fontWeight: 300,
  whiteSpace: "nowrap",
  top: 0,
  left: 0,
  transition: "all 1s ease-in-out",
  "&::first-letter": {
    color: theme.palette.white.main,
    transition: "all 1s ease-in-out",
  },
}));

export const StyledFirstLetter = styled("span")(({ theme }) => ({
  color: theme.palette.primary.dark,
  position: "absolute",
  left: 0,
  top: 0,
  zIndex: 4,
}));
