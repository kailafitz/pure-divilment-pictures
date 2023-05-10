import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomeContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "calc(100vh - 88px)",
  display: "flex",
  [theme.breakpoints.up("md")]: {
    flexGrow: 1,
  },
})) as typeof Box;

export const GridImage = styled(Box)(() => ({
  display: "flex",
  flexGrow: "1",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
})) as typeof Box;

export const HomeTitleContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  color: theme.palette.common.white,
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
})) as typeof Box;

export const HomeFeatureProductionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Libre Baskerville",
  fontSize: "7rem",
  lineHeight: "initial",
  letterSpacing: "2px",
  "::first-letter": {
    fontStyle: "italic",
    marginRight: "1px",
  },

  [theme.breakpoints.up("md")]: {
    fontSize: "15rem",
  },
})) as typeof Typography;
