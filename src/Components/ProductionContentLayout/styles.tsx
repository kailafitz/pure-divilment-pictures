import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Banner = styled("img")(({ theme }) => ({
  width: "100%",
  minHeight: "25vh",
  objectFit: "cover",
  [theme.breakpoints.up("sm")]: {
    minHeight: "initial",
  },
}));

export const ProductionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: theme.spacing(3, 0),
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
    marginTop: theme.spacing(0),
  },
}));
