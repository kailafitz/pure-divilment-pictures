import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";

export const ProductionImageReel = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(10),
  background: theme.palette.white.main,

  [theme.breakpoints.up("md")]: {
    height: 250,
    transform: "skewY(-3deg)",
  },
}));

export const ReelWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  margin: "0 auto",
  overflow: "hidden",
  "&::before": {
    content: "''",
    display: "block",
    height: "100%",
    width: "100%",
  },

  [theme.breakpoints.up("lg")]: {
    "&::before": {
      width: "120%",
      transform: "skew(3deg) translateX(-1rem)",
    },
  },
}));
