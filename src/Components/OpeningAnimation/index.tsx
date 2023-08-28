import React from "react";
import { AnimationContainer, TextWrapper, AnimationText } from "./styles";

const OpeningAnimation = () => {
  return (
    <AnimationContainer>
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
