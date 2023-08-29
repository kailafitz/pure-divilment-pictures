import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ProductionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: theme.spacing(3, 0),
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
    marginTop: theme.spacing(0),
  },
}));
