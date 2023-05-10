import { styled } from "@mui/material/styles";

export const AnimationContainer = styled("div")(() => ({
  position: "fixed",
  height: "100%",
  zIndex: 101,
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
