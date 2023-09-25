import React from "react";
import { AnimationContainer, TextWrapper, AnimationText } from "./styles";
// import Vid from "../../../Assets/animated-logo.mp4";

const OpeningAnimation = () => {
  return (
    <AnimationContainer className="opening-animation">
      {/* <video
        autoPlay
        preload="none"
        controls={false}
        loop
        muted
        playsInline
        width="50%"
      >
        <source src="/animated-logo.mp4"></source>
      </video> */}
      <TextWrapper>
        {Array(11)
          .fill(null)
          .map((value, index) => (
            <AnimationText className={`text-${index + 1}`} key={index}>
              <p>PURE</p>
              <p>DIVILMENT</p>
            </AnimationText>
          ))}
      </TextWrapper>
    </AnimationContainer>
  );
};

export default OpeningAnimation;
