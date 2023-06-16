import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const ProfileImage = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
}));

export const BioTypography = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));
