import React from "react";
import { Box, Typography } from "@mui/material";
import ReactLoading from "react-loading";

type LoaderProps = {
  title: string;
};

const Loader = (props: LoaderProps) => {
  return (
    <Box
      sx={{
        background: (theme) => theme.palette.primary.main,
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 3,
        animation: "slide-out-container 2s linear forwards",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <ReactLoading type="bars" color="#ffffff" className="react-loading" />

      {/* <Typography
        textAlign="center"
        color="common.white"
        sx={{
          animation: "visible 1s linear 1s 1 forwards",
          "&::first-letter": {
            fontStyle: "italic",
            marginRight: "3px",
          },
        }}
      >
        {props.title}
      </Typography> */}
    </Box>
  );
};

export default Loader;
