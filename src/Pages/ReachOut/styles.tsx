import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledBackgroundImage = styled(Box)(({ theme }) => ({
  backgroundImage:
    "url('https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2605&q=80')",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "37%",
  height: "100%",
  position: "absolute",
  right: 0,
  top: 0,
  zIndex: -7,
  boxShadow: "inset 7px 18px 49px 2px black",
})) as typeof Box;

export const StyledReelImage = styled(Box)(({ theme }) => ({
  minHeight: "20vh",
  width: "100%",
  zIndex: -1,
  borderTop: `${theme.palette.white.main} 10px solid`,
  transform: "skewY(10deg)",
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: "skewY(-10deg)",
  },
})) as typeof Box;
