import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginLeft: theme.spacing(3),
  fontWeight: 300,
  textTransform: "uppercase",
})) as typeof Link;
