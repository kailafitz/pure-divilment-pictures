import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { alpha, styled } from "@mui/material/styles";

export const ProductionsReelContainer = styled(Box)(({ theme }) => ({
  paddingTop: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
})) as typeof Box;

export const Reel = styled(Grid)(({ theme }) => ({
  background: theme.palette.white.main,
  transform: "skewY(4deg)",
  margin: 0,

  "div:first-child": {
    paddingLeft: 0,
  },

  "div:last-child": {
    paddingRight: 0,
  },

  [theme.breakpoints.up("md")]: {
    height: "200px",
  },
})) as typeof Grid;

export const ReelItem = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.white.main,
  width: "100%",
  height: "100%",
  borderRadius: 0,
  padding: theme.spacing(3),
  ":hover": {
    background: theme.palette.white.main,
    color: theme.palette.primary.main,
    transition: "all .4s linear",
  },
})) as typeof Button;

export const ProductionCoverImage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "100%",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    // flexGrow: 1,
    marginTop: theme.spacing(-7),
    // minHeight: "200px",
    flexGrow: 1,
  },
})) as typeof Box;
