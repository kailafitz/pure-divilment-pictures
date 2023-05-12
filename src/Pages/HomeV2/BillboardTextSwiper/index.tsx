import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { TextSwiper, BillboardSwiperTextSlide } from "./styles";
import "swiper/css";
import { Box, Typography } from "@mui/material";
import { Autoplay } from "swiper";
import { HomeFeatureProductionTitle, HomeTitleContainer } from "../styles";
import PureDivilmentButton from "../../../Components/Button";

type Props = {
  // source1: string;
  // source2: string;
  // source3: string;
  // delay?: number;
};

const BillboardTextSwiper = (props: Props) => {
  return (
    <TextSwiper
      modules={[Autoplay]}
      noSwiping={true}
      speed={3000}
      loop
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
      }}
      style={{ position: "absolute" }}
    >
      <BillboardSwiperTextSlide>
        <HomeTitleContainer
        // sx={{ position: { xs: "fixed", md: "absolute" } }}
        >
          <HomeFeatureProductionTitle>Baths</HomeFeatureProductionTitle>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: 700, mb: 4 }}
          >
            Now Showing
          </Typography>
          <PureDivilmentButton href="/productions/1" label="Find out more" />
        </HomeTitleContainer>
      </BillboardSwiperTextSlide>
      <BillboardSwiperTextSlide></BillboardSwiperTextSlide>
      <BillboardSwiperTextSlide>
        <HomeTitleContainer
        // sx={{ position: { xs: "fixed", md: "absolute" } }}
        >
          <HomeFeatureProductionTitle>Baths</HomeFeatureProductionTitle>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: 700, mb: 4 }}
          >
            Now Showing
          </Typography>
          <PureDivilmentButton href="/productions/1" label="Find out more" />
        </HomeTitleContainer>
      </BillboardSwiperTextSlide>
      <BillboardSwiperTextSlide></BillboardSwiperTextSlide>
      <BillboardSwiperTextSlide>
        <HomeTitleContainer
        // sx={{ position: { xs: "fixed", md: "absolute" } }}
        >
          <HomeFeatureProductionTitle>Baths</HomeFeatureProductionTitle>
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase", fontWeight: 700, mb: 4 }}
          >
            Now Showing
          </Typography>
          <PureDivilmentButton href="/productions/1" label="Find out more" />
        </HomeTitleContainer>
      </BillboardSwiperTextSlide>
      <BillboardSwiperTextSlide></BillboardSwiperTextSlide>
    </TextSwiper>
  );
};

export default BillboardTextSwiper;
