import { Box, Typography } from "@mui/material";
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
  marginBottom: theme.spacing(10),
  background: theme.palette.white.main,

  [theme.breakpoints.up("md")]: {
    height: "250px",
    transform: "skewY(-3deg)",
  },
}));

export const ReelOneWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  margin: "0 auto",
  overflow: "hidden",
  "&::before": {
    content: "''",
    display: "block",
    height: "100%",
    width: "100%",
  },

  [theme.breakpoints.up("lg")]: {
    "&::before": {
      width: "120%",
      transform: "skew(3deg) translateX(-1rem)",
    },
  },
}));

export const ProductionImage = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(0, "auto", 6, "auto"),
    width: "70%",
  },
}));

export const ProductionReelTwo = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  background: theme.palette.white.main,

  [theme.breakpoints.up("lg")]: {
    clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0% 100%)",
    height: "250px",
    margin: 0,
  },
}));

export const ReelTwoWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  "&::before": {
    content: "''",
    display: "block",
    height: "100%",
    width: "100%",
    filter: "grayscale(100%)",
  },
  [theme.breakpoints.up("lg")]: {
    "&::before": {
      width: "120%",
      transform: "skew(3deg) translateX(-1rem)",
    },
  },
}));
