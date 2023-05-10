import React from "react";
import "swiper/css";
import { ProductionSwiper, ProductionSwiperSlide } from "./styles";
import { Autoplay } from "swiper";
import { ProductionData } from "../../../Data/ProductionData";
import { ReelItem } from "../styles";
import { Box } from "@mui/material";
import GraphicFilmReelItem from "./GraphicFilmReelItem";

type Props = {
  passHoverFunction: Function;
  passSelectProduction: Function;
  passSetOpen: Function;
};

const ProductionSlider = (props: Props) => {
  return (
    <ProductionSwiper
      modules={[Autoplay]}
      spaceBetween={5}
      loop
      speed={7500}
      slidesPerView={1.25}
      autoplay={{
        delay: 0,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3.5,
        },
        992: {
          slidesPerView: 3.5,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {[1, 2].map(() =>
        ProductionData.map((item, i) => {
          return (
            <ProductionSwiperSlide key={i}>
              {/* <GraphicFilmReelItem
                id={item.production.id}
                imageURL={item.production.coverImage}
                title={item.production.title}
                titleStyle={item.production.reelButtonStyles}
                passSelectProduction={props.passSelectProduction}
                passHoverFunction={props.passHoverFunction}
                passSetOpen={props.passSetOpen}
              /> */}
              <ReelItem
                sx={item.production.reelButtonStyles}
                onClick={() => {
                  props.passSelectProduction(item.production.id);
                  props.passHoverFunction(item.production.coverImage);
                  props.passSetOpen(true);
                }}
                onMouseOver={() => {
                  props.passSelectProduction("");
                  item.production.coverImage !== "Coming Soon"
                    ? props.passHoverFunction(item.production.coverImage)
                    : props.passHoverFunction("#FFFFFF");
                }}
                onMouseOut={() => props.passHoverFunction("")}
              >
                {item.production.title}
              </ReelItem>
            </ProductionSwiperSlide>
          );
        })
      )}
    </ProductionSwiper>
  );
};

export default ProductionSlider;
