import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAboutImage = styled(Box)(({ theme }) => ({
  background:
    "url('https://images.unsplash.com/photo-1573496130141-209d200cebd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80') no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  margin: theme.spacing(3, "auto"),
  width: "100%",
  minHeight: "500px",

  [theme.breakpoints.up("md")]: {
    width: "90%",
    minHeight: "700px",
  },
}));
