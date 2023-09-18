import { styled } from "@mui/material/styles";

export const ProfileImage = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "cover",
}));

export const Stills = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  display: "block",
}));
