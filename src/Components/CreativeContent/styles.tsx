import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const ProfileImage = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
}));

export const BioTypography = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));

export const Stills = styled("img")(({ theme }) => ({
  minWidth: "40%",
  maxWidth: "80%",
  display: "block",
  margin: "1rem auto",
  [theme.breakpoints.up("md")]: {
    margin: "0 auto",
    maxWidth: "95%",
  },
}));
