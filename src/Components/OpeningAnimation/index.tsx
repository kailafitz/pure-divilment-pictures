import React from "react";
import { AnimationContainer, TextWrapper, TestText } from "./styles";
import { Box } from "@mui/material";

const OpeningAnimation = () => {
  return (
    <AnimationContainer>
      <TextWrapper>
        {/* {Array(11)
            .fill(null)
            .map((value, index) => (
              <TestText className={`text-${index + 1}`}>
                <span>
                  <p>PURE</p>
                </span>
                <span>
                  <p>DIVILMENT</p>
                </span>
              </TestText>
            ))} */}
        <TestText className="text-1">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-2">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-3">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-4">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-5">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-6">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-7">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-8">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-9">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-10">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
        <TestText className="text-11">
          <span>
            <p>PURE</p>
          </span>
          <span>
            <p>DIVILMENT</p>
          </span>
        </TestText>
      </TextWrapper>
    </AnimationContainer>
  );
};

export default OpeningAnimation;
