import React, { Fragment, useRef } from "react";
import {
  BillboardSwiper,
  BillboardSwiperSectionSlide,
  HomeFeatureProductionTitle,
  HomeTitleContainer,
} from "./styles";
import "swiper/css";
import { Typography, Button } from "@mui/material";
import { Autoplay } from "swiper";
import { ProductionData } from "../../Data/ProductionData";

type textProps = {
  title: string;
  id: string;
  styles: Object;
  isActive: boolean;
  desktopFontSize: string;
  mobileFontSize: string;
};

const TextSlideContent = (props: textProps) => {
  return (
    <HomeTitleContainer
      sx={{
        animation: props.isActive ? "text-in 13s linear 1s 1 forwards" : "none",
      }}
    >
      <HomeFeatureProductionTitle
        sx={{
          fontSize: {
            xs: props.mobileFontSize,
            lg: props.desktopFontSize,
          },
          ...props.styles,
        }}
      >
        {props.title}
      </HomeFeatureProductionTitle>
      <Typography
        color="common.white"
        variant="h5"
        sx={{ textTransform: "uppercase", fontWeight: 700, mb: 4 }}
      >
        Now Showing
      </Typography>
      <Button
        color="white"
        variant="contained"
        href={`/productions/${props.id}`}
        sx={{ width: "fit-content", m: "0 auto", borderRadius: 0 }}
      >
        Find out more
      </Button>
    </HomeTitleContainer>
  );
};

const VideoCarousel = () => {
  const vid1 = useRef<HTMLVideoElement>(null);
  const vid2 = useRef<HTMLVideoElement>(null);
  const vid3 = useRef<HTMLVideoElement>(null);

  const productionsToShowOnHomePage = ["1", "2", "3"];
  const productionVideos = [vid1, vid2, vid3];

  const handleActiveVideo = (
    isActive: boolean,
    video: React.RefObject<HTMLVideoElement>
  ) => {
    if (video && video.current)
      if (isActive) {
        video.current.focus();
        video.current.play();
      } else {
        video.current.load();
      }
  };

  return (
    <BillboardSwiper
      id="billboard-swiper"
      modules={[Autoplay]}
      noSwiping={true}
      speed={1000}
      loop
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        disableOnInteraction: true,
      }}
    >
      {ProductionData.filter((prod) =>
        productionsToShowOnHomePage.includes(prod.production.id)
      ).map((product, i) => {
        return (
          <Fragment key={product.production.title}>
            <BillboardSwiperSectionSlide
              key={`${product.production.title}-feature-slide`}
              data-swiper-autoplay="15000"
            >
              {({ isActive }) => {
                handleActiveVideo(
                  isActive,
                  productionVideos[Number(product.production.id) - 1]
                );

                return (
                  <>
                    <video
                      ref={productionVideos[Number(product.production.id) - 1]}
                      id={product.production.title}
                      className="production-title"
                      height="100%"
                      width="100%"
                      preload="none"
                      controls={false}
                      loop
                      muted
                      playsInline
                    >
                      {window?.innerWidth < 768 ? (
                        <source
                          src={product.production.videoMobile}
                          type="video/mp4"
                        ></source>
                      ) : (
                        <source
                          src={product.production.videoDesktop}
                          type="video/mp4"
                        ></source>
                      )}
                    </video>
                    <TextSlideContent
                      title={product.production.title}
                      id={product.production.id}
                      styles={product.production.titleStyles.baseStyles}
                      desktopFontSize={
                        product.production.titleStyles.slideFontSize.desktop
                      }
                      mobileFontSize={
                        product.production.titleStyles.slideFontSize.mobile
                      }
                      isActive={isActive}
                    />
                  </>
                );
              }}
            </BillboardSwiperSectionSlide>
            {/* <BillboardSwiperSectionSlide
              key={`${product.production.title}-blank-slide`}
              data-swiper-autoplay="200"
            ></BillboardSwiperSectionSlide> */}
          </Fragment>
        );
      })}
    </BillboardSwiper>
  );
};

export default VideoCarousel;
