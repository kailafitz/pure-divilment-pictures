import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";

export const HomeContainer = styled("div")(() => ({
  position: "relative",
  flexGrow: 1,
  height: "100%",
  width: "100%",
  // position: "absolute",
  // zIndex: -1,
}));

export const GridImage = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexGrow: "1",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",

  [theme.breakpoints.up("md")]: {
    "&:not(:last-child)": {
      borderRight: "7px black solid",
    },
  },
}));

export const HomeTitleContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  color: theme.palette.common.white,
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  zIndex: 5,
}));

export const HomeFeatureProductionTitle = styled(Typography)(() => ({
  fontFamily: "Libre Baskerville",
  fontSize: "5rem",
  lineHeight: "initial",
  letterSpacing: "2px",
  "::first-letter": {
    fontStyle: "italic",
    marginRight: "1px",
  },
}));

export const TestText = styled("div")(() => ({
  fontFamily: "DM Sans",
  fontWeight: "lighter",
  fontSize: "54px",

  span: {
    "&:first-of-type": {
      marginRight: "1rem",
    },
    p: {
      margin: 0,
      display: "inline-block",
      "::first-letter": {
        fontStyle: "italic",
        marginRight: "7px",
      },
    },
  },
}));
