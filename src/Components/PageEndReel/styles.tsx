import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";

export const ProductionReelTwo = styled(Grid)(({ theme }) => ({
  background: theme.palette.white.main,

  [theme.breakpoints.up("lg")]: {
    clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0% 100%)",
    height: 250,
    margin: 0,
  },
}));

export const ReelTwoWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  "&::before": {
    content: "''",
    display: "block",
    height: "100%",
    width: "100%",
    filter: "grayscale(100%)",
  },
  [theme.breakpoints.up("lg")]: {
    "&::before": {
      width: "120%",
      transform: "skew(3deg) translateX(-1rem)",
    },
  },
}));
