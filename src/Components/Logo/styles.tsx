import { styled } from "@mui/material/styles";

export const LogoContainer = styled("div")(({ theme }) => ({
  fontFamily: "'DM Sans', sans-serif",
  display: "block",
  width: "fit-content",
  margin: 0,
  textTransform: "uppercase",
  span: {
    display: "inline-block",
    width: "fit-content",
    "&:first-of-type": {
      marginRight: "10px",
    },
  },
}));

export const StyledLogoHeading = styled("h1")(({ theme }) => ({
  fontSize: "20px",
  width: "fit-content",
  fontWeight: 700,
  margin: 0,
  letterSpacing: "6px",
  lineHeight: "1",
  "&::first-letter": {
    fontStyle: "italic",
    marginRight: "2px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "33px",
  },
}));

export const StyledLogoSubtitle = styled("h1")(({ theme }) => ({
  fontSize: "12px",
  display: "block",
  width: "fit-content",
  margin: "0 auto",
  fontWeight: 300,
  letterSpacing: "6px",
  [theme.breakpoints.up("md")]: {
    fontSize: "25px",
  },
}));
