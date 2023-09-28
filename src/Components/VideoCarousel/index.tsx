import React, { Fragment, useRef } from "react";
import { BillboardSwiper, BillboardSwiperSectionSlide } from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { ProductionData } from "../../Data/ProductionData";
import SlideText from "./SlideText";

const VideoCarousel = () => {
  const vid1 = useRef<HTMLVideoElement>(null);
  const vid2 = useRef<HTMLVideoElement>(null);

  const productionsToShowOnHomePage = ["1", "2"];
  const productionVideos = [vid1, vid2];

  const filteredData = ProductionData.filter((prod) => {
    return productionsToShowOnHomePage.includes(prod.production.id);
  });

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
      modules={[Autoplay, Pagination, Navigation]}
      noSwiping={true}
      pagination={{
        clickable: true,
        // bulletElement: "div",
        bulletClass: "swiper-pagination-bullet custom-bullet",
      }}
      navigation={true}
      speed={1000}
      loop
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        disableOnInteraction: false,
      }}
    >
      {filteredData.reverse().map((product) => {
        return (
          <Fragment key={product.production.id}>
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
                      poster={`/productions/${product.production.fileHandle}/reel-poster.png`}
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
                    <SlideText
                      text={product.production.homeSlideText}
                      logo={product.production.logo}
                      id={product.production.id}
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
