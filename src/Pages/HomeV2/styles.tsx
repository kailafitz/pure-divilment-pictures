import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomeContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "calc(100vh - 88px)",
  display: "flex",
  [theme.breakpoints.up("md")]: {
    flexGrow: 1,
  },
})) as typeof Box;

export const GridImage = styled(Box)(() => ({
  display: "flex",
  flexGrow: "1",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
})) as typeof Box;
