import { Box, Button } from "@mui/material";
import React from "react";

type Props = {
  id: string;
  imageURL: string;
  title: string;
  titleStyle: Object;
  passSelectProduction: Function;
  passHoverFunction: Function;
  passSetOpen: Function;
};

const GraphicFilmReelItem = (props: Props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: "6px",
      }}
    >
      <Box
        sx={{
          background: "black",
          display: "flex",
          justifyContent: "space-around",
          paddingBottom: "5px",
        }}
      >
        {Array(12)
          .fill(null)
          .map((i) => (
            <Box
              key={i}
              sx={{
                background: "white",
                height: "14px",
                width: "10px",
                borderRadius: "2px",
              }}
            ></Box>
          ))}
      </Box>
      <Button
        sx={{
          background:
            props.imageURL !== "Coming Soon"
              ? `url(${props.imageURL})`
              : "white",
          flexGrow: 1,
          borderRadius: "15px",
          backgroundSize: "cover",
          backdropFilter: "blur(9px)",
          transition: "backdrop-filter .8s linear",
          "&:hover": {
            backdropFilter: "blur(0px)",
            transition: "backdrop-filter .8s linear",
          },
        }}
        style={props.imageURL !== "Coming Soon" ? props.titleStyle : {}}
        onClick={() => {
          props.passSelectProduction(props.id);
          props.passHoverFunction(props.imageURL);
          props.passSetOpen(true);
        }}
        onMouseOver={() => {
          props.passSelectProduction("");
          props.imageURL !== "Coming Soon"
            ? props.passHoverFunction(props.imageURL)
            : props.passHoverFunction("#FFFFFF");
        }}
        onMouseOut={() => props.passHoverFunction("")}
      >
        {props.imageURL !== "Coming Soon" ? props.title : "Coming Soon"}
      </Button>
      <Box
        sx={{
          background: "black",
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "5px",
        }}
      >
        {Array(12)
          .fill(null)
          .map((i) => (
            <Box
              key={i}
              sx={{
                background: "white",
                height: "14px",
                width: "10px",
                borderRadius: "2px",
              }}
            ></Box>
          ))}
      </Box>
    </Box>
  );
};

export default GraphicFilmReelItem;
