import { styled } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";

export const ProfileImage = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center 25%",
  minHeight: "315px",
}));

export const BioTypography = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));
