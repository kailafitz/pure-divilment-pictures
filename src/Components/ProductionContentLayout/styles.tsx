import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { styled } from "@mui/material/styles";

export const Banner = styled("img")(({ theme }) => ({
  width: "100%",
  minHeight: "25vh",
  objectFit: "cover",
  [theme.breakpoints.up("sm")]: {
    minHeight: "initial",
  },
}));

export const ProductionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: theme.spacing(3, 0),
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
    marginTop: theme.spacing(0),
  },
}));

export const ProductionReelOne = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(8),
  background: theme.palette.white.main,
  height: "250px",
  transform: "skewY(-3deg)",

  "div:first-child": {
    paddingLeft: 0,
  },

  "div:last-child": {
    paddingRight: 0,
  },
}));

export const ProductionImage = styled("img")(({ theme }) => ({
  display: "block",
  margin: theme.spacing(0, "auto", 6, "auto"),
  width: "70%",
}));

export const ProductionReelTwo = styled(Grid)(({ theme }) => ({
  clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0% 100%)",
  marginTop: theme.spacing(2),
  background: theme.palette.white.main,
  height: "250px",

  "div:first-child": {
    paddingLeft: 0,
  },

  "div:last-child": {
    paddingRight: 0,
  },
}));
