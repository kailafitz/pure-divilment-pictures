import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";

export const StyledFooter = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  // marginTop: theme.spacing(5),
  backgroundColor: theme.palette.common.black,
  color: theme.palette.common.white,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  textAlign: "center",
  margin: theme.spacing(5, "auto"),

  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(3),
    textAlign: "left",
  },
}));

export const Affiliates = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const AffiliatesContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  img: {
    width: "20%",
  },

  [theme.breakpoints.up("md")]: {
    img: {
      width: "70%",
      margin: "0 auto",
    },
  },
}));

export const SocailLinksContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(0),
    justifyContent: "left",
    textAlign: "left",
  },
}));

export const Copyright = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  svg: {
    fontSize: "11px",
    marginRight: theme.spacing(1),
  },
  span: {
    margin: theme.spacing(0, 1),
  },

  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    justifyContent: "end",
  },
}));

export const FooterDetails = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

export const LogoGrid = styled(Grid2)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  img: {
    width: "70%",
    display: "block",
    margin: theme.spacing(0, "auto"),
  },

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(0),
    img: {
      width: "100%",
    },
  },
}));
