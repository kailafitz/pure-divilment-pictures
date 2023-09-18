import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HomeTitleContainer = styled(Box)(() => ({
  position: "absolute",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  zIndex: 99,
  top: 0,
  left: 0,
  opacity: 0,
})) as typeof Box;
