import { styled } from "@mui/material/styles";

export const LogoContainer = styled("div")(({ theme }) => ({
  color: theme.palette.common.black,
  fontFamily: "'DM Sans', sans-serif",
  display: "block",
  width: "fit-content",
  margin: 0,
  textTransform: "uppercase",
  span: {
    display: "inline-block",
    width: "fit-content",
    "&:first-of-type": {
      marginRight: "5px",
    },
  },
}));

export const StyledLogoHeading = styled("h1")(({ theme }) => ({
  fontSize: "25px",
  width: "fit-content",
  fontWeight: 700,
  margin: 0,
  letterSpacing: "4px",
  lineHeight: "1",
  "&::first-letter": {
    fontStyle: "italic",
    marginRight: "2px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },
}));

export const StyledLogoSubtitle = styled("h1")(({ theme }) => ({
  fontSize: "10px",
  color: theme.palette.common.black,
  display: "block",
  width: "fit-content",
  margin: "0 auto",
  fontWeight: 300,
  letterSpacing: "4px",
  [theme.breakpoints.up("md")]: {
    fontSize: "15px",
  },
}));
