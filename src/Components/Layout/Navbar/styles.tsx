import { styled } from "@mui/material";

export const NavigationContainer = styled("div")(({ theme }) => ({
  display: "flex",
  position: "sticky",
  // opacity 0.3 on links
  "nav div div:nth-of-type(3)": {
    transition: "opacity .3s linear",
    "&:hover span": {
      opacity: 0.3,
      transition: "opacity .3s linear",
    },
  },
  // opacity 1 on hovered link
  "nav div div:nth-of-type(3) a": {
    span: {
      transition: "all .3s linear",
    },
    "&:hover span": {
      opacity: 1,
      transition: "all .3s linear",
    },
  },
  background: theme.palette.white.main,
  top: 0,
  zIndex: 2, // 1 When cookie banner is needed
}));

export const HamburgerContainer = styled("div")(({ theme }) => ({
  "> div:nth-of-type(1)": {
    visibility: "hidden",
  },
  "> div:nth-of-type(2)": {
    position: "absolute !important",
    top: 0,
  },

  [theme.breakpoints.up("md")]: {
    "> div:nth-of-type(2)": {
      display: "none",
    },
  },
}));
