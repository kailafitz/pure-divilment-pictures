import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";

export const BillboardSwiper = styled(Swiper)(({ theme }) => ({
  width: "100%",
  height: "100%",

  "> div:nth-of-type(even)": {
    background: theme.palette.primary.main,
  },
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

export const HomeFeatureProductionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
})) as typeof Typography;
