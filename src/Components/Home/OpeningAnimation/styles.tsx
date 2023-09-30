import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AnimationContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  height: "100%",
  zIndex: 999,
  width: "100%",
  margin: "0px auto",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  background: theme.palette.primary.main,
  animation: "slide-out-container 1.5s linear 2.5s",
  animationFillMode: "forwards",
  overflow: "hidden",
}));

export const TextWrapper = styled(Box)(() => ({
  color: "white",
  position: "absolute",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const AnimationText = styled("div")(({ theme }) => ({
  fontFamily: "DM Sans",
  fontSize: "40px",
  fontWeight: 500,
  [theme.breakpoints.up("md")]: {
    fontSize: "54px",
  },
  p: {
    margin: 0,
    display: "inline-block",
    letterSpacing: "4px",
    "&::first-letter": {
      fontStyle: "italic",
      marginRight: "3px",
    },
    "&:first-of-type": {
      marginRight: "9px",
    },
  },
  [theme.breakpoints.up("md")]: {
    p: {
      display: "inline-block",
      "&::first-letter": {
        fontStyle: "italic",
        marginRight: "9px",
      },
      "&:first-of-type": {
        marginRight: "1rem",
      },
    },
  },
}));
