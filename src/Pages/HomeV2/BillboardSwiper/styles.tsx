import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";

export const BillboardSwiperSection = styled(Swiper)(({ theme }) => ({
  width: "100%",
  height: "100%",

  "div:nth-child(even)": {
    background: theme.palette.primary.main,
  },
}));

export const BillboardSwiperSectionSlide = styled(SwiperSlide)(({ theme }) => ({
  width: "100%",
  height: "100%",
  background: theme.palette.primary.main,
}));
