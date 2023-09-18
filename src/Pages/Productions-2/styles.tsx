import { Box, Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

export const ProductionsReelContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
})) as typeof Box;

export const ReelItem = styled(Tab)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.white.main,
  transition: "all .4s linear",
  minHeight: "200px",
  svg: {
    maxWidth: "80%",
    margin: "0 auto",
  },
  ":hover": {
    background: theme.palette.white.main,
    color: theme.palette.primary.main,
    transition: "all .4s linear",
  },
  "&.Mui-selected": {
    background: theme.palette.white.main,
    color: theme.palette.primary.main,
    transition: "all .4s linear",
  },
})) as typeof Tab;
