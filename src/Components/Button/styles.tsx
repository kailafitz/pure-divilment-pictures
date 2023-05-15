import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BrandButton = styled(Button)(({ theme }) => ({
  background: theme.palette.white.main,
  color: theme.palette.primary.main,
  transition: "all .6s linear",
  borderRadius: "0px",
  cursor: "pointer",

  "&:hover": {
    color: "#ffffffd6",
    transition: "all .6s linear",
  },
})) as typeof Button;
