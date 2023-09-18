import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
const team = require("../../Assets/the-creatives-team.png");

export const StyledAboutImage = styled(Box)(({ theme }) => ({
  background: `url(${team}) center / cover no-repeat`,
  // backgroundAttachment: "fixed",
  width: "100%",
  minHeight: "300px",

  [theme.breakpoints.up("sm")]: {
    minHeight: "500px",
  },

  [theme.breakpoints.up("lg")]: {
    minHeight: "700px",
  },
}));
