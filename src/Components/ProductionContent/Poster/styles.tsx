import { styled } from "@mui/material/styles";

export const ProductionImage = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",

  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(0, "auto", 6, "auto"),
    width: "70%",
  },
}));
