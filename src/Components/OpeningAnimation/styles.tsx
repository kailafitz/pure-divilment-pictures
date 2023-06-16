import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AnimationContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  height: "100%",
  zIndex: 101,
  width: "100%",
  margin: "0px auto",
  display: "flex",
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

export const TestText = styled("div")(({ theme }) => ({
  fontFamily: "DM Sans",
  fontWeight: "lighter",
  fontSize: "30px",

  [theme.breakpoints.up("md")]: {
    fontSize: "54px",
  },

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
