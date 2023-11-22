import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const CreativeCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  svg: {
    opacity: 1,
  },
  [theme.breakpoints.up("md")]: {
    svg: {
      opacity: 0,
      transition: "opacity .8s ease",
    },
    "&:hover": {
      background: "transparent",
      img: {
        filter: "grayscale(1) saturate(0)",
        cursor: "pointer",
        transition: "all .7s ease",
      },
      "p, svg": {
        opacity: 1,
        transition: "opacity .8s ease",
      },
    },
  },
})) as typeof Box;

export const CreativeMemberTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  textTransform: "uppercase",
  opacity: 1,
  [theme.breakpoints.up("md")]: {
    opacity: 0,
    transition: "opacity .8s ease",
  },
})) as typeof Typography;

export const CreativeImage = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  marginBottom: `${theme.spacing(1)}`,
  transition: "all .7s ease",
  filter: "saturate(1.15) greyscale(0)",
}));
