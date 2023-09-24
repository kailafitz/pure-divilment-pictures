import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FixedImage = styled(Box)(({ theme }) => ({
  background: `url('/reach/1.png') center / cover no-repeat`,
  zIndex: -1,
  width: "100%",
  minHeight: "300px",

  [theme.breakpoints.up("sm")]: {
    minHeight: "500px",
  },

  [theme.breakpoints.up("md")]: {
    position: "fixed",
    height: "-webkit-fill-available",
  },
}));
