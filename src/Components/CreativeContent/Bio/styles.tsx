import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const BioTypography = styled(Typography)(({ theme }) => ({
  textAlign: "justify",
  span: {
    marginRight: "2px",
  },
  "&:not(:last-child)": {
    marginBottom: theme.spacing(2),
  },
}));
