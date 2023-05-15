import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";

export const StyledFooter = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white.main,
}));

export const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  [theme.breakpoints.up("md")]: {
    width: "95%",
    margin: theme.spacing(0, "auto"),
  },
}));

export const AffiliatesFooterSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

export const FooteSectionTitle = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  textAlign: "center",
  margin: theme.spacing(5, "auto"),

  [theme.breakpoints.up("md")]: {
    margin: theme.spacing(4, 0),
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
    "&:first-of-type": {
      img: {
        width: "65%",
      },
    },
    img: {
      width: "100%",
    },
  },
}));

export const SocailLinksContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  textAlign: "center",
  marginBottom: theme.spacing(3),

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(0),
    flexDirection: "column",
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
