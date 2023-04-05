import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const TeamMemberCardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    "&:hover": {
      backgroundColor: "transparent",
      img: {
        filter: "grayscale(100%)",
        cursor: "pointer",
      },
      p: {
        opacity: 1,
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
  transition: "filter .7s ease",
}));
