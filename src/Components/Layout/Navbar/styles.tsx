import { styled } from "@mui/material";

export const HamburgerContainer = styled("div")(({ theme }) => ({
  ">div:nth-of-type(1)": {
    visibility: "hidden",
  },
  ">div:nth-of-type(2)": {
    position: "absolute !important",
    top: 0,
    zIndex: 1501,
  },

  [theme.breakpoints.up("sm")]: {
    ">div:nth-of-type(2)": {
      display: "none",
    },
  },
}));
