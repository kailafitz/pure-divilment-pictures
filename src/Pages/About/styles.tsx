import { styled } from "@mui/material/styles";

export const StyledAboutBanner = styled("img")(({ theme }) => ({
  width: "100%",
  minHeight: "25vh",
  objectFit: "cover",
  [theme.breakpoints.up("md")]: {
    minHeight: "initial",
  },
}));
