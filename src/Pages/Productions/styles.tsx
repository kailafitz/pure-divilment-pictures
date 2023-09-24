import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

export const ProductionsReelContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  paddingBottom: theme.spacing(4),
  minHeight: "unset",
  [theme.breakpoints.up("md")]: {
    paddingBottom: "0",
    minHeight: "calc(100vh - (96px + 148px))",
  },
  [theme.breakpoints.up("lg")]: {
    height: "100%",
  },
})) as typeof Box;

export const Reel = styled(Grid)(({ theme }) => ({
  background: theme.palette.white.main,
  margin: 0,

  div: {
    minHeight: "200px",
  },

  "div:nth-of-type": {
    paddingLeft: 0,
  },

  "div:last-child": {
    paddingRight: 0,
  },

  [theme.breakpoints.up("md")]: {
    height: "300px",
    transform: "skewY(4deg)",
    paddingTop: "calc(100px)",
    div: {
      minHeight: "unset",
    },
  },
})) as typeof Grid;

export const ReelItem = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.white.main,
  width: "100%",
  height: "100%",
  borderRadius: 0,
  padding: theme.spacing(3),
  lineHeight: 1,
  ":hover": {
    background: theme.palette.white.main,
    color: theme.palette.primary.main,
    transition: "all .4s linear",
  },
  svg: {
    width: "60%",
    margin: "0 auto",
  },
})) as typeof Button;

export const ProductionHeroImage = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    // marginTop: theme.spacing(-20),
    // clipPath: "polygon(0 0, 100% 21%, 100% 100%, 0% 100%)",
    width: "100%",
    // backgroundPosition: "top center",
    backgroundSize: "cover",
    // backgroundPosition: "100% 100%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    flexGrow: 1,
  },
})) as typeof Box;
