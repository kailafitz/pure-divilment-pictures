import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledFooter = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.white.main,
  marginTop: "-1px",
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
    marginRight: theme.spacing(0.5),
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

export const LogoWrapper = styled(Box)(({ theme }) => ({
  width: "fit-content",
  img: {
    height: "40px",
    width: "auto",
    margin: "0 auto",
    display: "block",
    padding: "1rem",
  },

  [theme.breakpoints.up("md")]: {
    img: {
      padding: "0",
    },
  },
}));

export const AffiliateLogo = styled("img")(({ theme }) => ({
  width: "fit-content",
  height: "100%",
}));
