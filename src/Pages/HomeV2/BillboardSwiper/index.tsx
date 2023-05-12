import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BillboardSwiperSection, BillboardSwiperSectionSlide } from "./styles";
import "swiper/css";
import { Box } from "@mui/material";
import { Autoplay } from "swiper";

type Props = {
  source1: string;
  source2: string;
  source3: string;
  delay?: number;
};

const BillboardSwiper = (props: Props) => {
  return (
    <BillboardSwiperSection
      modules={[Autoplay]}
      noSwiping={true}
      speed={3000}
      loop
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: props.delay,
      }}
    >
      <BillboardSwiperSectionSlide>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: `url(${props.source1}) no-repeat`,
            backgroundPosition: "center",
          }}
        ></Box>
      </BillboardSwiperSectionSlide>
      <BillboardSwiperSectionSlide></BillboardSwiperSectionSlide>
      <BillboardSwiperSectionSlide>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: `url(${props.source2})`,
          }}
        ></Box>
      </BillboardSwiperSectionSlide>
      <BillboardSwiperSectionSlide></BillboardSwiperSectionSlide>
      <BillboardSwiperSectionSlide>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: `url(${props.source3})`,
          }}
        ></Box>
      </BillboardSwiperSectionSlide>
      <BillboardSwiperSectionSlide></BillboardSwiperSectionSlide>
    </BillboardSwiperSection>
  );
};

export default BillboardSwiper;
