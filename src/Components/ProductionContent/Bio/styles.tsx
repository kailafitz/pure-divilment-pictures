import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const ProductionTitle = styled(Box)(({ theme }) => ({
  svg: {
    display: "block",
    width: "60%",
    margin: theme.spacing(0, "auto", 5, "auto"),
  },
  [theme.breakpoints.up("sm")]: {
    svg: {
      width: "30%",
      textAlign: "center",
      marginTop: theme.spacing(0),
    },
  },
}));
