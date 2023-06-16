import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: theme.spacing(3),
  fontWeight: 300,
  textTransform: "uppercase",
  fontSize: "1.1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "initial",
  },
})) as typeof Link;
