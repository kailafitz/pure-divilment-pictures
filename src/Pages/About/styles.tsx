import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAboutImage = styled(Box)(({ theme }) => ({
  background: `url('/about/the-creatives-team.png') center / cover no-repeat`,
  position: "fixed",
  zIndex: -1,
  width: "100%",
  minHeight: "300px",

  [theme.breakpoints.up("sm")]: {
    // minHeight: "500px",
    width: "100%",
    height: "-webkit-fill-available",
  },

  [theme.breakpoints.up("lg")]: {
    // minHeight: "700px",
  },
}));
