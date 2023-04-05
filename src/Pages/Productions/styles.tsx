import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Reel = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(3, 0),
  a: {
    transform: "skewy(-8deg)",
  },
  [theme.breakpoints.up("md")]: {
    alignItems: "center",
    margin: theme.spacing(0),
    "a + a": {
      paddingLeft: ".5vh !important",
    },
    a: {
      transform: "skewY(4deg)",
    },
    "& :nth-of-type(2)": {
      marginTop: "calc(250px - 200px)",
    },
    "& :nth-of-type(3)": {
      marginTop: "calc(250px - 150px)",
    },
    "& :nth-of-type(4)": {
      marginTop: "calc(250px - 100px)",
    },
    "& .MuiGrid-item": {
      padding: theme.spacing(0),
    },
    "&:has(> a) + div": {
      transition: "background .6s ease-in, opacity .6s ease-in",
    },
    "&:hover:has(> a) + div": {
      opacity: 1,
      transition: "background .6s ease-in, opacity .6s ease-in",
    },
  },
})) as typeof Grid;

export const ReelItemButton = styled(Grid)(({ theme }) => ({
  color: theme.palette.common.white,
  transition: "background-color ease 1s",
  borderRadius: 0,
  overflow: "hidden",
  padding: theme.spacing(3, 0),
  "&:hover": {
    backgroundColor: "transparent",
  },
  [theme.breakpoints.up("md")]: {},
})) as typeof Grid;

export const ReelItem = styled(Box)(() => ({
  minHeight: "250px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})) as typeof Box;

export const ReelTypography = styled(Typography)(() => ({
  textAlign: "center",
  width: "80%",
  margin: "0 auto",
})) as typeof Typography;

export const ProductionCoverImage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    clipPath: "polygon(0 0, 100% 18%, 100% 100%, 0% 100%)",
    width: "100%",
    backgroundPosition: "center",
    height: "70vh",
    marginTop: theme.spacing(-11),
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
})) as typeof Box;
