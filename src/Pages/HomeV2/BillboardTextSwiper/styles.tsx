import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";

export const TextSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: "transparent",
  position: "absolute",
  top: 0,
  left: 0,
}));

export const BillboardSwiperTextSlide = styled(SwiperSlide)(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: "transparent",
}));
