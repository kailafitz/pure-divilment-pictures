import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const TeamMemberCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  svg: {
    opacity: 1,
  },
  [theme.breakpoints.up("sm")]: {
    svg: {
      opacity: 0,
      transition: "opacity .8s ease",
    },
    "&:hover": {
      backgroundColor: "transparent",
      img: {
        filter: "grayscale(100%)",
        cursor: "pointer",
      },
      "p, svg": {
        opacity: 1,
        transition: "opacity .8s ease",
      },
    },
  },
})) as typeof Box;

export const TeamMemberTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  textTransform: "uppercase",
  opacity: 1,
  [theme.breakpoints.up("sm")]: {
    opacity: 0,
    transition: "opacity .8s ease",
  },
})) as typeof Typography;

export const TeamImage = styled("img")(({ theme }) => ({
  width: "100%",
  display: "block",
  marginBottom: `${theme.spacing(1)}`,
  transition: "all .7s ease",
}));
