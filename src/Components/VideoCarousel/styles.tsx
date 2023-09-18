import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";

export const BillboardSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

export const BillboardSwiperSectionSlide = styled(SwiperSlide)(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  background: theme.palette.primary.main,
  video: {
    objectFit: "cover",
  },
}));
