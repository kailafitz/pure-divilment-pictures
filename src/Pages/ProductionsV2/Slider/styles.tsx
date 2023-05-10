import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";

export const ProductionSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  height: "220px",
  // transform: "skewY(6deg)",
}));

export const ProductionSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  background: theme.palette.common.black,
  display: "flex !important",
  // background: "red",
  padding: "0 6px",
}));
