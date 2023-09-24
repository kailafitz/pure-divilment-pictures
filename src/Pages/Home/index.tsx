import React from "react";
import { HomeContainer } from "./styles";
import VideoCarousel from "../../Components/VideoCarousel";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Pure Divilment Pictures</title>
        <meta
          name="description"
          content={
            "Latest productions by Pure Divilment Pictures. Financiers and affiliates of past projects produced by the company."
          }
        />
        <meta property="og:title" content={"Home | Pure Divilment Pictures"} />
        <meta
          property="og:description"
          content={"View some of our most recent productions."}
        />
      </Helmet>
      <HomeContainer>
        <VideoCarousel />
      </HomeContainer>
    </>
  );
};

export default Home;
