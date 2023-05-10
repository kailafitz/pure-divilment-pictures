import { styled } from "@mui/material";

export const NavigationContainer = styled("div")(({ theme }) => ({
  display: "flex",
  position: "sticky",
  "nav div div:nth-child(3)": {
    transition: "opacity .3s linear",

    "&:hover a": {
      opacity: 0.3,
      transition: "opacity .3s linear",
    },
  },
  "nav div div:nth-child(3) a": {
    display: "inline-block",
    transition: "all 1s linear",

    "&:not(.active)::first-letter": {
      transition: "all 1s linear",
      fontStyle: "normal",
      marginRight: "0px",
      fontWeight: 400,
    },

    "&:hover": {
      opacity: 1,
      transition: "all 1s linear",

      "&:not(.active)::first-letter": {
        transition: "all 1s linear",
        fontStyle: "italic",
        marginRight: "3px",
        fontWeight: 900,
      },
    },
  },
  background: theme.palette.common.white,
  top: 0,
  zIndex: 2,
}));

export const HamburgerContainer = styled("div")(({ theme }) => ({
  ">div:nth-of-type(1)": {
    visibility: "hidden",
  },
  ">div:nth-of-type(2)": {
    position: "absolute !important",
    top: 0,
  },

  [theme.breakpoints.up("sm")]: {
    ">div:nth-of-type(2)": {
      display: "none",
    },
  },
}));
